import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notificaciones';
  constructor(private toastsManager:  ToastsManager, ver: ViewContainerRef){
    this.toastsManager.setRootViewContainerRef(ver);

  }

  opeacion1(){
    this.toastsManager.success('Mensaje', 'titulo');

  }
  operacion2(){
    this.toastsManager.error('mensaje', 'titulo');

  }
  operacion3(){
    this.toastsManager.warning('mensaje', 'titulo');

  }
  operacion4(){
    this.toastsManager.info('mensaje', 'titulo');

  }
  operacion5(){
    this.toastsManager.custom('mensaje', 'titulo');

  }
}
