import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrl: './add-joueur.component.css',
})
export class AddJoueurComponent implements OnInit {
  newJoueur = new Joueur();
  message?: string;
  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {}
  addJoueur() {
    //console.log(this.newJoueur);
    this.joueurService.ajouterJoueur(this.newJoueur);
    this.message =
      ' Le Joueur ' + this.newJoueur.nomJoueur + 'est ajouté avec succès ! ';
  }
}
