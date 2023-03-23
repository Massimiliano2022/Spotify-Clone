const albumHeader = 'https://striveschool-api.herokuapp.com/api/deezer/album/366045987';
const cardSmall1 = 'https://striveschool-api.herokuapp.com/api/deezer/album/309377597';
const cardSmall2 = 'https://striveschool-api.herokuapp.com/api/deezer/album/59853992';

window.onload = async () => {
    creaCardHeader(albumHeader);
    creaCardSmall1(cardSmall1);
    //creaCardSmall2(cardSmall2);
}

async function creaCardHeader(params) {

    try {
        const response = await fetch(params, {
        });

        const album = await response.json();

        console.log(album);

        assegnaHeader(album);
    } catch (error) {
        console.log(error);
    }
}
function assegnaHeader(album) {
    let cardDiv = document.getElementById("cardHeader");
    cardDiv.innerHTML = "";
    cardDiv.innerHTML = `
    <div class="mb-3 d-flex justify-content-center">
        <img class="justify-content-sm-center rounded-1 imgResponsiveHome"
        width="200px" src="${album.cover_medium}" alt="${album.title}">
    </div>
    <div class="mt-sm-0 ms-2 ms-md-3 mt-md-5 d-flex flex-column">
        <div>
            <h1 class="fs-6 text-white">ALBUM</h1>
        </div>
        <div  class="mb-3 justify-content-sm-center">
            <h1  class="fs-1 text-white">${album.title}</h1>
        </div>
        <div>
            <a href="#">
                <img class="rounded-5" width="25px" src="${album.artist.picture_medium}"
                alt="${album.artist.name}">
                <h1 class="fs-6 d-inline">${album.artist.name}</h1>
            </a>
        </div>
        <div class="my-3">
            <button type="button" class="btn btn-success text-dark">Play</button>
            <button type="button" class="btn btn-light">Salva</button>
        </div>
    </div>
    `;
}
async function creaCardSmall1(params) {

    try {
        const response = await fetch(params, {
        });

        const album = await response.json();

        assegnaCardSmall1(album);

    } catch (error) {
        console.log(error);
    }
}
function assegnaCardSmall1(album) {
    let cardDiv = document.getElementById("cardSmall1");
    cardDiv.innerHTML = "";
    cardDiv.innerHTML = `
    <div class="col-md-4">
        <img src="${album.cover_medium}" class="img-fluid rounded-start" alt="${album.title}">
    </div>
    <div class="col-md-8" style="background: #2C2C2C;">
        <div class="card-body text-white">
            <h5 class="card-title fs-6 text-truncate">${album.title}</h5>
        </div>
    </div>
    `;
}
/*async function creaCardSmall2(params) {

    try {
        const response = await fetch(params, {
        });

        const album = await response.json();

        assegnaCardSmall2(album);

    } catch (error) {
        console.log(error);
    }
}

function assegnaCardSmall2(album) {
    let cardDiv = document.getElementById("cardSmall2");
    cardDiv.innerHTML = "";
    cardDiv.innerHTML = `
    <div class="col-md-4">
        <img src="${album.cover_medium}" class="img-fluid rounded-start" alt="${album.title}">
    </div>
    <div class="col-md-8" style="background: #2C2C2C;">
        <div class="card-body text-white">
            <h5 class="card-title fs-6 text-truncate">${album.title}</h5>
        </div>
    </div>
    `;
}*/
