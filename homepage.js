var favourites = JSON.parse(localStorage.getItem('listFavourites'));
if(favourites===null){
    favourites = [];
}

var input = document.getElementById('inputField');
var results = document.getElementById('results');


input.onkeyup = function(){
    var inputValue = input.value;

    if(inputValue!==''){
        results.style.display = 'block';

        fetch('https://www.superheroapi.com/api.php/2772108476351146/search/'+inputValue.trim())
        .then(response=>response.json())
        .then(data=>{
            createNew(data)
        })
        .catch(err=>console.log(err));
    }else{
        results.style.display = 'none';
    }
}

function createNew(data){
    if(data.response === 'error'){
        console.log(data.response);
        results.innerHTML='<div>No Results Found!</div>';
    }
    else{
        results.innerHTML = null;
        
        for(var i=0;i<data.results.length;i++){
            // Create the a superhero card 
            var superhero = document.createElement('div');
            superhero.className = 'superhero-container';

            //Superhero Image
            var superheroImage =document.createElement('div');
            var supergeroImg = document.createElement('img');
            superheroImage.className = 'superhero-image'
            supergeroImg.src = data.results[i].image.url;
            superheroImage.appendChild(supergeroImg);
            superhero.appendChild(superheroImage);

            //Superhero Name
            var superheroName = document.createElement('div');
            superheroName.className = 'superhero-name';
            superheroName.innerHTML = data.results[i].name;
            superhero.appendChild(superheroName);

            //Button for add to favourite
            var favourite = document.createElement('div');
            favourite.className = 'favbutton-container';
            let id = data.results[i].id;
            var favImage = document.createElement('img');
            if(favourites.includes(id)){
                favImage.src = 'https://image.flaticon.com/icons/svg/3208/3208707.svg';
            }else{
                favImage.src = 'https://image.flaticon.com/icons/svg/3208/3208597.svg';
            }
            favourite.appendChild(favImage);
            superhero.appendChild(favourite);

            //link the particular id to button
            favImage.setAttribute('superheroid',data.results[i].id);
            favImage.setAttribute('divtype','fav-btn');
            superheroName.setAttribute('superheroid',data.results[i].id);
            superheroName.setAttribute('divType','details-btn');

            results.appendChild(superhero);
        }
    }
}

results.onclick = function(e){
    var id = e.target.getAttribute('superheroid');
    var div = e.target.getAttribute('divtype');
    console.log(e.target);

    if(div === 'fav-btn'){
        if(id === null){
            return;
        }
        if(favourites.includes(id)){
            var i = favourites.indexOf(id);
            favourites.splice(i,1);
            e.target.src = 'https://image.flaticon.com/icons/svg/3208/3208597.svg';
        }else{
            favourites.push(id);
            e.target.src = 'https://image.flaticon.com/icons/svg/3208/3208707.svg';
        }
        console.log(favourites);
    
        localStorage.setItem('listFavourites',JSON.stringify(favourites));
    }else if(div === 'details-btn'){
        if(id === null){
            return;
        }
        window.open("heroDetails.html?id="+id,"_self");
    }
    
}