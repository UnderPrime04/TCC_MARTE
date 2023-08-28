import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PaginaCadastroComponent } from './pagina-cadastro/pagina-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PaginaLoginComponent,
    PaginaCadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
