import { Coordinate } from "./coordinate";

export class Country implements Coordinate {
    x: number;
    y: number;
    name: string;
    color: string;

    constructor( x: number, y: number, name: string, color = '') {
        this.x = x
        this.y = y
        this.name = name
        this.color = color
    }
}