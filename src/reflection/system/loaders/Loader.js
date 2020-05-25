import GLTFLoader from 'three-gltf-loader';
import { TextureLoader } from 'three';

export class Loader {
    /**
     * Instance of the Loader
     */
    static instance;

    /**
     * Create gltf and texture loaders
     */
    constructor() {
        this.modelLoader = new GLTFLoader();
        this.textureLoader = new TextureLoader();
    }

    /**
     * Load texture
     *
     * @param path
     * @returns {Promise<any>}
     */
    getTexture(path) {
        return new Promise((resolve, reject) => this.textureLoader.load(path, texture => resolve(texture)));
    }

    /**
     * Load .gltf object
     *
     * @param path
     * @returns {Promise<any>}
     */
    getObject(path) {
        return new Promise((resolve, reject) => this.modelLoader.load(path, model => resolve(model)));
    }

    /**
     * Get instance of the loader
     *
     * @returns {*}
     */
    static getInstance() {
        if (this.instance === undefined) {
            this.instance = new Loader();
        }

        return this.instance;
    }
}
