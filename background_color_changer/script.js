const changebtn = document.getElementById('changecolor')
const body = document.body

const colorcode = document.getElementById('colorcode')

changebtn.addEventListener("click",function(){
    const randomcolor = getRandomColor()
    body.style.backgroundColor = randomcolor
    colorcode.textContent = `current color : ${randomcolor}`;


})

function getRandomColor(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    return `rgb(${r} ,${g} ,${b})`

}

