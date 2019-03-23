class Light {
    constructor() {
        this.instance = {}
    }
    init() {

        const ambientLight=new THREE.AmbientLight(0xffffff,0.8)//环境光
        const shadowLight=new THREE.DirectionalLight(0xffffff,0.3)//平行光
        
        shadowLight.position.set(10,30,20)
        var baseMaterial=new THREE.MeshBasicMaterial({color:0xf5f5f5})
        this.shadowTarget=new THREE.Mesh(new THREE.PlaneGeometry(0.1,0.1),baseMaterial)
        this.shadowTarget.visible=false
        this.shadowTarget.name='shadowTarget'
        shadowLight.target=this.shadowTarget
        

        this.instance.ambientLight=ambientLight
        this.instance.shadowLight=shadowLight
        this.instance.shadowTarget=this.shadowTarget


        
        
    }
    render() {
        this.renderer.render(this.instance, this.camera.instance)
    }
}

export default new Light()