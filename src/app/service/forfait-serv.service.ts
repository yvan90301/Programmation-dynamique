import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ForfaitServService {
  listhemle = <any>{};
  listmango = <any>{};
  constructor(private httpClient: HttpClient) {
    //nous insérons ces deux fonction de recupération du json dans le controleur pour qu'elles soient les toutes premières à s'exécuter
    //stockons ces listes dans le localStorage afin de l'utiliser où bon nous semble
    this.getMango().subscribe((Response: any) => {
      this.listmango = Response;
      localStorage.setItem('mango', JSON.stringify(this.listmango));
    });

    this.getHemle().subscribe((Response: any) => {
      this.listhemle = Response;
      localStorage.setItem('hemle', JSON.stringify(this.listhemle));
    });


    
    
    
  }

  //mes fonctions qui recupèrent les json
  getHemle() {
    return this.httpClient.get('../assets/Hemle.JSON');
  }

  getMango() {
    return this.httpClient.get('../assets/Mango.JSON');
  }
}
