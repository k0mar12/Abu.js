export class Model {
    /**
     * Model instance
     */
    static instance;

    /**
     * Is this model has single behavior
     *
     * @type {boolean}
     */
    static isSingleBehavior = true;

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

    /**
     *
     * @returns {*}
     */
    static getInstance() {
        if (this.isSingleBehavior) {

            if (this.instance === undefined) {
                this.instance = new this();
            }

            return this.instance;

        }

        return new this();
    }

    /**
     * Calling every frame rate
     *
     * @returns void
     */
    tick() {

    }
}
