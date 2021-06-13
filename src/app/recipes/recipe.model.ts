export class Recipe{

    public name : string;
    public description : string;
    public imagePath : string;

    constructor(nameInput : string, descriptionInput : string, imagePathInput : string){
        this.name = nameInput;
        this.description = descriptionInput;
        this.imagePath = imagePathInput;
    }
}