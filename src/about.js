import {mainContent, createHeroImage, createFooter} from "./index.js";
import bearAbout from "./assets/bear_about.png";
import mStar from "./assets/MichelinStar.png";
export {displayAbout};

function displayAbout() {
    console.log("displayed about");
    mainContent.classList.add("container", "gap32");

    createHeroImage(bearAbout, "Chef Carmy and his kitchen at The Bear restaurant")

    const aboutContent = document.createElement("div");
    aboutContent.classList.add("text-16", "body-text");
    aboutContent.textContent = `The Bear represents Carmen "Carmy" Berzatto's transformation of his family's \
                                Italian beef sandwich shop into an ambitious fine-dining destination in Chicago. \
                                Drawing from his prestigious culinary background at establishments like The French Laundry and Noma, \
                                Carmy has created a menu that elevates Chicago's beloved comfort food traditions with sophisticated techniques and premium ingredients. \
                                This is where Chicago's rich food heritage meets world-class dining, \
                                creating an unforgettable experience that honors the past while reaching for quality with contemporary culinary artistry.`;
    mainContent.appendChild(aboutContent);

    const michelinContainer = document.createElement("div");
    michelinContainer.classList.add("container-row", "gap8", "bottom-padding56");
    mainContent.appendChild(michelinContainer);

    const michStar = document.createElement("img");
    michStar.classList.add("mStar");
    michStar.src = mStar;
    michStar.alt = "Michelin Star";
    michelinContainer.appendChild(michStar);

    const michDescription = document.createElement("div");
    michDescription.classList.add("text-16", "medium-weight");
    michDescription.textContent = "One star Michelin rated";
    michelinContainer.appendChild(michDescription);

    createFooter();
}