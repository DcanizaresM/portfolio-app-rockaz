import { Component, inject } from '@angular/core';
import { PortfolioFacade } from '../../data/facades/portfolio.facade';

@Component({
selector: 'app-about',
standalone: true,
imports: [],
templateUrl: './about.html',
styleUrl: './about.css'
})
export class AboutComponent {
portfolioFacade = inject(PortfolioFacade);
}