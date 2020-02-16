import { Component, OnInit } from '@angular/core';
import { Sneakers } from '../models/Sneakers';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  
  productArray: Sneakers[] = [
    {id: 1, name: "Nike Jordan", price: 100, image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/i1-1b3fced1-b37a-4b5a-8eae-ce7dd06e72ac/calzado-air-jordan-1-mid-RRTg1P1y.jpg"},
    {id: 2, name: "Yeezy Zebra", price: 350, image: "https://shoesandmorebdn.com/1078-large_default/adidas-yeezy-boost-350-zebra.jpg" },
    {id: 3, name: "Supreme x Loui Vuitton", price: 4000, image: "https://cdn.shopify.com/s/files/1/0183/7878/4868/products/4433bfd9_1200x1200.jpeg?v=1555039753" },
    {id: 4, name: "Nike Vapormax TN", price: 120, image: "https://www.shoesvalley.cn/image/cache/nike/2018VAPORMAXTN/2443-1-600x600.jpeg"},
  ]
  
  selectedSneaker: Sneakers = new Sneakers();

  openForEdit(Sneakers: Sneakers){
    this.selectedSneaker = Sneakers;
  }

  addOrEdit(){

    if(this.selectedSneaker.id == 0){
      
        this.selectedSneaker.id = this.productArray.length +1;
        this.productArray.push(this.selectedSneaker);
      
    }
    
    this.selectedSneaker = new Sneakers();
  }

  delete(){
    if(confirm('Are you sure you want to delete it?')){  
      this.productArray = this.productArray.filter(x => x != this.selectedSneaker);
      this.selectedSneaker = new Sneakers();
    }
  }
  constructor() { }

  ngOnInit() {
    
  }

}
