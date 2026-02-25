const input = document.querySelector('input')
const img = document.querySelector('img')
const button = document.querySelector('button')

input.addEventListener('change', function () {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=ba64LlCId8G1W6u4ZIQBG8puJRYh0YmW&s=' + input.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            img.src = response.data.images.original.url;
        })
        .catch(function (error) {
            console.log(error);
        });
})


button.addEventListener('click', function () {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=ba64LlCId8G1W6u4ZIQBG8puJRYh0YmW&s=' + input.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            img.src = response.data.images.original.url;
        })
        
        .catch(function (error) {
            console.log(error);
        });
})

