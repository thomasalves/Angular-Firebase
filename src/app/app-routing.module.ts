import { VendaComponent } from './views/venda/venda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProdutosComponent} from './views/produtos/produtos.component'
import {HomeComponent } from './views/home/home.component'
import { ClientesComponent } from './views/clientes/clientes.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path: "produtos",
    component:ProdutosComponent
  },
  {
    path: "clientes",
    component: ClientesComponent
  },
  {
    path: "venda",
    component: VendaComponent
  },
  // {
  //   path: "estoque",
  //   component: EstoqueComponent
  // },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
