import {mainContent, createHeroImage, createFooter} from "./index.js";
import bearLogoShot from "./assets/bear_logoshot.png";
export {displayCourse};

function displayCourse() {
    console.log("displayed course");
    mainContent.classList.add("container", "gap56");

    createHeroImage(bearLogoShot, "The Bear restaurant iron logo")

    const courseContainer = document.createElement("div");
    courseContainer.classList.add("container", "gap56");
    mainContent.appendChild(courseContainer);

    const optionContainer = document.createElement("div");
    optionContainer.classList.add("container", "gap24");
    courseContainer.appendChild(optionContainer);

    const firstCourseOption = document.createElement("div");
    firstCourseOption.classList.add("text-16");
    firstCourseOption.textContent = "5-Course Tasting Menu  --  $150 per person";
    optionContainer.appendChild(firstCourseOption);

    const divider = document.createElement("div");
    divider.classList.add("mini-divider");
    optionContainer.appendChild(divider);

    const secondCourseOption = document.createElement("div");
    secondCourseOption.classList.add("text-16");
    secondCourseOption.textContent = "9-Course Tasting Menu  --  $250 per person";
    optionContainer.appendChild(secondCourseOption);

    const courseDescription = document.createElement("div");
    courseDescription.textContent = "New menu crafted each day by Chef Carmy and team.";
    courseDescription.classList.add("text-14");
    courseContainer.appendChild(courseDescription);

    const reserveBtn = document.createElement("div");
    reserveBtn.textContent = "Reservations";
    reserveBtn.classList.add("reserve-button", "course");
    courseContainer.appendChild(reserveBtn);

    createFooter();
}