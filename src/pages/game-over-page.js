export default class GameOverPage {
    constructor(callbacks) {
        this.callbacks = callbacks
    }

    init(options) {
        console.log('gameover init')
        this.initGameoverCanvas(options)
    }

    initGameoverCanvas(options) {
        // const aspect = window.innerHeight / window.innerWidth
        // this.scene = options.scene
        // this.canvas = document.createElement('canvas')
        // this.canvas.width = window.innerWidth
        // this.canvas.height = window.innerHeight
        // this.texture = new THREE.Texture(this.canvas)
        // this.material = new THree.MeshBasicMaterial({
        //     map: this.texture,
        //     transparent: true,
        //     side: THREE.doubleSide
        // })
        // this.geometry = new THREE.planeGeometry(
        //     window.innerWidth, window.innerHeight
        // )
        // this.obj = new THREE.Mesh(this.geometry, this.material)
        // this.obj.position.z = 1
        // this.context = this.canvas.getContext('2d')
        // this.context.fillStyle = '#333'
        // this.context.fillRect((window.innerWidth - 200) / 2, (window.innerHeight - 100) / 2)
        // this.texture.needsUpdate = true
        // this.scene.add(this.obj)
    }
    show() {
        this.obj.visible = true
    }
    hide() {
        this.obj.visible = false
    }
}