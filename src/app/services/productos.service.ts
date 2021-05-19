import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient) {
    
    this.cargarProductos();
  }

  private cargarProductos() {

    this.http.get('https://angular-html-af5f0-default-rtdb.firebaseio.com/productos_idx.json') // definicion de la peticion
      .subscribe( (resp: Producto[]) => { // el subscribe es para que haga la peticion, y adentro voy a recibir una respuesta, "resp"
        console.log(resp);
        this.productos = resp;
        this.cargando = false;
        
        /*setTimeout(() => {
          this.cargando = false;
        }, 2000);*/
        
      });
  }
}
