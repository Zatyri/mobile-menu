// triggers when clicked on menu button and handles animation and other related functions
function animateMenu(e){
    e.classList.toggle("animateMenu");
    showMenu();
}

// toggles if side menu is shown or not
function showMenu(){
    let menuId = document.getElementById("menu");    
    menuId.classList.toggle("showMenu");
}

// keep menu aligned to page
window.onscroll = function(){   
    if(window.innerWidth < 768){         
        let currentPos = window.pageYOffset;      
        document.getElementById("navbar").style.top = currentPos + "px";
    }
}