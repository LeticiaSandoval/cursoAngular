import { Component } from '@angular/core';
import { ProductosService } from './servicio/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicios';
  productos: any;
  constructor(private ProductosService:ProductosService){
    //console.log(JSON.stringify(ProductosService.productos));
    this.productos = ProductosService.productos.rows;
  }
}
