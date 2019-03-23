import GameOverPage from '../pages/game-over-page'
import GamePage from '../pages/game-page'

class GameView {
    constructor() {

    }

    showGameOverPage() {
        this.gameOverPage.show()
    }

    showGamePage(){
        this.gameOverPage.hide()
        this.gamePage.restart()
        this.gamePage.show()
    }


    restartGame() {
        this.gamePage.restart()
    }

    initGameOverpage(callbacks) {
        this.gameOverPage = new GameOverPage(callbacks)

        console.log('------')
        console.log(this)
        this.gameOverPage.init()
    }

    initGamePage(callbacks) {
        this.gamePage = new GamePage(callbacks)
        this.gamePage.init()
    }
}

export default new GameView()