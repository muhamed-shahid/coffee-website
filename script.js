const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")



menuOpenButton.addEventListener("click",()=>{
    // TOggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})

// close menu

menuCloseButton.addEventListener("click",()=>
    menuOpenButton.click());
