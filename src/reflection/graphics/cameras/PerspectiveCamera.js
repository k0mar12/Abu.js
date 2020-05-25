import { PerspectiveCamera as Camera } from 'three';

export class PerspectiveCamera extends Camera {
    /**
     * Contain camera
     */
    static instance;

    /**
     * Get simple camera
     *
     * @returns {PerspectiveCamera}
     */
    static getInstance() {
        if (this.instance === undefined) {
            this.instance = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 3, 3000);
        }

        return this.instance;
    }
}
