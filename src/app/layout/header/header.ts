import { Component, inject, signal } from '@angular/core';
import { PortfolioFacade } from '../../data/facades/portfolio.facade';

@Component({
selector: 'app-header',
standalone: true,
// 1. Array de imports limpio, ya no necesitamos RouterLink
imports: [],
templateUrl: './header.html',
styleUrl: './header.css'
})
export class HeaderComponent {
portfolioFacade = inject(PortfolioFacade);

isMenuOpen = signal<boolean>(false);

toggleMenu() {
this.isMenuOpen.update((estadoActual: boolean) => !estadoActual);
}
}