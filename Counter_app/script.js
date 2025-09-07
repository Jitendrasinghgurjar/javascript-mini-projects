const increasebutton = document.getElementById('increase')
const decreasebutton = document.getElementById('decrease')
const countdisplay = document.getElementById('count')
const resetbtn = document.getElementById('reset')

let count = 0;
increasebutton.addEventListener("click",function(){
    count = count + 1
    countdisplay.textContent = count
    updatecolor()
})

decreasebutton.addEventListener("click",function(){
    if(count>0){
        count = count - 1;
        countdisplay.textContent = count
        updatecolor()
    }
})

resetbtn.addEventListener("click",function(){
    count = 0
    countdisplay.textContent = count
    updatecolor()
})

function updatecolor(){
    if(count>=5){
        countdisplay.style.color = "green"
    }
    else if(count>0 && count<5){
        countdisplay.style.color = "black"
    }
    else{
        countdisplay.style.color = "red"
    }
}