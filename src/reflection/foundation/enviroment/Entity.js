import { Loader } from '../../';

export class Entity {
    /**
     * Is has children to bind models
     *
     * @type {boolean}
     */
    static isHasChildren = false;

    /**
     * Create instance Entity
     */
    constructor() {
        this.loader = Loader.getInstance();
    }

    /**
     * Load object
     *
     * @param path
     * @returns {Promise<void>|*}
     */
    hasObject(path) {
        return this.loader.getObject(path);
    }

    /**
     * Load simple mesh
     */
    hasMash() {

    }

    /**
     * Load texture
     *
     * @param path
     */
    hasTexture(path) {
        return this.loader.getTexture(path);
    }

    /**
     * Register models
     *
     * @return {array}
     */
    model() {

    }

    /**
     * Register object
     *
     * @returns {Promise<void>|*}
     */
    view() {

    }
}
