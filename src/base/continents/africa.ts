import { Country } from "../../core/country";
import { Continent } from "../../core/continent";

export const africaContinent = new Continent('Africa', 'bg-purple-700',[
    new Country(4,4,'North Africa'),
    new Country(5,4,'Egypt'),
    new Country(4,5,'Congo'),
    new Country(5,5,'East Africa'),
    new Country(4,6,'South Africa'),
    new Country(5,6,'East Africa')
])