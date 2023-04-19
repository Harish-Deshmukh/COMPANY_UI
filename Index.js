const togglehumbergerButton=document.getElementById('click-humberger');
const toggleLinks=document.getElementsByClassName('nav-links');
togglehumbergerButton.addEventListener('click', () =>{
    toggleLinks.classList.toggle('active')
});