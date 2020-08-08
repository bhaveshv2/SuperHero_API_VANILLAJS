const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
console.log(id);

fetch(`https://superheroapi.com/api.php/2772108476351146/${id}`)
    .then(response=>response.json())
    .then(data=>detailsSuperhero(data))
    .catch(err=>console.log(err));

function detailsSuperhero(data){
    
    var image = document.getElementById('avatar');
    var name = document.getElementById('details-name');
    
    //Image
    image.src = data.image.url;
    image.alt = "Image not found!";
    //Name
    name.innerHTML = data.name;
    window.document.title = data.name;

    document.querySelector("link[rel='icon']").href = data.image.url;

    var intelligence = document.getElementById('intelligence');
    intelligence.innerHTML = data.powerstats.intelligence+"%";
    var strength = document.getElementById('strength');
    strength.innerHTML = data.powerstats.strength+"%";
    var speed = document.getElementById('speed');
    speed.innerHTML = data.powerstats.speed+"%";
    var durability = document.getElementById('durability');
    durability.innerHTML = data.powerstats.durability+"%";
    var power = document.getElementById('power');
    power.innerHTML = data.powerstats.power+"%";
    var combat = document.getElementById('combat');
    combat.innerHTML = data.powerstats.combat+"%";

    for(var i in data.biography){
        document.getElementById(i).innerHTML = data.biography[i];
    }

    for(var i in data.appearance){
        document.getElementById(i).innerHTML = data.appearance[i];
    }

    for(var i in data.work){
        document.getElementById(i).innerHTML = data.work[i];
    }

    for(var i in data.connections){
        document.getElementById(i).innerHTML = data.connections[i];
    }
}