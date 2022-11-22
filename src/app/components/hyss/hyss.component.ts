import { Component, OnInit } from '@angular/core';
import { Hyss } from 'src/app/model/hyss';
import { HyssService } from 'src/app/service/hyss.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hyss',
  templateUrl: './hyss.component.html',
  styleUrls: ['./hyss.component.css'],
})
export class HyssComponent implements OnInit {
  skill: Hyss[] = [];

  constructor(
    private skillS: HyssService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe((data) => {
      this.skill = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        (data) => {
          this.cargarSkills();
        },
        (err) => {
          alert('Ocurrió un error');
        }
      );
    }
  }
}
