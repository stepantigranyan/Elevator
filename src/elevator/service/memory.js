class MemoryService {
    #currentFloor;
    #floorsOrder;
    #direction;

    constructor(currentFloor, floorsOrder, direction) {
        this.#currentFloor = currentFloor;
        this.#floorsOrder = floorsOrder;
        this.#direction = direction;
    }

    getCurrentFloor() {
        return this.#currentFloor;
    }
    
    setCurrentFloor(currentFloorId) {
        this.#currentFloor = currentFloorId;
    }
    
    getFloorsOrder() {
        return this.#floorsOrder;
    }
    

    setFloorsOrder(floor) {
        if (this.#floorsOrder.find((orderFloor) => orderFloor.getFloor() === floor.getFloor())) {
            this.#removeOrderFloor(floor);
            return;
        }

        this.#floorsOrder.push(floor);

        if (this.#direction === 'up' || this.#direction === 'down') {
            this.#sortFloorsOrderWhenMoving();
        } else if (this.#direction === 'none') {
            this.#sortFloorsOrderWhenStopped();
        }
    }

    getDirection() {
        return this.#direction;
    }

    setDirection(direction) {
        if (direction === 'up' || direction === 'down' || direction === 'none') {
            this.#direction = direction;
        }
    }

    refreshFloorsOrder() {
        this.#currentFloor = this.#floorsOrder.shift();
    }

    #sortFloorsOrderWhenMoving() {
        const currentFloorNumber = this.#currentFloor.getFloor();

        const highPriority = [];
        const lowPriority = [];

        for (let i = 0; i < this.#floorsOrder.length; i++) {
            const floor = this.#floorsOrder[i];
            const floorNumber = floor.getFloor();

            if (currentFloorNumber < floorNumber) {
                highPriority.push(floor);
            } else {
                lowPriority.push(floor);
            }
        }

        highPriority.sort((a, b) => a.getFloor() - b.getFloor());
        lowPriority.sort((a, b) => b.getFloor() - a.getFloor());

        if (this.#direction === 'up') {
            this.#floorsOrder = [...highPriority, ...lowPriority];
        } else if (this.#direction === 'down') {
            this.#floorsOrder = [...lowPriority, ...highPriority];
        }
    }

    #sortFloorsOrderWhenStopped() {
        const currentFloorNumber = this.#currentFloor.getFloor();
        const nextFloorNumber = this.#floorsOrder[0].getFloor();

        if (currentFloorNumber > nextFloorNumber) {
            this.#direction = 'down';
        } else {
            this.#direction = 'up';
        }

        return this.#sortFloorsOrderWhenMoving();
    }

    #removeOrderFloor(floor) {
        this.#floorsOrder = this.#floorsOrder.filter(orderFloor => orderFloor.getFloor() !== floor.getFloor());
    }
}

export default MemoryService;