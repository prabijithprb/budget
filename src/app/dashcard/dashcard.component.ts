import { Component } from '@angular/core';

@Component({
  selector: 'app-dashcard',
  templateUrl: './dashcard.component.html',
  styleUrls: ['./dashcard.component.css']
})
export class DashcardComponent {

  cardDatas = [
    {head:'Total Users',value:'1,567',difference:2.36},
    {head:'Savings Account',value:'1,500',difference:2.36},
    {head:'Savings Account',value:'1,500',difference:2.36},
    {head:'Savings Account',value:'1,500',difference:2.36},
  ]

}
