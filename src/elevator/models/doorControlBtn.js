class DoorControlBtn {
    #doorId;

    constructor(doorId) {
        this.#doorId = doorId;
    }

    getDoorId() {
        return this.#doorId;
    }
}

export default DoorControlBtn;