import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortfolioData } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioAdapterService {
  private readonly http = inject(HttpClient);
  // URL relativa a la carpeta public
  private readonly DATA_URL = '/data/portfolio.json';

  getPortfolioData(): Observable<PortfolioData> {
    return this.http.get<PortfolioData>(this.DATA_URL);
  }
}