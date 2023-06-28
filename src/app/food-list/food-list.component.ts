// import { Component,  } from '@angular/core';

// @Component({
//   selector: 'app-food-list',
//   templateUrl: './food-list.component.html',
//   styleUrls: ['./food-list.component.css']
// })
// export class FoodListComponent  {
//   food !: {
//     name: string;
//     price: number;
//     description : string;
//     quantity : number
//   }
//   products: Array<{
//     name: string;
//     price: number;
//     description : string;
//     quantity : number
//   }> = [
//     {
//     name : 'Non Veg Meals',
//     price: 100,
//     description : 'Food',
//     quantity : 0,

//   },
//     {
//     name : 'Non Veg Meals',
//     price: 100,
//     description : 'Food',
//     quantity : 0,

//   },
//     {
//     name : 'Non Veg Meals',
//     price: 100,
//     description : 'Food',
//     quantity : 0,

//   },
//     {
//     name : 'Non Veg Meals',
//     price: 100,
//     description : 'Food',
//     quantity : 0,

//   },
// ];


//   constructor() { }



//   openMenu:boolean=false;
//   Payment:boolean=false;
//   value = 0;
//   handleMinus(food:any) {
//     // this.value--;  
//     this.products = this.products.map((product) => {
//       if (product === food) {
//         product.quantity--
//       }
//       return product;
//     });
//   }
//   handlePlus(food:any) {
//     this.products = this.products.map((product) => {
//       if (product === food) {
//         product.quantity++
//       }
//       return product;
//     });
    
//   }
//   openPayment(){
//     this.Payment = !this.Payment;
//     this.openMenu = false
//   }
// }



import { Component } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent {
  food!: {
    name: string;
    price: number;
    description: string;
    quantity: number;
  };
  products: Array<{
    name: string;
    price: number;
    description: string;
    quantity: number;
  }> = [
    {
      name: 'Biriyani',
      price: 100,
      description: 'Food',
      quantity: 0,
    },
    {
      name: 'Noodles',
      price: 100,
      description: 'Food',
      quantity: 0,
    },
    {
      name: 'Chapathi',
      price: 100,
      description: 'Food',
      quantity: 0,
    },
    {
      name: 'Parott',
      price: 100,
      description: 'Food',
      quantity: 0,
    },
  ];

  cart: {
    name: string;
    price: number;
    description: string;
    quantity: number;
  }[] = [];
  constructor() {}

  openMenu: boolean = false;
  Payment: boolean = false;
  value = 0;
  handleMinus(food: any) {
    // this.value--;

    this.products = this.products.map((product) => {
      if (product === food) {
        product.quantity--;
      }
      return product;
    });
    console.log(this.products);
  }
  handlePlus(food: any) {
    this.products = this.products.map((product) => {
      if (product === food) {
        product.quantity++;
      }
      return product;
    });
  }
  openPayment() {
    this.Payment = !this.Payment;
    this.openMenu = false;
  }

  onCheckout() {
    this.openMenu = !this.openMenu;
    for (const product of this.products) {
      if (product.quantity > 0) {
        let cartItemExists = false;
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i].name === product.name) {
            this.cart[i] = product;
            cartItemExists = true;
            break;
          }
        }
        if (!cartItemExists) {
          this.cart.push(product);
        }
      }
    }
    console.log(this.cart);
    return this.cart;
  }
  
  calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of this.cart) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  }
   
  }
