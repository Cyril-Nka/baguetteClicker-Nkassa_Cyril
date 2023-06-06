import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css'],
})
export class MainCategoryComponent implements OnInit, OnDestroy {
  totalGlobal: number = 0;

  totalPerSecond: number = 0;

  clickValue: number = 0;

  titlesList: string[] = ['pains', 'pains par seconde'];

  breadClicker: string[] = ['assets/img/bread.png', 'Tranche de pain'];

  categories: { id: number; name: string; price: number; inactive: boolean }[] = [];

  descCategories: { id: number; name: string; total: number; eachSecond: number }[] = [];
  
  intervalId: any;

  constructor() {
    this.clickValue = 1;
    this.descCategories = [

      { id: 0, name: 'Clics', total: 0, eachSecond: 0 },

      { id: 1, name: 'Employé(e)s', total: 0, eachSecond: 0 },

      { id: 2, name: 'Fournisseurs', total: 0, eachSecond: 0 },

      { id: 3, name: 'Nouvelles recettes', total: 0, eachSecond: 0 },

      { id: 4, name: 'Succursales', total: 0, eachSecond: 0 },
    ];
    this.categories = [
      { id: 0, name: 'Clic', price: 10, inactive: true },

      { id: 1, name: 'Employé(e)', price: 500, inactive: true },

      { id: 2, name: 'Fournisseur', price: 3000, inactive: true },

      { id: 3, name: 'Nouvelle recette', price: 15000, inactive: true },

      { id: 4, name: 'Succursale', price: 100000, inactive: true },
    ];
    this.intervalId = setInterval(() => {
      this.addBreadPerSecondToTotal();
    }, 1000);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.clearInterval();
  }

  checkIfActive(): void {
    for (let button of this.categories) {

      if (button.price <= this.totalGlobal) 
      {
        button.inactive = false;
      } else {

        button.inactive = true;

      }
    }
  }

  onClickBread(): void {
    this.totalGlobal += this.clickValue;
    this.checkIfActive();
  }

  buyItem(itemId: number): void {
    const item = this.categories[itemId];

    if (this.descCategories[itemId].name !== 'Clics') {

      this.totalGlobal -= item.price;

      item.price = Math.round(item.price * 1.75);

      this.descCategories[itemId].total++;

      const eachSecond = 5 * Math.pow(2, itemId) * this.descCategories[itemId].total;

      this.totalPerSecond += eachSecond;
    }

    this.checkIfActive();
  }

  addBreadPerSecondToTotal(): void {
    if (this.totalPerSecond > 0) {

      this.totalGlobal += this.totalPerSecond;
    }
  }

  clearInterval(): void {

    clearInterval(this.intervalId);
  }
}
