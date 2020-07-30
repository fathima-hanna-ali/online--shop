import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Category } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>('http://localhost:3000/categories');
  }

  addingCategory(Category:any){
    return this.http.post<Category[]>('http://localhost:3000/categories',Category);
  }

  deletingCategory(categoryId: string) {
    return this.http.delete<{ message: string }>('http://localhost:3000/categories/' + categoryId);
  }


}
