import { EventDispatcher } from 'three';

export class ServiceProvider extends EventDispatcher {
    /**
     * The application implementation.
     *
     */
    #app;

    /**
     * Create a new service provider instance.
     *
     * @param app
     */
    constructor(app) {
        super();

        this.#app = app;
    }

    /**
     * Register new service
     *
     */
    register() {

    }
}
