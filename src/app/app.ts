import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header';
import { FooterComponent } from './layout/footer/footer';
import { HomeComponent } from './features/home/home';
import { AboutComponent } from './features/about/about';
import { ProjectsComponent } from './features/projects/projects';
import { ContactComponent } from './features/contact/contact';

@Component({
selector: 'app-root',
standalone: true,
imports: [
HeaderComponent,
FooterComponent,
HomeComponent,
AboutComponent,
ProjectsComponent,
ContactComponent
],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class AppComponent {
title = 'portfolio';
}