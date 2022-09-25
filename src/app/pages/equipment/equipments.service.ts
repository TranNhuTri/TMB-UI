import { Injectable } from '@angular/core';

export interface Element {
  position:number;
  name: string;
  datebuy: string;
  datedelivery: string;
  dateactualdelivery: string;
  quantity: number;
  price:number;
  supplier: string;
  otherfee: number;
  paid: number;
  total: number;
}

const data: Element[] = [
  {position: 1, name: 'Implant Straumann', datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'CÔNG TY BRANDSON', 
  otherfee: 100, paid:300, total:300},
  {position: 2, name: 'Implant Superline Hàn Quốc',datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'CÔNG TY BRANDSON', 
  otherfee: 100, paid:300, total:300},
  {position: 3, name: 'Implant Superline USA', datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'CÔNG TY BRANDSON', 
  otherfee: 100, paid:300, total:300},
  {position: 4, name: 'IMPLANT SWISS', datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'CÔNG TY BRANDSON', 
  otherfee: 100, paid:300, total:300},
  {position: 5, name: 'Implant Tekka Pháp', datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'CÔNG TY BRANDSON', 
  otherfee: 100, paid:300, total:300},
  {position: 6, name: 'Labo Cercon', datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'CÔNG TY TNHH TM STRAUMANN VN', 
  otherfee: 100, paid:300, total:300},
  {position: 7, name: 'Labo Cercon HT', datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'Công Ty CP Trang Thiết Bị Y Nha Khoa Việt Đăng', 
  otherfee: 100, paid:300, total:300},
  {position: 8, name: 'Labo Lava',datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'CÔNG TY BRANDSON', 
  otherfee: 100, paid:300, total:300},
  {position: 9, name: 'Labo Lotus', datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'Công Ty CP Trang Thiết Bị Y Nha Khoa Việt Đăng', 
  otherfee: 100, paid:300, total:300},
  {position: 10, name: 'Labo Tital', datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'CÔNG TY BRANDSON', 
  otherfee: 100, paid:300, total:300},
  {position: 11, name: 'Nước súc miệng Kin', datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'CÔNG TY BRANDSON', 
  otherfee: 100, paid:300, total:300},
  {position: 12, name: 'Magnesium', datebuy: '12-Dec-2021', datedelivery: '13-Dec-2021', 
  dateactualdelivery: '13-Dec-2021', quantity: 1, price:100, supplier:'CÔNG TY CỔ PHẦN SEADENT', 
  otherfee: 100, paid:300, total:300},
];


@Injectable()
export class EquipmentsService {

  constructor() { }

  getData(){
    return data;
  }
}
