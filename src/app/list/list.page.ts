import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  todos: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadStorageTodos();
  }

  async loadStorageTodos() {
    this.todos = await this.apiService.getStoredTodos();
  }
}