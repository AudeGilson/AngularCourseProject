import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGard } from "../auth/auth.gard";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeResolverService } from "./recipes-resolver.service";
import { RecipesComponent } from "./recipes.component";

const routes: Routes = [
    {path: '', component: RecipesComponent, 
    canActivate: [AuthGard],
        children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailsComponent, resolve: [RecipeResolverService] },
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]},
        
    ]}, 
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class RecipesRoutingModule {}