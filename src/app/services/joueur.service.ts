import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur.model';

@Injectable({
  providedIn: 'root',
})
export class JoueurService {
  joueurs: Joueur[];
  joueur!: Joueur;

  constructor() {
    this.joueurs = [
      {
        idJoueur: 1,
        nomJoueur: 'Cristiano Ronaldo',
        datenaissance: new Date('05/02/1985'),
        equipe: 'Al Nassr',
        position: 'attaquant',
      },

      {
        idJoueur: 2,
        nomJoueur: 'Luka Modrić ',
        datenaissance: new Date('09/09/1985'),
        equipe: 'Real Madrid',
        position: 'milieu',
      },
      {
        idJoueur: 3,
        nomJoueur: 'Sergio Ramos ',
        datenaissance: new Date('1986/03/30'),
        equipe: 'Paris Saint-Germain(PSG)',
        position: 'defenseur central',
      },
    ];
  }
  listeJoueurs(): Joueur[] {
    return this.joueurs;
  }
  ajouterJoueur(j: Joueur) {
    this.joueurs.push(j);
  }
  supprimerJoueur(j: Joueur) {
    const index = this.joueurs.indexOf(j, 0);
    if (index > -1) {
      this.joueurs.splice(index, 1);
    }
  }
  consulterJoueur(id: number): Joueur {
    this.joueur = this.joueurs.find((j) => j.idJoueur == id)!;
    return this.joueur;
  }
  trierJoueurs() {
    this.joueurs = this.joueurs.sort((n1, n2) => {
      if (n1.idJoueur! > n2.idJoueur!) {
        return 1;
      }
      if (n1.idJoueur! < n2.idJoueur!) {
        return -1;
      }
      return 0;
    });
  }
  updateJoueur(j: Joueur) {
    this.supprimerJoueur(j);
    this.ajouterJoueur(j);
    this.trierJoueurs();
  }
}
