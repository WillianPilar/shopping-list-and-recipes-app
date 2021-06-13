import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("Primeira Receita", "Essa é a primeira receita", "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg"),
    new Recipe("Segunda Receita", "Essa é a segunda receita", "https://live.staticflickr.com/5822/31006629172_eb7f7e9eb7_b.jpg")
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
