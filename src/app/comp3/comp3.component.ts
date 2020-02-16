import { Component, OnInit } from '@angular/core';
import { Store } from '../models/Store'
@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  storeArray: Store[] = [
    {id: 1, name:"JD", city: "Madrid", image:"https://www.modaes.es/files/000_2016/jd%20sports/jd-tienda-centro-comercial-728.jpg" },
    {id: 2, name:"Snipes", city: "Barcelona", image:"https://www.modaes.es/files/000_2016/deichmann/deichmann-snipes-nueva-condomina-728.jpg" },
    {id: 3, name:"Foot Locker", city: "Madrid", image:"https://www.modaes.com/files/000_2016/foot%20locker/foot-locker-escaparate-948.jpg" },
    {id: 4, name:"Nike", city: "Valencia", image:"https://nike.brickworksoftware.com/assets?format=webp&source=https://cdn.filepicker.io/api/file/q7QmFlx2RyySSlNUgHaF" },
    {id: 5, name:"Supreme", city: "London", image:"https://i.pinimg.com/originals/a3/f2/f2/a3f2f2dc96516a4e61a5f57267c70151.jpg" },
    {id: 6, name:"Off-White", city: "New York", image:"https://www.america-retail.com/static//2019/01/off-white-seoul-store-inside-look-3.jpg" },

  ]
  constructor() { }

  ngOnInit() {
  }

}
