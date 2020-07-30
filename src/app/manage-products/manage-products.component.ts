import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ProductServiceService } from '../product-service.service';
import { CategoryService } from '../category.service';
import { Category } from '../categories';
@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products: Product[] = [];
  updatedProducts: Product[] = [];
  categories: Category[] = [];
  updatedCategories: Category[] = [];

  constructor(private productservice: ProductServiceService,private categoryservice: CategoryService) { }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe(result => {
      this.products = result;
      const newProducts = result;
    });
    this.categoryservice.getCategories().subscribe(result => {
      this.categories = result;
    });
  }

  deleteProduct(productId: string) {
    if (confirm('Are you sure that you want to delete this product?')) {
      this.productservice.deletingProduct(productId).subscribe(productData => {
        console.log(productData.message);
        this.updatedProducts = this.products.filter(p => p._id !== productId);
        this.products = this.updatedProducts;
      });
    } else {
      return;
    }
  }

  deleteCategory(CategoryId: string) {
    if (confirm('Are you sure that you want to delete this category?')) {
      this.categoryservice.deletingCategory(CategoryId).subscribe(categoryData => {
        console.log(categoryData.message);
        this.updatedCategories = this.categories.filter(p => p._id !== CategoryId);
        this.categories = this.updatedCategories;
      });
    } else {
      return;
    }
  }

}
