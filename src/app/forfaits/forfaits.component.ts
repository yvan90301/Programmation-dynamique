import { Component } from '@angular/core';
import { ForfaitServService } from '../service/forfait-serv.service';

@Component({
  selector: 'app-forfaits',
  templateUrl: './forfaits.component.html',
  styleUrls: ['./forfaits.component.css'],
})
export class ForfaitsComponent {
  listhemle = <any>{};
  listmango= <any>{};

  constructor(private forfaits: ForfaitServService) {
    this.listhemle = JSON.parse(localStorage.getItem("hemle")!)
    this.listmango = JSON.parse(localStorage.getItem("mango")!)
  }
}
