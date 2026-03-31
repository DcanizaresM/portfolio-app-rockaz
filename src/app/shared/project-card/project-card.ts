import { Component, input } from '@angular/core';
import { Project } from '../../data/models/portfolio.model';

@Component({
selector: 'app-project-card',
standalone: true,
imports: [],
templateUrl: './project-card.html',
styleUrl: './project-card.css'
})
export class ProjectCardComponent {
// Signal Input de Angular 18. Exige que le pasemos un Project sí o sí.
project = input.required<Project>();
}