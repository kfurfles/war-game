import { Country } from "./country"

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Board = (Country|null)[][]

export function createBoard(columns: number, rows: number) {
    return [...Array(rows)].map((_,i) => {
        return [...Array(columns)].fill(null)
    }) as Board
}
