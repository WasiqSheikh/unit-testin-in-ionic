import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTodos(): {} {
    let result = {}
    // result = localStorage.getItem('todos');
    // console.log('result = ', result);
    return result;
  }
  add(n1: number,n2: number): number {
    return n1+n2
  }

}
