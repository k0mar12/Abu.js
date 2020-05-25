import { Kernel, bodyAppend } from '../';

export class Application {
    /**
     * Current version
     *
     * @type {string}
     */
    static version = '1.0.0';

    /**
     * Entities need to load to the scene
     *
     * @type {Array}
     */
    entities = [];

    /**
     * Register base components as camera, scene and renderer
     *
     * @param args
     */
    constructor({...args}) {
        this.basePath = args.basePath;

        this.registerBaseComponents(args.kernel);
        this.registerEntities();
        this.draw(args.element);
    }

    /**
     * Set scene, camera and renderer
     *
     * @param kernel
     */
    registerBaseComponents(kernel) {
        kernel = kernel instanceof Kernel ? kernel : new Kernel();

        this.scene = kernel.getScene();
        this.camera = kernel.getCamera();
        this.renderer = kernel.getRenderer();
        this.entities = kernel.hasEntities();
    }

    /**
     * Register entities
     *
     * @param entities
     */
    registerEntities(entities) {
        if (! Array.isArray(this.entities)) {
            return false;
        }

        let objects = [];

        for (let entity of this.entities) {
            objects.push(entity.view());
        }

        Promise.all(objects)
            .then(models => this.loadScene(models))
            .catch(() => null);
    }

    /**
     * Load models to the scene
     *
     * @param models
     */
    loadScene(models) {
        console.log(models);

        for (let model of models) {
            this.scene.add(model.scene);
        }
    }

    /**
     * Add renderer to the screen
     *
     * @param element
     */
    draw(element) {
        if (element === undefined) {
            bodyAppend(this.renderer.domElement);
        }
    }

    /**
     * Run all process
     *
     */
    run() {
        requestAnimationFrame(() => this.run());

        this.renderer.render(this.scene, this.camera);
    }
}
