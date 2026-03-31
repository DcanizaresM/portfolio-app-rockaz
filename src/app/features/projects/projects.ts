import { Component, inject } from '@angular/core';
import { PortfolioFacade } from '../../data/facades/portfolio.facade';
import { ProjectCardComponent } from '../../shared/project-card/project-card';

@Component({
selector: 'app-projects',
standalone: true,
imports: [ProjectCardComponent],
templateUrl: './projects.html',
styleUrl: './projects.css'
})
export class ProjectsComponent {
portfolioFacade = inject(PortfolioFacade);
}