import { Ingredient } from "../shared/ingredient.model";

export class Receipe 
{
    name :string;
    description : string;
    imagePath : string;
    ingredients : Ingredient[];

    constructor(name:string , desc:string , path:string, ing: Ingredient[])
    {
        this.name = name;
        this.description =desc;
        this.imagePath = path;
        this.ingredients = ing;
    }
}