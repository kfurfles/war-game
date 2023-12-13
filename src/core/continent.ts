import { Board } from "./board";
import { Country } from "./country";

export class Continent {
    contries: Country[]
    name: string
    color: string

    constructor(name: string, color: string, contries: Country[]){
        this.name = name
        this.contries = contries.map(c => {
            c.color = color
            return c;
        })
        this.color = color
    }

    fillCounties(board: Board){
        console.log('board to be filled')
        this.contries.map(c => {
            board[c.y][c.x] = c
        })
        
        console.log(board)
    }
}