import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  products: Array<{
    name: string;
    price: number;
  }> = [];

 

  constructor() { }
  ngOnInit(): void {
   
  }



  openMenu:boolean=false;
  Payment:boolean=false;
  value = 0;
  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }
  openPayment(){
    this.Payment = !this.Payment;
    this.openMenu = false
  }
}

