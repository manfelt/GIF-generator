var url = 'https://api.giphy.com/v1/gifs/translate?api_key=4eZuDD7c5RB4TGPjY1m2BXYV63xHgwH7&s=cats';

function nyGIF(url) {
    const img = document.querySelector('img');

    fetch( url, {mode: 'cors'})
        .then(function(response) {
            return response.json();
    })
     .then(function(response) {
         img.src = response.data.images.original.url;
    })
    .catch(e => {
        console.log(e)
        img.src = "./img/ingenting.png";
      });
}

// tar input fra HTML, legger det til i URL, passer ny url over til nyGIF funksjonen.
function leteFunksjon(a) {
    url = `https://api.giphy.com/v1/gifs/translate?api_key=4eZuDD7c5RB4TGPjY1m2BXYV63xHgwH7&s=${a}`
    nyGIF(url);
};

nyGIF(url);

