import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categories=[]

  constructor() { 
    this.categories.push("food")
    this.categories.push("Entertainment")
  }
  addCategory(categoryName:string){

  }
  deleteCategory(id){

  }
  getAllCategory(){

  }
}
