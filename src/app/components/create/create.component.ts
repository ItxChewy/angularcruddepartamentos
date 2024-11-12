import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLoc !: ElementRef;

  constructor(private _service: ServiceDepartamentos,
    private _router: Router
  ) { }

  insertDepartamento(): void {
    let num = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLoc.nativeElement.value;
    let newDept = new Departamento(num, nombre, localidad)
    this._service.postDepartamentos(newDept).subscribe(response => {
      this._router.navigate(["/"])
    })
  }
}
