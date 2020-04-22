import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import localePt from '@angular/common/locales/pt';          //R$
import { registerLocaleData } from '@angular/common';       //R$
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,               //Modulo de roteamento do angular
    BrowserAnimationsModule,        
    MatToolbarModule,               //Material
    MatSidenavModule,               //Material - Mav usada no menu vertical
    MatListModule,                  //Material - Lista usada no menu vertical
    MatCardModule,                  //Material - Card
    MatButtonModule,                //material - Button 
    MatSnackBarModule,              //Toast para exibição da informação de cadastro concluído
    HttpClientModule,               //Modulo para conexão do observable
    FormsModule,                    //Modulo para tratamento de formulário
    MatFormFieldModule,             //Material - formulários
    MatInputModule, MatTableModule  //Material - Inputs forms
  ],
  providers: [{
    provide: LOCALE_ID,          //R$
    useValue: 'pt-BR'          //R$
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
