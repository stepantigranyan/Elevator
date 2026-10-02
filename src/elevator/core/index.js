import MemoryService from "../service/memory.js";
import FloorBtnList from "../service/floorBtnList.js";
import FloorControlBtn from "../models/floorControlBtn.js";

const initialFloor = new FloorControlBtn({ id: 'floor-1', floor: 1 })

class Elevator {
    #memory;
    #floorBtnList;
    #operatingState;

    constructor() {
        this.#memory = new MemoryService(initialFloor, [], 'none');
        this.#floorBtnList = new FloorBtnList();
        this.#operatingState = false;
    }

    addFloor(floorId) {
        const floor = this.#floorBtnList.getFloorBtn(floorId);
        this.#memory.setFloorsOrder(floor);
    }

    start() {
       this.#operatingState = true;

       const currentFloor = this.#memory.getCurrentFloor();
       const currentFloorNumber = currentFloor.getFloor();
       const floorsOrder = this.#memory.getFloorsOrder();
       const nextFloorNumber = floorsOrder[0].getFloor();

       return { currentFloorNumber, nextFloorNumber };
    }

    stop() {
        this.#operatingState = false;
        this.#memory.refreshFloorsOrder();
    }

    end() {
        this.#operatingState = false;
        this.#memory.setDirection('none');
    }
}

export default Elevator;