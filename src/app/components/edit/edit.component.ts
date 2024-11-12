import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  @ViewChild("cajaid") cajaId!: ElementRef
  @ViewChild("cajanombre") cajaNombre!: ElementRef
  @ViewChild("cajalocalidad") cajaLoc!: ElementRef
  public departamento !: Departamento;

  constructor(private _service: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = params["id"]
      this._service.getDepartamento(id).subscribe(response => {
        this.departamento = response;
      })
    })
  }

  actualizarDepartamento(): void {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let loc = this.cajaLoc.nativeElement.value;
    let editDepartamento = new Departamento(id, nombre, loc)
    this._service.putDepartamento(editDepartamento).subscribe(response => {
      this._router.navigate(["/"]);
    })
  }
}
