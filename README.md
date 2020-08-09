# SuperHero_API_VANILLAJS
A Frontend Project on SuperheroAPI.

Features-
* You can search any superhero and it will suggest you dynamically according to your keywords.
* You can put your hero into your favourite list and see the list.
* You can the details of your superhero suggested one and favourite one as well.
* Super simplified UI.
* Link -

Technology used-
* HTML5
* CSS3
* Vanilla JS

Functionalities-
* Homepage
  - GET Request - 'https://www.superheroapi.com/api.php/access-token/search/inputValue'
    - In order to suggest the superhero the api and js suggest dynamically and update on each keyword on input bar.
    - Click on the name of the superhero get to the details page
    - Click on the heart of the superhero right side, it will create persistent favourite list array object.
           
* Favourites Page 
  - GET Request - 'https://superheroapi.com/api.php/access-token/id/image'
    - Here using storing the superhero id and fetch the favourite array object from above, show the superhero on the page.
    - Array is stored in localstorage.
    - Click on the heart leads to disappear the superhero favourite list from parentNode as well as from the array.
    - Click on the Name of the superhero leads to the details page.
                  
* Details Page  
  - GET Request - 'https://superheroapi.com/api.php/access-token/id'
    - Here it is all the details of the superHero fetching using id of the superhero.
              
*** You can get "access-token" from the API link - "https://www.superheroapi.com/" (and login using facebook)***.
