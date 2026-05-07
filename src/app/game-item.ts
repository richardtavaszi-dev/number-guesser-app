export class GameItem {
    guess: number = 0
    response: string = ""
    constructor(guess: number, response: string){
        this.guess = guess
        this.response = response
    }
}
