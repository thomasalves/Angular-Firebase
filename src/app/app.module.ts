import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { MenuComponent } from './componentes/menu/menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NovoClientComponent } from './componentes/NovoClient/novoClient.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from "@angular/forms";

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { ListagemClientesComponent } from './componentes/listagem-clientes/listagem-clientes.component';
import { CriarProdutoComponent } from './componentes/criar-produto/criar-produto.component';
import { ListarProdutoComponent } from './componentes/listar-produto/listar-produto.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { HomeComponent } from './views/home/home.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { VendaComponent } from './views/venda/venda.component';
import { VendaProdutoComponent } from './componentes/venda-produto/venda-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NovoClientComponent,
    ListagemClientesComponent,
    CriarProdutoComponent,
    ListarProdutoComponent,
    ProdutosComponent,
    HomeComponent,
    ClientesComponent,
    VendaComponent,
    VendaProdutoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
