const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");
console.log("SELECTED ID: ", selectedId);

const KEY='https://striveschool-api.herokuapp.com/api/deezer/album/'+selectedId;

window.onload = async () => {
    ottieniAlbum(KEY);
}
async function ottieniAlbum(params) {

    try {
        const response = await fetch(params, {
        });

        const album = await response.json();

        console.log(album);

        creaCardHeader(album);
        creaSongSection(album.tracks);
    } catch (error) {
        console.log(error);
    }
}
function creaCardHeader(param) {

    let cardDiv = document.getElementById("cardHeader");
    cardDiv.innerHTML = "";
    cardDiv.innerHTML = `
    <div class="mb-3 d-flex justify-content-center">
        <img class="justify-content-sm-center rounded-1 imgResponsiveHome" src="${param.cover_medium}" alt="${param.title}">
    </div>
    <div class="mt-sm-0 ms-2 ms-md-3 mt-md-5 d-flex flex-column">
        <div>
            <h1 class="fs-6 text-white">ALBUM</h1>
        </div>
        <div  class="mb-3 justify-content-sm-center">
            <h1  class="fs-1 text-white">${param.title}</h1>
        </div>
        <div>
            <a href="#">
                <img class="rounded-5" width="25px" src="${param.artist.picture_medium}"
                alt="${param.artist.name}">
                <h1 class="fs-6 d-inline">${param.artist.name}</h1>
            </a>
        </div>
        <div class="my-3">
            <button type="button" class="btn btn-success text-dark">Play</button>
            <button type="button" class="btn btn-light">Salva</button>
        </div>
    </div>
    `;
    cardDiv.addEventListener("click", () => {
        redirectToAlbumPage(param.album.id);
    });
}
function creaSongSection(album) {
    console.log(album);

    let cardDiv = document.getElementById("albumSongs");

    cardDiv.innerHTML = "";

    album.data.forEach((song) => {

        console.log(song);

        let cardSong = document.createElement("div");
        cardSong.classList.add("d-flex", "justify-content-between", "mt-4");
        cardSong.innerHTML = `
            <div class="d-flex">
                <p class="text-white me-2 mt-1">1</p>
                <div class="text-white">
                    <h1 class="titleMain">${song.title}</h1>
                    <p class="paragraphMain">Pinguini Tattici Nucleari</p>
                </div>
            </div>
            <div>
                <p class="text-white fs-6">254.987</p>
            </div>
            <div>
                <p class="text-white"> 2:20</p>
            </div>
        `;

        cardDiv.appendChild(cardSong);

    });
}
