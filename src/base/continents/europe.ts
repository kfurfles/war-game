import { Country } from "../../core/country";
import { Continent } from "../../core/continent";

export const europeContinent = new Continent('Europa', 'bg-green-700',  [
    new Country(3,0,'Iceland'),
    new Country(4,0,'Scandanavia'),
    new Country(3,1,'Great Britain'),
    new Country(4,1,'Northen Europe'),
    new Country(5,1,'Ukraine'),
    new Country(3,2,'Western Europe'),
    new Country(4,2,'Southern Europe'),
])