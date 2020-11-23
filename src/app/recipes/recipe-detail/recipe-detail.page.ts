import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipes } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recepiesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recepiesService.getRecepi(recipeId);
    })
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Delete recipe', 
      message: 'Are you sure you want to delete this recipe?', 
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      }, 
      {
        text: 'Delete',
        handler: () => {
          this.recepiesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);      
        }
      }
    ] }).then(alertEl => {
      alertEl.present();
    }) ;
  }

}
