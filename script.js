const jokeContainer = document.getElementById('joke')
const btn = document.getElementById('btn')
const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'

let getJoke = () => {
    jokeContainer.classList.remove('fade')
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.classList.add('fade')
            if (item.joke !== undefined) {
                jokeContainer.innerText = `${item.joke}`
            }
        })
}

btn.addEventListener('click', getJoke)
getJoke()