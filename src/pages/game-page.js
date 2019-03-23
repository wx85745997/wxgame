import {
    scene
} from '../scene/index'

import Cuboid from '../block/cuboid'
import CylinderBlock from '../block/cylinder'

import ground from '../objects/ground'
import bottle from '../objects/bottle'

export default class GamePage {
    constructor(callbacks) {
        this.callbacks = callbacks
    }

    init() {
        console.log('gamepage init')
        //console.log(scene)
        this.scene = scene
        this.ground=ground
        this.bottle=bottle
        this.scene.init()
        this.ground.init()
        this.bottle.init()
        this.addInitBlock()
        this.addBottle()
        this.addGround()
        this.render()
        
    }

    render() {


        this.scene.render({
           
        })
        requestAnimationFrame(this.render.bind(this))
    }

    show() {
        this.mesh.visible = true
    }
    hide() {
        this.mesh.visible = false
    }

    restart() {
        console.log('game page restart')
    }
    addInitBlock() {
        const cuboidBlock = new Cuboid(-15, 0, 0)
        const cylinderBlock = new CylinderBlock(23, 0, 0)
        this.scene.instance.add(cuboidBlock.instance)
        this.scene.instance.add(cylinderBlock.instance)
    }
    addGround(){
        this.scene.instance.add(this.ground.instance)
    }
    addBottle(){
        this.scene.instance.add(this.bottle.obj)
    }
}