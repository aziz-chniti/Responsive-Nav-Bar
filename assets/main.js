const toggle = document.querySelectorAll('img');
const nav = document.querySelector('nav');


toggle.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        nav.className = nav.className == "active" ? "": "active"; 
    })
})