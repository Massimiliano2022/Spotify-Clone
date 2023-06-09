const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");

const KEY=`https://striveschool-api.herokuapp.com/api/deezer/artist/${selectedId}`;


window.onload = async () => {
    creaCardHeader(KEY);
}

async function creaCardHeader(params) {

    try {
        const response = await fetch(params, {
        });

        const album = await response.json();

        console.log(album);
        assegnaHeader(album);
        console.log(album.tracklist);
        ottieniTracklist(album.tracklist)
    } catch (error) {
        console.log(error);
    }
}

function assegnaHeader(param) {

    let cardDiv = document.getElementById("cardHeader");
    cardDiv.innerHTML = "";
    cardDiv.innerHTML = 
    `<div id="container1main" class="card text-bg-dark" style="height: 400px;">
        <img src='${param.picture_xl}'class="card-img object-fit-cover w-100 h-100" alt='${param.name}'>
        <div id="container2main" class="card-img-overlay">
            <p class="mb-0 text-secondary">Artista verificato</p>
            <h1 class="mb-3 text-secondary">${param.name}</h1>
            <p class="text-secondary">${param.nb_fan} ascoltatori mensili</p>
        </div>
    </div>`;
}

async function ottieniTracklist(params) {
    try{
        const response = await fetch(params, {
        });
        const tracklist = await response.json();

        createSongList(tracklist)

        console.log(tracklist);
    }catch(err){
        console.log(err);
    }
}
function createSongList(param){
        let i=0;
        let cardListSong = document.getElementById('cardListSong')

        cardListSong.innerHTML = '';

        param.data.forEach(song => {
            
            i++;

            let cardDivSong = document.createElement('div')
            cardDivSong.classList.add('row','d-flex','align-items-center', 'my-4')

            cardDivSong.innerHTML = `
            <div class="col-6">
                <div class="d-flex align-items-center">
                    <p class="text-white mb-0">${i}</p>
                    <img src="${song.album.cover_small}" alt="${song.title}" width="40px" class="mx-2">
                    <p class="text-white mb-0">${song.title}</p>
                </div>
            </div>
            <div class="col-4">
                <div>
                    <p class="text-white fs-6 mb-0">${song.rank}</p>
                </div>
            </div>
            <div class="col-2">
                <div>
                    <p class="text-white mb-0">${Math.floor(song.duration / 60)+ ':' + song.duration % 60}</p>
                </div>
            </div>
            `
            cardListSong.appendChild(cardDivSong);
        });
    }