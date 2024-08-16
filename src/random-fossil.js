import axios from 'axios';

document.querySelector('#get-random-fossil').addEventListener('click', async (evt) => {
    evt.preventDefault()
    const response = await axios.get('random-fossil.json')
    const randFossImg = response.data.img
    const randFossName = response.data.name
    document.querySelector('#random-fossil-image').innerHTML = `<img src="${randFossImg}" />`
    document.querySelector('#random-fossil-name').innerText = randFossName
})
