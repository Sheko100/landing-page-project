/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const nav = document.getElementById("navbar__list");
const sec = document.getElementsByClassName("sections");
const menu = buildNav();
const navH = nav.getBoundingClientRect().height;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

/**
* @description builds the nav and  fills the <ul> element with list items containing anchor links 
* @returns {obj} HTMLcollection object array-like of nav anchor links 
*/

function buildNav() {

    let navMenu;

    for (let i = 0; i < sec.length; i++) {
        navMenu += `<li><a class='menu__link'>${sec[i].getAttribute('data-nav')}</a></li>`;
    }

    nav.innerHTML += navMenu;
    navMenu = document.getElementsByClassName("menu__link");

    return navMenu;
}


/**
* @description adds an event listener to the nav anchor links, so when the user clicks on the anchor link, the window scrolls to the right section 

*/

const navScrl = e => {

    e.preventDefault();
    for (let i = 0; i < menu.length; i++) {
        if (e.target.nodeName === "A" && menu[i] === e.target) {

            sec[i].scrollIntoView({
            	behavior: "smooth", 
            	block: "end", 
            	inline: "nearest"
            });
        }
	}        
}









/**
* @description shows the header while scrolling and calls hideNav, activeState and showToTop functions 
*/


const scrlRect = () => {
    const header = document.querySelector(".page__header");



    header.classList.remove("hideNav");
    setTimeout(function hideNav() {
        if (window.scrollY >= 200) {
            header.classList.add("hideNav");
        }
    }, 6500);

    activeState();
    showToTop();

}

/**
* @description gives a style by class name to the section which is close to the top of the viewport and it's anchor link while scrolling 
*/

const activeState = () => {
    for (let i = 0; i < sec.length; i++) {
        const secTop = sec[i].getBoundingClientRect().top;
        if (secTop - navH <= 100) {

            for (let r = 0; r < sec.length; r++) {
                sec[r].classList.remove("active");
                menu[r].classList.remove("activeMenu");
            }

            sec[i].classList.add("active");
            menu[i].classList.add("activeMenu");

        } else {
            sec[i].classList.remove("active");
            menu[i].classList.remove("activeMenu");
        }

    }

}

/**
* @description gives a style to the toTop button to show it when the user is close to the bottom of the document 
*/

const showToTop = () => {
    const toTopBu = document.getElementById("toTop");
    const bodyH = document.body.getBoundingClientRect().height;

    if (bodyH - window.scrollY <= 900) {
        toTop.style.transform = "translateX(0)";
        toTop.style.opacity = "1";
    } else {
        toTop.style.transform = "translateX(100px)";
        toTop.style.opacity = "0";
    }

}



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/



nav.addEventListener("click", navScrl, true);
document.addEventListener("scroll", scrlRect);






// Build menu 

// Scroll to section on link click

// Set sections as active


