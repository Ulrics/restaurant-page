console.log("test test");
import './styles.css';
import insta from "./assets/InstagramLogo.svg"
import {displayHome} from './home.js';
import {displayCourse} from './course.js';
import {displayAbout} from './about.js';
export {mainContent, createHeroImage, createFooter};

const mainContent = document.getElementById("content");

function clearContent(){
    mainContent.innerHTML = "";
}

function tabSwitch(displayFunction){
    clearContent();
    displayFunction();
}

const homeBtn = document.getElementById("home");
const courseBtn = document.getElementById("course");
const about = document.getElementById("about");

homeBtn.addEventListener("click", () => tabSwitch(displayHome));
courseBtn.addEventListener("click", () => tabSwitch(displayCourse));
about.addEventListener("click", () => tabSwitch(displayAbout));


function createHeroImage(srcImage, altText){
    const heroImageContainer = document.createElement("div");
    heroImageContainer.classList.add("main-image-container");
    mainContent.appendChild(heroImageContainer);

    const heroImage = document.createElement("img");
    heroImage.classList.add("main-image");
    heroImage.src = srcImage;
    heroImage.alt = altText;
    heroImageContainer.appendChild(heroImage);
}

function createFooter(){
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("container", "gap8", "bottom-padding56");
    mainContent.appendChild(footerContainer);

    const email = document.createElement("div");
    email.textContent = "info@thebear.com";
    email.classList.add("email");
    footerContainer.appendChild(email);

    const instaLink = document.createElement("a");
    instaLink.href = "https://www.instagram.com/thebearfx/";
    instaLink.rel = "noreferrer noopener";
    instaLink.target = "_blank";
    footerContainer.appendChild(instaLink);

    const instagram = document.createElement("img");
    instagram.classList.add("insta");
    instagram.src = insta;
    instagram.alt = "Instagram logo";
    instaLink.appendChild(instagram);
}

displayHome();