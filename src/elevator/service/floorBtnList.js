import { FLOORS_LIST } from "../../consts/index.js";
import FloorControlBtn from "../models/floorControlBtn.js";


class FloorBtnList {
    #floorsList;

    constructor() {
        this.#floorsList = this.#initFloorBtnList(FLOORS_LIST);
    }

    #initFloorBtnList() {
        return FLOORS_LIST.map((floor) =>  new FloorControlBtn(floor));
    }

    getFloorBtn(floorId) {
        return this.#floorsList.find(floor => floor.getFloorId() === floorId);
    }
}

export default FloorBtnList;
