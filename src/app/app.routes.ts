import { Routes } from '@angular/router';

export const routes: Routes = [
{
path: '',
// OJO: La Home la creamos a mano, el archivo se llama home.ts
loadComponent: () => import('./features/home/home').then(m => m.HomeComponent),
title: 'David | Portfolio Frontend'
},
{
path: 'proyectos',
// OJO: Generado por CLI, el archivo se llama projects.component.ts
loadComponent: () => import('./features/projects/projects').then(m => m.ProjectsComponent),
title: 'Proyectos | David'
},
{
path: 'sobre-mi',
// OJO: Generado por CLI, el archivo se llama about.component.ts
loadComponent: () => import('./features/about/about').then(m => m.AboutComponent),
title: 'Sobre mí | David'
},
{
path: 'contacto',
// OJO: Generado por CLI, el archivo se llama contact.component.ts
loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent),
title: 'Contacto | David'
},
{
path: '**',
redirectTo: ''
}
];