
import blockConf from '../../confs/block-conf'
export default class Baseblock {
    constructor(type) {
        this.type = type //cuboid|cylinder
        this.height=blockConf.height
        this.width=blockConf.width
    }
}
