var listFavourites = JSON.parse(localStorage.getItem('listFavourites'));
if(listFavourites === null){
    listFavourites = [];
}

var favourite = document.getElementById('favourite-superhero');

if(listFavourites.length === 0){
    favourite.innerHTML = '<div style="color:white;text-align:center">No one is your Favourite!</div>'
}

for(var i of listFavourites){
    fetch('https://superheroapi.com/api.php/2772108476351146/'+i+'/image')
    .then(response=>response.json())
    .then(data=>{
        createHero(data);
    })
    .catch(err=>console.log(err));
}

function createHero(data){
    console.log(data);
    var heroCard = document.createElement('div');
    heroCard.className = 'fav-hero-card';

    var heroImageContainer = document.createElement('div');
    heroImageContainer.className = 'fav-hero-image-container';
    var heroImage = document.createElement('img');
    heroImage.src = data.url;
    heroImageContainer.appendChild(heroImage);
    heroCard.appendChild(heroImageContainer);

    var heroName = document.createElement('div');
    heroName.className = 'fav-hero-name-container';
    heroName.innerHTML = data.name;
    heroCard.appendChild(heroName);
    
    var favIcon = document.createElement('div');
    favIcon.className = 'fav-icon'
    var icon = document.createElement('img');
    icon.id = 'icon';
    icon.src = 'https://image.flaticon.com/icons/svg/3208/3208707.svg';
    favIcon.appendChild(icon);
    heroCard.appendChild(favIcon);

    heroCard.setAttribute('id',data.id);
    icon.setAttribute('divtype','fav-btn');
    heroName.setAttribute('divtype','details-btn');

    favourite.appendChild(heroCard);
}

favourite.onclick = function(e){
    var div = e.target.getAttribute('divtype');

    if(div === 'fav-btn'){
        if(e.target.id === 'icon'){
            e.target.parentNode.parentNode.remove();
            
            var heroId = e.target.parentNode.parentNode.getAttribute('id');
            var j = listFavourites.indexOf(heroId);
            listFavourites.splice(j,1);
            console.log(listFavourites);
        }
    
        localStorage.setItem('listFavourites',JSON.stringify(listFavourites));
    
        if(listFavourites.length===0){
            favourite.innerHTML = '<div style="color:white;text-align:center">No one is your Favourite!</div>';
        }
    }else if(div === 'details-btn'){
        var heroId = e.target.parentNode.getAttribute('id');
        console.log(heroId);
        if(heroId === null){
            return;
        }
        window.open("heroDetails.html?id="+heroId,"_self");
    }
}