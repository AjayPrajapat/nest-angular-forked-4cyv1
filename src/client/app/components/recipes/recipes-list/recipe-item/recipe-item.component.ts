import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../../../shared/components/ingredient/ingredient.component';

export class RecipeItem {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]) {
  }
}

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeItem;
  @Input() recipeIndex: number;

  constructor() { }

  ngOnInit() {
  }

}
