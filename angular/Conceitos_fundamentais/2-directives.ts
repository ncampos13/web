/*------------------------------------------------------------------------------------------------------------
##############################################################################################################
D I R E T I V A S
##############################################################################################################
------------------------------------------------------------------------------------------------------------*/ 

/*------------------------------------------------------------------------------------------------------------
Diretivas de atributo 
------------------------------------------------------------------------------------------------------------*/ 
//app.component.html
<p appHighlight>Highlight me!</p>

//app.component.ts  --ng generate directive highlight
import { Directive, ElementRef } from '@angular/core';

@Directive({
selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    }
}

/*------------------------------------------------------------------------------------------------------------
Diretivas de estrutura
------------------------------------------------------------------------------------------------------------*/  
//app.component.html
<a *ngFor="let item of items" mat-list-item>
    <i class="material-icons">
        storefront
    </i>
    {{ item }}
</a>

//app.component.ts  --ng generate directive highlight
export class NavComponent implements OnInit {

    items : string[] = ["visualizar","perfil","configurações"];
    
    constructor() { }

    ngOnInit(): void {
    }
}
/*------------------------------------------------------------------------------------------------------------
fazendo minha diretiva estrutural
------------------------------------------------------------------------------------------------------------*/    
//app.component.html
<ul>
    <li *myFor="let n em [1,2,3] usando 'teste'"></li>
</ul>

//myFor.directive.ts
import { Directive, OnInit, Input. ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
    selector: 'myFor'
})

export class forDirective implements OnInit {

    @Input('myForEm') numbers: number[] //guarda o valor [1,2,3]
    @Input('myForUsando') texto: string //guarda o valor 'teste'

    constructor(
        private container: ViewContainerRef,
        private template: templateRef<any>
    ){}

    ngOnInit():void{
        console.log(this.numbers);

        for(let number of this.numbers){
            this.container.createEmbeddedView(this.template, { $implicit : number });
        }
    }
}
