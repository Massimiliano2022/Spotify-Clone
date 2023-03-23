const albumHeader = 'https://striveschool-api.herokuapp.com/api/deezer/album/366045987';
const cardSmall1  =  'https://striveschool-api.herokuapp.com/api/deezer/album/309377597';

window.onload = async () => {
    creaCardHeader(albumHeader);

}

async function creaCardHeader(params) {

    try {
        const response = await fetch(params, {
        });

        const album = await response.json();

        console.log(album);

        assegnaImgHeader(album);
        assegnaTitleHeader(album);
        assegnaArtistaHeader(album);


    } catch (error) {
        console.log(error);
    }
}

function assegnaImgHeader(album) {
    let cardDiv = document.getElementById("cardHeader");
    cardDiv.innerHTML = `
    <img id="imgHeader" class="justify-content-sm-center rounded-1 imgResponsiveHome" width="200px" src="${album.cover_medium}" alt="Cover">
    `;
}

function assegnaTitleHeader(album) {
    let cardDiv = document.getElementById("cardTitle");
    cardDiv.innerHTML = `
        <h1 id="titleHeader" class="fs-1 text-white">${album.title}</h1>
        `;
}

function assegnaArtistaHeader(album) {

    let cardDiv = document.getElementById("cardArtist");
    cardDiv.innerHTML = `
        <a href="#">
            <img class="rounded-5" width="30px" src="${album.artist.picture_small}" alt="logo 3">
            <h1 class="fs-6 d-inline">${album.artist.name}</h1>
        </a>
    `;
}

