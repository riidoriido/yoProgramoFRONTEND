import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hyss } from 'src/app/model/hyss';
import { HyssService } from 'src/app/service/hyss.service';

@Component({
  selector: 'app-new-hyss',
  templateUrl: './new-hyss.component.html',
  styleUrls: ['./new-hyss.component.css'],
})
export class NewHyssComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private hysS: HyssService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Hyss(this.nombre, this.porcentaje);
    this.hysS.save(skill).subscribe(
      (data) => {
        alert('Skill creada correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Ocurrió un error');
        this.router.navigate(['']);
      }
    );
  }
}
