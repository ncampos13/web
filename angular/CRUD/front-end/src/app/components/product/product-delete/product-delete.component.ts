import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
	selector: 'app-product-delete',
	templateUrl: './product-delete.component.html',
	styleUrls: ['./product-delete.component.css']
})


export class ProductDeleteComponent implements OnInit {
	
	product: Product;

	constructor(private router: Router, private service: ProductService, private route: ActivatedRoute) { }

	ngOnInit():void{
		const id = +this.route.snapshot.paramMap.get("id");
		
		this.service.readById(id).subscribe(product => {
			this.product = product;
		});
	}

	deleteProduct():void{
		
		if (!confirm("Você deseja excluir o Produto?")){
			return this.cancel();
		}

		this.service.delete(this.product.id).subscribe(() => {
			this.router.navigate(["/products"]);
			this.service.showMessage("Produto Excluído com sucesso!");
		});
	}

	cancel():void{
		this.router.navigate(["/products"]);
	}

}
