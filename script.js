const jokeContainer = document.getElementById('joke')
const btn = document.getElementById('btn')
const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'

console.log('hi')
let getJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.innerText = `${item.joke}`
        })
}

getJoke()

btn.addEventListener('click', getJoke)