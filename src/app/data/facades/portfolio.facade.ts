import { Injectable, inject, signal, computed } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PortfolioAdapterService } from '../services/portfolio-adapter.service';
import { PortfolioData, Project } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioFacade {
  private readonly adapter = inject(PortfolioAdapterService);

  // Estado Privado (Signals)
  private readonly _portfolioData = signal<PortfolioData | null>(null);
  private readonly _isLoading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);

  // Selectores Públicos (Readonly Signals y Computed)
  readonly portfolioData = this._portfolioData.asReadonly();
  readonly projects = computed<Project[]>(() => this._portfolioData()?.projects ?? []);
  readonly isLoading = this._isLoading.asReadonly();
  readonly error = this._error.asReadonly();

  constructor() {
    this.loadData();
  }

  private loadData(): void {
    this._isLoading.set(true);
    this.adapter.getPortfolioData()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (data) => {
          this._portfolioData.set(data);
          this._isLoading.set(false);
        },
        error: (err) => {
          console.error('Error fetching portfolio data:', err);
          this._error.set('No se pudo cargar la información.');
          this._isLoading.set(false);
        }
      });
  }
}