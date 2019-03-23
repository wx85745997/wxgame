import bottleConf from '../../confs/bottle-conf'
import blockConf from '../../confs/block-conf'
class Bottle {
    constructor() {

    }
    init() {
        this.obj = new THREE.Object3D()
        this.name = 'bottle'
        this.obj.position.set(bottleConf.initPosition.x, bottleConf.initPosition.y +blockConf.height/2, bottleConf.initPosition.z)
        this.bottle = new THREE.Object3D()
        var baseicMaterial = new THREE.MeshPhongMaterial({
            color: 0x800080
        })

        var headRadius = bottleConf.headRadius
        this.head = new THREE.Mesh(new THREE.OctahedronGeometry(headRadius), baseicMaterial)
        this.head.castShadow = true

        this.bottom = new THREE.Mesh(
            new THREE.CylinderGeometry(0.62857 * headRadius, 0.907143 * headRadius, 1.91423 * headRadius, 20),
            baseicMaterial
        )

        this.bottom.castShadow = true
        this.head.position.y = 3.57143*headRadius
        this.head.position.x = 0
        this.head.position.z = 0

        this.middle = new THREE.Mesh(
            new THREE.CylinderGeometry(headRadius / 1.4, headRadius / 1.44 * 0.88, 1.2 * headRadius, 20),
            baseicMaterial
        )


        var topGeometry = new THREE.SphereGeometry(headRadius/1.4, 20, 20)
        topGeometry.scale(1, 0.54, 1)
        this.top = new THREE.Mesh(topGeometry,
            baseicMaterial)
        this.top.castShadow = true
        this.top.position.y = headRadius *1.8143
        this.top.position.x = 0
        this.top.position.z = 0


        this.middle.castShadow = true
        this.middle.position.y = 1.3857 * headRadius
        this.middle.position.x = 0
        this.middle.position.z = 0 

        

        this.body = new THREE.Object3D()
        this.body.add(this.bottom)
        this.body.add(this.top)
        this.body.add(this.middle)
        this.bottle.position.y=2.2
        this.bottle.position.x=0
        this.bottle.position.z=0
        this.bottle.add(this.head)
        this.bottle.add(this.body)
        this.obj.add(this.bottle)
    }
}

export default new Bottle()