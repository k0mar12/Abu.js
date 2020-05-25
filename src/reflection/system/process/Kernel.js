import { Clock, Group } from 'three';
import { PerspectiveCamera, Renderer, Scene } from '../../graphics';

export class Kernel {
    /**
     * Just creating clock and group of all elements of the scene
     */
    constructor() {
        this.clock = new Clock();
        this.univerce = new Group();
    }

    /**
     * Get pretty camera
     *
     * Can be override with your settings of the camera
     *
     * @returns {PerspectiveCamera}
     */
    getCamera() {
        return PerspectiveCamera.getInstance();
    }

    /**
     * Get pretty renderer
     *
     * Can be override with your settings of the renderer
     *
     * @returns {Renderer}
     */
    getRenderer() {
        return Renderer.getInstance();
    }

    /**
     * Get pretty scene
     *
     * Can be override with your settings of the renderer
     *
     * @returns {Scene}
     */
    getScene() {
        return Scene.getInstance();
    }

    /**
     * Register entities
     *
     * @returns {Array}
     */
    hasEntities() {
        return [

            //-- Register here your entities

        ];
    }
}
