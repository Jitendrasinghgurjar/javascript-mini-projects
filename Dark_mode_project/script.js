const btn = document.querySelector('#ThemeToggle')
const body = document.body
btn.addEventListener("click",function(){
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
    btn.textContent = 'light'
}
else(
    btn.textContent = 'dark'
)

})