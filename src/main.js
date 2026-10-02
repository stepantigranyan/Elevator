import { sleep } from "./helpers/index.js";

import Elevator from "./elevator/core/index.js";

const elevatorOpenButton = document.getElementById("elevator-open");
const elevatorCloseButton = document.getElementById("elevator-close");

const elevatorLeftDoor = document.getElementById("elevator-left-door");
const elevatorRightDoor = document.getElementById("elevator-right-door");
const elevatorFloorButtons = document.querySelectorAll('.floor-btn');

const elevatorService = new Elevator();

elevatorOpenButton.addEventListener("click", () => {
    elevatorLeftDoor.classList.remove('left-0');
    elevatorRightDoor.classList.remove('right-0');
    elevatorLeftDoor.classList.add('-left-1/2');
    elevatorRightDoor.classList.add('-right-1/2');
});

elevatorCloseButton.addEventListener("click", () => {
    elevatorLeftDoor.classList.remove('-left-1/2');
    elevatorRightDoor.classList.remove('-rigth-1/2');
    elevatorLeftDoor.classList.add('left-0');
    elevatorRightDoor.classList.add('right-0');
});


elevatorFloorButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const { id } = e.target;
        console.dir(e.target);
        elevatorService.addFloor(id);
    })
})