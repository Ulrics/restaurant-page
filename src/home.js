import {mainContent, createFooter} from "./index.js";
import bearExterior from "./assets/bear_exterior.png";
export {displayHome};

function displayHome() {
    console.log("displayed home");
    mainContent.classList.add("container", "gap56");

    const heroImageContainer = document.createElement("div");
    heroImageContainer.classList.add("main-image-container");
    mainContent.appendChild(heroImageContainer);

    const reserveButtonHome = document.createElement("div");
    reserveButtonHome.textContent = "Reservations";
    reserveButtonHome.classList.add("reserve-button", "home");
    heroImageContainer.appendChild(reserveButtonHome);

    const heroImage = document.createElement("img");
    heroImage.classList.add("main-image");
    heroImage.src = bearExterior;
    heroImage.alt = "The Bear restaurant exterior";
    heroImageContainer.appendChild(heroImage);

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("container", "gap32");
    mainContent.appendChild(addressContainer);

    const address = document.createElement("div");
    address.classList.add("text-16", "align-center");
    address.innerHTML = "River North<br>666 N Orleans St<br>Chicago, IL 60654";
    addressContainer.appendChild(address);

    const operatingContainer = document.createElement("div");
    operatingContainer.classList.add("container", "gap8");
    mainContent.appendChild(operatingContainer);

    const dates = document.createElement("div");
    dates.classList.add("text-16");
    dates.textContent = "Tue - Sat";
    operatingContainer.appendChild(dates);

    const divider = document.createElement("div");
    divider.classList.add("mini-divider");
    operatingContainer.appendChild(divider);

    const time = document.createElement("div");
    time.classList.add("text-16");
    time.textContent = "5PM - 11PM";
    operatingContainer.appendChild(time);

    createFooter();
}