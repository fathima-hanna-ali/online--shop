import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
import { Product } from '../products';
import { Subject } from 'rxjs';
import { CategoryService } from '../category.service';
import { Category } from '../categories';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  addCategory(form: NgForm) {
    const category: any = {
      name: form.value.name
    }
    this.categoryService.addingCategory(category).subscribe(
    );
    
    this.router.navigate(['manage-products']);
  }

}
