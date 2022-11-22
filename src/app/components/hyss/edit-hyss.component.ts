import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hyss } from 'src/app/model/hyss';
import { HyssService } from 'src/app/service/hyss.service';

@Component({
  selector: 'app-edit-hyss',
  templateUrl: './edit-hyss.component.html',
  styleUrls: ['./edit-hyss.component.css'],
})
export class EditHyssComponent implements OnInit {
  skill: Hyss = null;

  constructor(
    private skillS: HyssService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.details(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        alert('Ocurrió un error');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Ocurrió un error');
        this.router.navigate(['']);
      }
    );
  }
}
