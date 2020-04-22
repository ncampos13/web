import { Component, OnInit } from '@angular/core';
import { HeaderData } from '../header/header-data.model';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	items : HeaderData[] = [
		{
			title:"Início",
			icon: "home",
			routeUrl: '/'
		},
		{
			title:"Produtos",
			icon: "storefront",
			routeUrl: '/products'
		},		
		{
			title:"Dashboards",
			icon: "dashboard",
			routeUrl: '/'
		},
		{
			title:"Configurações",
			icon: "build",
			routeUrl: '/'
		}
	];
	nome : string = "Neudo";
	constructor() { }

	ngOnInit(): void {

	}

}
