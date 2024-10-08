import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';

const routes: Routes = [

  {path: "joueurs", component : JoueursComponent},
  {path: "add-joueur", component : AddJoueurComponent},
  {path: "", redirectTo: "joueurs", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
