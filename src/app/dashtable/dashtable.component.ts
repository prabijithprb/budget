import { Component } from '@angular/core';

@Component({
  selector: 'app-dashtable',
  templateUrl: './dashtable.component.html',
  styleUrls: ['./dashtable.component.css']
})
export class DashtableComponent {

  tableDatas = [
    { name: 'Monnicca James', id: 123456789, phone: '+91 9876543210', transaction: 'Income', transactionName: 'Salary', amount: 200, accountType: 'Savings', balance: 6000 },
    { name: 'Samantha', id: 123456789, phone: '+91 9876543210', transaction: 'Income', transactionName: 'Salary', amount: 200, accountType: 'Savings', balance: 6000 },
    { name: 'Catherine', id: 123456789, phone: '+91 9876543210', transaction: 'Income', transactionName: 'Salary', amount: 200, accountType: 'Savings', balance: 6000 },
    { name: 'Monnicca James', id: 123456789, phone: '+91 9876543210', transaction: 'Income', transactionName: 'Salary', amount: 200, accountType: 'Savings', balance: 6000 },
    { name: 'Ileana Sam', id: 123456789, phone: '+91 9876543210', transaction: 'Income', transactionName: 'Salary', amount: 200, accountType: 'Savings', balance: 6000 },
  ]

}
