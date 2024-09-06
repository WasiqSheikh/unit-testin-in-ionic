import { Injectable } from '@angular/core';
//import { Storage } from '@ionic/Storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async getStoredTodos(): Promise<any[]> {
    //const data = await Storage.get({ key: 'mytodos' });

    // const data = await Storage.get({ key: 'mytodos' });
    // if (data.value && data.value !== '') {
    //   return JSON.parse(data.value);
    // } else {
    //   return [];
    // }
    return [];
  }

  async addTodo(todo: any) {
    const todos = await this.getStoredTodos();
    todos.push(todo);
    return todos;
    //return await Storage.set({ key: 'mytodos', value: JSON.stringify(todos) });
  }

  async removeTodo(index: any) {
    const todos = await this.getStoredTodos();
    todos.splice(index, 1);
    return todos;
    //return await Storage.set({ key: 'mytodos', value: JSON.stringify(todos) });
  }

}
