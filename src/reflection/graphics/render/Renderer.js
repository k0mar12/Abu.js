import { WebGLRenderer } from 'three';

export class Renderer extends WebGLRenderer {
    /**
     * Contain WebGL Renderer
     */
    static instance;

    /**
     * Get pretty web gl renderer
     *
     * @returns {Renderer}
     */
    static getInstance() {
        if (this.instance === undefined) {
            this.instance = new Renderer();

            this.instance.shadowMap.enabled = true;

            this.instance.setPixelRatio(window.devicePixelRatio);
            this.instance.setSize(window.innerWidth, window.innerHeight);
        }

        return this.instance;
    }

}
