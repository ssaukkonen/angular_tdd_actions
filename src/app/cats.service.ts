import { Injectable } from '@angular/core';
import { CatDisplay } from './catdisplay';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor() { }
  
  catDisplayList: CatDisplay[] =[
    {
      id: 0,
      name: "Martta",
      color: "Gray",
      age: 3,
      photo: "/assets/martta1.jpg",
      details: "Martta likes to play with feathers and she likes to eat dry cat food."
    },

    {
      id: 1,
      name: "Paavo",
      color: "Orange",
      age: 3,
      photo: "/assets/paavo1.jpg",
      details: "Paavo's favorite food is dried chichen neck and he likes to play with mouse toys."
    }
  ]

  getAllCatDisplays(): CatDisplay[] {
    return this.catDisplayList;
  }
  
  getCatDisplayById(id: number): CatDisplay | undefined {
    return this.catDisplayList.find(catDisplay => catDisplay.id === id);
  }
}
