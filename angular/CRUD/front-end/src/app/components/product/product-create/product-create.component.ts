import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name : '',
    price: null
  };

  errors: string[] = [];

  constructor(
    private productService: ProductService, 
    private router: Router
  ) {  }

  ngOnInit(): void {  }

  createProduct():void {

    if(this.product.name.trim() === ""){ this.errors.push("nome") };
    if(this.product.price === null){ this.errors.push("valor") };

    if(this.errors.length > 0){
      throw this.errors.map( x => this.productService.showMessage("Favor preencher os campos obrigatórios!" ) );
    }

    this.productService.create(this.product).subscribe(()=> {
      this.productService.showMessage("Produto cadastrado!");
      this.router.navigate(['/products']);
    });
  }
  
  cancel():void {
    this.router.navigate(["./products"]);
  }

}
