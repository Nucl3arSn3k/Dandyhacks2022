import difflib
import requests
from bs4 import BeautifulSoup

# firebase
import firebase_admin
from firebase_admin import credentials, firestore



def menuscrape():
    url = "https://menupages.com/desiatos-deli/1475-e-henrietta-rd-rochester"

    # food api details
    # application key
    # 5c2d822683944bbfc67100b042176a9c
    # application ID
    # a988b355
    resp = requests.get(url)

    soup = BeautifulSoup(resp.content, "html.parser")
    job0 = soup.find_all("h1", class_="header__restaurant-name")
    job1 = soup.find_all("span", class_="address-display")
    job2 = soup.find_all("span", class_="restaurant-phone")
    job3 = soup.find_all("span", class_="header__primary-cuisines")

    print(job2[0])

    # souptext = job.get_text()
    job5 = soup.find_all("a", class_="menu-item__title-link")
    job6 = soup.find_all("p", class_="menu-item__description clamp2")
    job7 = soup.find_all("span", class_="menu-item__price")  # fetches menu item price
    job8 = soup.find_all("div", class_="header__logo")  # fetches the image

    resturant_name_raw = str(job0)
    resturant_adress_raw = str(job1)
    resturant_phone_raw = str(job2[0])
    resturant_cuisines_raw = str(job3)
    resturant_name = BeautifulSoup(resturant_name_raw, "lxml").text
    resturant_adress = BeautifulSoup(resturant_adress_raw, "lxml").text
    resturant_phone = BeautifulSoup(resturant_phone_raw, "lxml").text
    resturant_cuisines = BeautifulSoup(resturant_cuisines_raw, "lxml").text

    res_logo = str(job8)
    res_logo = res_logo.split()
    res_logo = res_logo[5][5:-2]

    list0 = []
    list1 = []
    for x in job5:
        strx = str(x)
        strx_clean = BeautifulSoup(strx, "lxml").text
        # print(strx)
        # f.close()'
        list0.append(strx_clean)

    for x in job6:
        strx = str(x)
        strx_clean = BeautifulSoup(strx, "lxml").text

    for x in job7:
        strx = str(x)
        strx_clean = BeautifulSoup(strx, "lxml").text
        strx_even_cleaner = strx_clean.replace("+", "")
        strx_even_cleaner_v2 = strx_even_cleaner.replace("\n", "")
        list1.append(strx_even_cleaner_v2)

    adresslist = []
    comparisonlist = []
    comparisonlistparsed = []
    finalingredients = []
    error = ["Error"]
    # x = "Buffalo Calzone"
    # x = "Chicken Club Calzone"  # test case for no ingredients listed
    # x = "Parma Calzone"
    # x = "Bottled Soda"  # bottled soda defaults to Faygo due to the names used in the json
    # list0.pop(1)
    for x in list0:

        y = x
        # print(y)
        z = y.replace(" ", "%20")

        urlv2 = (
            "https://api.edamam.com/api/food-database/v2/parser?app_id=1ef1b41b&app_key=%202710b461789f02214b6bb2ebc6f1a870&ingr="
            + z
            + "&nutrition-type=cooking"
        )
        resp = requests.get(urlv2)
        ingredient_dict = resp.json()
        # print(ingredient_dict.keys())

        if len(ingredient_dict["parsed"]) == 0:
           print("No perfect match")
        else:
            #print("Match found")
            comparisonlist.append(ingredient_dict["parsed"][0]["food"]["label"])
            adresslist.append([["parsed"], [-1], ["food"], ["label"]])

        i = 0
        for x in ingredient_dict["hints"]:
            i += 1
            # print(i)

        counter = 0
        for x in range(i):
            # print(x)
            # print(counter)
            # print(ingredient_dict["hints"][x]["food"]["label"])
            counter += 1
            comparisonlist.append(ingredient_dict["hints"][x]["food"]["label"])
            adresslist.append([["hints"], [x], ["food"], ["label"]])
            # print(type(ingredient_dict["hints"][x]["food"]["label"]))
        # comparisonlist.pop(0)
        # print(comparisonlist)
        local = ingredient_dict["text"]
        match = difflib.get_close_matches(local, comparisonlist)
        #print("Inital search input was: " + y)
        #print(match)
        # print(matchv2)
        errorstate = []
        inttrack = 0
        # print(adresslist)
        # checks if there's a actual match,if so,no need to try this
        pot_matches = []
        for x in range(len(match)):
            pot_matches = []
            #print(inttrack)
            index = comparisonlist.index(match[inttrack])
            # print(comparisonlist)
            # print(index)
            var = adresslist[index]
            xi = var[1]
            xiv = xi[0]
            inttrack = inttrack + 1
            # print(inttrack)

            if keys_exists(ingredient_dict, "hints", xiv, "food", "foodContentsLabel"):
                #print("yay")
                #print(ingredient_dict["hints"][xiv]["food"]["foodContentsLabel"])
                x = ingredient_dict["hints"][xiv]["food"]["foodContentsLabel"]
                pot_matches.append(x)
                break
        finalingredients.append(pot_matches)

    #print(len(list0))
    #print(len(finalingredients))
    #print(finalingredients[0])
    zipped = zip(finalingredients, list0, list1)
    zipped_list = list(zipped)

    restaurant_menu = []

    # Creating an array of menu objects
    for index in range(len(list0)):
        obj = {
            'name': list0[index],
            'price': list1[index],
            'ingredients': finalingredients[index],
        }
        restaurant_menu.append(obj)

    dictionary = {
        "restaurant_name": resturant_name.replace('[', '').replace(']', ''),
        "restaurant_address": resturant_adress.replace('[', '').replace(']', ''),
        "restaurant_phone": resturant_phone.replace('[', '').replace(']', ''),
        "restaurant_cuisine": resturant_cuisines.replace('[', '').replace(']', ''),
        "restaurant_image": res_logo,
        "restaurant_menu": restaurant_menu,
    }

    # dictionary["Dict1"] = head
    # json_object = json.dumps(dictionary, indent=4)
    # print(dictionary)
    # print(json_object)

    return dictionary


def keys_exists(element, *keys):
    # method for checking nestedkeys
    if not isinstance(element, dict):
        raise AttributeError("keys_exists() expects dict as first argument.")
    if len(keys) == 0:
        raise AttributeError("keys_exists() expects at least two arguments, one given.")

    _element = element
    for key in keys:
        try:
            _element = _element[key]
        except KeyError:
            return False
    return True


def main():
    dict = menuscrape()
    
    # initialize sdk
    cred = credentials.Certificate("secret key.json")
    firebase_admin.initialize_app(cred)

    # initialize firestore instance
    firestore_db = firestore.client()

    # add data 
    response = firestore_db.collection(u'restaurants_info').add({
        "restaurant_name": dict["restaurant_name"],
        "restaurant_address": dict["restaurant_address"],
        "restaurant_phone": dict["restaurant_phone"],
        "restaurant_image": dict["restaurant_image"],
        "restaurant_cuisine": dict["restaurant_cuisine"],
        })

    id = response[1].id
    dict["id"] = id

    # add data 
    firestore_db.collection(u'restaurants_menu').add(dict)

    
    





    # read data
    snapshots = list(firestore_db.collection(u'restaurants').get())
    for snapshot in snapshots:
        print(snapshot.to_dict())
    
   
if __name__ == "__main__":
    main()
