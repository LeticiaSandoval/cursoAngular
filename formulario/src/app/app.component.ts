import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formulario: FormGroup;
  title = 'formulario';
  constructor(private fromBuilder:FormBuilder){
    this.formulario = this.fromBuilder.group({
      nombre: ['nombre por defecto', Validators.required],
      apellido: ['nombre por defecto', Validators.required],
      email: ['por defecto', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]]
    })
  }
  
  onSubmit(parametro){
    console.log(parametro);
  }
}
