import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import {
  Storage,
  ref,
  uploadBytes,
  list,
  getDownloadURL,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  url: string = '';
  constructor(private storage: Storage) {}

  public uploadProfileImg($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'imgperfil/' + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getProfileImg();
      })
      .catch((error) => console.log(error));
  }

  public uploadEduImg($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'imgeducacion/' + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getEduImg();
      })
      .catch((error) => console.log(error));
  }

  public uploadExpImg($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'imgexperiencia/' + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getExpImg();
      })
      .catch((error) => console.log(error));
  }

  public uploadProjImg($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'imgproyectos/' + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getProjImg();
      })
      .catch((error) => console.log(error));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'imagen');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
        }
      })
      .catch((error) => console.log(error));
  }

  getProfileImg() {
    const imagesRef = ref(this.storage, 'imgperfil');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
        }
      })
      .catch((error) => console.log(error));
  }

  getEduImg() {
    const imagesRef = ref(this.storage, 'imgeducacion');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
        }
      })
      .catch((error) => console.log(error));
  }
  getExpImg() {
    const imagesRef = ref(this.storage, 'imgexperiencia');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
        }
      })
      .catch((error) => console.log(error));
  }

  getProjImg() {
    const imagesRef = ref(this.storage, 'imgproyectos');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
        }
      })
      .catch((error) => console.log(error));
  }
}
