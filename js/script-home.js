let randomKey;
let artistName;
let arrayNameArtist=['lazza',
'shiva',
'ultimo',
'tananai',
'queen',
'ac/dc',
'pinkfloid',
'negrita',
'dualipa',
'greenday',
'mileycyurus',
'shakira',
'theweekend',
'samsmith',
'davidguetta',
'imaginedragons',





]

let objectAlbums = {};
let arrayAlbumSmall = [];
let arrayAlbumMedium= [];

function RandomArtist() {
    randomIndex = Math.floor(Math.random() * arrayNameArtist.length);
    artistName = arrayNameArtist[randomIndex];
    arrayNameArtist.splice(randomIndex, 1);
    return artistName;
}

let randomArtistHeader = RandomArtist();
let randomArtistSmall = RandomArtist();
let randomArtistMedium = RandomArtist();

const KEY_HEADER = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${randomArtistHeader}`;
const KEY_CARD_SMALL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${randomArtistSmall}`;
const KEY_CARD_MEDIUM = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${randomArtistMedium}`;

window.onload = async () => {
    creaCardHeader(KEY_HEADER);
    creaCardSmall(KEY_CARD_SMALL);
    creaCardMedium(KEY_CARD_MEDIUM);
}

async function creaCardHeader(params) {

    try {
        const response = await fetch(params, {
        });

        const albums = await response.json();

        console.log(albums);

        objectAlbums = { ...albums };

        let numRandom = Math.floor(Math.random() * 24);

        let album = objectAlbums.data[numRandom];

        assegnaHeader(album);
    } catch (error) {
        console.log(error);
    }
}
function assegnaHeader(param) {

    let cardDiv = document.getElementById("cardHeader");
    cardDiv.innerHTML = "";
    cardDiv.innerHTML = `
    <div class="mb-3 d-flex justify-content-center">
        <img id="nameOfAlbum" class="justify-content-sm-center rounded-1 imgResponsiveHome" src="${param.album.cover_medium}" alt="${param.album.title}">
    </div>
    <div class="mt-sm-0 ms-2 ms-md-3 mt-md-5 d-flex flex-column">
        <div>
            <h1 class="fs-6 text-white">ALBUM</h1>
        </div>
        <div  class="mb-3 justify-content-sm-center">
            <h1  class="fs-1 text-white">${param.album.title}</h1>
        </div>
        <div>
            <a href="#">
                <img class="rounded-5" width="25px" src="${param.artist.picture_medium}"
                alt="${param.artist.name}">
                <h1 id="nameOfArtist" class="fs-6 d-inline">${param.artist.name}</h1>
            </a>
        </div>
        <div class="my-3">
            <button type="button" class="btn btn-success text-dark">Play</button>
            <button type="button" class="btn btn-light">Salva</button>
        </div>
    </div>`;

    let nameOfAlbum = document.getElementById('nameOfAlbum')
    let nameOfArtist = document.getElementById('nameOfArtist')

    nameOfAlbum.addEventListener("click", () => {
        redirectToAlbumPage(param.album.id);
    });

    nameOfArtist.addEventListener('click', () => {
        redirectToArtistPage(param.artist.id)
    });
}
async function creaCardSmall(params) {

    try {
        const response = await fetch(params, {
        });

        const albums = await response.json();

        console.log(albums);

        objectAlbums = { ...albums };

        for (i = 0; i < 6; i++) {

            let numRandom = Math.floor(Math.random() * 24);

            let album = objectAlbums.data[numRandom];

            arrayAlbumSmall.push(album);

        }

        assegnaCardSmall(arrayAlbumSmall);

    } catch (error) {
        console.log(error);
    }

}
function assegnaCardSmall(params) {

    console.log(params);

    let cardDiv = document.getElementById("cardSmall");

    cardDiv.innerHTML = "";

    params.forEach((param) => {

        let card = document.createElement("div");
        card.classList.add("col-4", "d-flex", "mb-2");

        card.innerHTML = `
        <div class="card mb-3 border-0">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${param.album.cover}" class="img-fluid rounded-start" alt="${param.album.title}" width="200px">
                </div>
                <div class="col-md-8" style="background: #2C2C2C;">
                    <div class="card-body text-white">
                        <h5 class="card-title fs-6 text-truncate">${param.album.title}</h5>
                    </div>
                </div>
            </div>
        </div>
        `;

        card.addEventListener("click", () => {
            redirectToAlbumPage(param.album.id);
        });

        cardDiv.appendChild(card);
    });
}
async function creaCardMedium(params) {

    try {
        const response = await fetch(params, {
        });

        const albums = await response.json();

        console.log(albums);

        objectAlbums = { ...albums };

        for (i = 0; i < 12; i++) {

            let numRandom = Math.floor(Math.random() * 24);

            let album = objectAlbums.data[numRandom];

            arrayAlbumMedium.push(album);

        }

        assegnaCardMedium(arrayAlbumMedium);

    } catch (error) {
        console.log(error);
    }

}
function assegnaCardMedium(params) {

    console.log(params);

    let cardDiv = document.getElementById("cardMedium");

    cardDiv.innerHTML = "";

    params.forEach((param) => {

        let card = document.createElement("div");
        card.classList.add("col-6", "col-md-3","d-flex", "mb-2");
        card.innerHTML = `
        <div class="card border-0">
            <img src="${param.album.cover_big}" class="img-fluid rounded-start" alt="${param.album.title}" width="200px">
            <div class="card-body text-white" style="background: #2C2C2C;">
                <p class="card-text text-truncate">${param.album.title}</p>
            </div>
        </div>
        `;

        card.addEventListener("click", () => {
            redirectToAlbumPage(param.album.id);
        });

        cardDiv.appendChild(card);
    });
}

function redirectToAlbumPage(albumId) {
    window.location.href = `album.html?id=${albumId}`;
}
function redirectToArtistPage(artistId){
    window.location.href = `artist.html?id=${artistId}`
}