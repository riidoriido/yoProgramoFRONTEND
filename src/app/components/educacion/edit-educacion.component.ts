import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
    private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.details(id).subscribe(
      (data) => {
        this.educacion = data;
      },
      (err) => {
        alert('Ocurrió un error');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    this.educacion.imgE = this.imageService.url;
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Ocurrió un error');
        this.router.navigate(['']);
      }
    );
  }
  uploadImg($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'eduimg_' + id;
    this.imageService.uploadEduImg($event, name);
  }
}
