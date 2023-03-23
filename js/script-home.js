window.onload = async () => {

    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/75621062`, {
        });
        const album = await response.json();

        console.log(album);

        //showProduct(product);

    } catch (error) {
        console.log(error);
    }
}