class FloorControlBtn {
    #floorId;
    #floor;

    constructor({ floorId, floor }) {
        this.#floorId = floorId;
        this.#floor = floor;
    }

    getFloorId() {
        return this.#floorId;
    }

    getFloor() {
        return this.#floor;
    }
}

export default FloorControlBtn;