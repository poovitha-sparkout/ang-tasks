import { Component,  } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent  {
  food !: {
    name: string;
    price: number;
    description : string;
    quantity : number
  }
  products: Array<{
    name: string;
    price: number;
    description : string;
    quantity : number
  }> = [
    {
    name : 'Non Veg Meals',
    price: 100,
    description : 'Food',
    quantity : 0,

  },
    {
    name : 'Non Veg Meals',
    price: 100,
    description : 'Food',
    quantity : 0,

  },
    {
    name : 'Non Veg Meals',
    price: 100,
    description : 'Food',
    quantity : 0,

  },
    {
    name : 'Non Veg Meals',
    price: 100,
    description : 'Food',
    quantity : 0,

  },
];


  constructor() { }



  openMenu:boolean=false;
  Payment:boolean=false;
  value = 0;
  handleMinus(food:any) {
    // this.value--;  
    this.products = this.products.map((product) => {
      if (product === food) {
        product.quantity--
      }
      return product;
    });
  }
  handlePlus(food:any) {
    this.products = this.products.map((product) => {
      if (product === food) {
        product.quantity++
      }
      return product;
    });
    
  }
  openPayment(){
    this.Payment = !this.Payment;
    this.openMenu = false
  }
}

