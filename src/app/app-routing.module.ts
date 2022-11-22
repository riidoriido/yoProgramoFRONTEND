import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BioComponent } from './components/bio/bio.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewProjectoComponent } from './components/projects/new-projecto.component';
import { EditProjectoComponent } from './components/projects/edit-projecto.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { EditPersonaComponent } from './components/bio/edit-persona.component';
import { HyssComponent } from './components/hyss/hyss.component';
import { NewHyssComponent } from './components/hyss/new-hyss.component';
import { EditHyssComponent } from './components/hyss/edit-hyss.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'bio', component: BioComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'hyss', component: HyssComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'nuevoproj', component: NewProjectoComponent },
  { path: 'editproj/:id', component: EditProjectoComponent },
  { path: 'presupuesto', component: PresupuestoComponent },
  { path: 'editbio/:id', component: EditPersonaComponent },
  { path: 'newskill', component: NewHyssComponent },
  { path: 'editskill/:id', component: EditHyssComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
