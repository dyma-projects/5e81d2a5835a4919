import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  liaison:string;
  operation:string;

  public afficherTexte() {
    document.getElementById("texte").innerHTML += "affiche le texte <br>";
  }

  constructor() { 
    this.liaison = "Voici une liaison"
    this.operation = "Voici le résultat de 2 * 3 => "
  }

  ngOnInit(): void {
  }

}
