import sceneConf from '../../confs/scene-conf'

class Camera {
    constructor() {
        this.instance = null
    }
    init() {
        const aspect = window.innerHeight / window.innerWidth
        this.instance = new THREE.OrthographicCamera(-sceneConf.frustumSize, sceneConf.frustumSize, sceneConf.frustumSize * aspect,-sceneConf.frustumSize * aspect, -100, 85)
        //this.instance = new THREE.OrthographicCamera(window.innerWidth / -16, window.innerWidth / 16, window.innerHeight / 16,
		//window.innerHeight / -16, -200, 500);
        this.instance.position.set(-10, 10, 10)
        this.target = new THREE.Vector3(0, 0, 0)
        this.instance.lookAt(this.target)
    }
}

export default new Camera()