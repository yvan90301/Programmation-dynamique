import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  sms:any
  appel:any
  somme:any
  data:any
  jours:any

  constructor(private router: Router){}
  
  // cette fonction c'est pour valider le formulaire les valeures du formulaires sont recupérées avec succès
  valider(somme:any,sms:any,appel:any,data:any,jours:any){
    if(sms == undefined){
      sms = 0
    }else if(appel == undefined){
      appel = 0
    }else if(data == undefined){
      data = 0
    }else{
      sms = parseInt(sms)
      appel = parseInt(appel)
      data = parseInt(data)
    }
    console.log(somme,sms,appel,data,jours);
    
  }

}
