import { Country } from "../../core/country";
import { Continent } from "../../core/continent";

export const nortAmericaContinent = new Continent('America', 'bg-blue-700',  [
    new Country(0,0,'Alaska'),
    new Country(1,0,'North west Territory'),
    new Country(2,0,'Greenland'),
    new Country(0,1,'Alberta'),
    new Country(1,1,'Ontaro'),
    new Country(2,1,'Quebec'),
    new Country(0,2,'Western United State'),
    new Country(1,2,'Eastern United State'),
    new Country(0,3,'Central America'),
])