import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//cargaJs
import { CargaJsService } from './carga-js.service';
//fin cargaJs

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BioComponent } from './components/bio/bio.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HyssComponent } from './components/hyss/hyss.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewProjectoComponent } from './components/projects/new-projecto.component';
import { EditProjectoComponent } from './components/projects/edit-projecto.component';
import { EditPersonaComponent } from './components/bio/edit-persona.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditHyssComponent } from './components/hyss/edit-hyss.component';
import { NewHyssComponent } from './components/hyss/new-hyss.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BioComponent,
    ExperienciaComponent,
    SkillsComponent,
    HyssComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    BioComponent,
    PresupuestoComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewProjectoComponent,
    EditProjectoComponent,
    EditPersonaComponent,
    EditHyssComponent,
    NewHyssComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      showSubtitle: true,
    }),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [CargaJsService, interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
