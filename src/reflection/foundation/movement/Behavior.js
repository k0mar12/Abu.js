export class Behavior {
    /**
     * Name of the model
     *
     * @type {string}
     */
    #name = this.constructor.name;

    /**
     * Get name model
     *
     * @returns {string}
     */
    get name() {
        return this.#name.toLowerCase();
    }

    getInstance() {

    }
}
