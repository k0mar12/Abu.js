import { Scene as MainScene, Color } from 'three';

export class Scene extends MainScene {
    /**
     * Contain scene
     */
    static instance;

    /**
     * Get simple scene
     *
     * @returns {Scene}
     */
    static getInstance() {
        if (this.instance === undefined) {
            this.instance = new Scene();

            this.instance.background = new Color().setHex(0xffffff);
        }

        return this.instance;
    }
}
