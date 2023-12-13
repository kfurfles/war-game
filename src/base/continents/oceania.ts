import { Country } from "../../core/country";
import { Continent } from "../../core/continent";

export const oceaniaContinent = new Continent('Oceania', 'bg-yellow-500',  [
    new Country(8,4,'Indonesia'),
    new Country(9,4,'New Guinea'),
    new Country(8,5,'Western Australia'),
    new Country(9,5,'Eastern Australia')    
])