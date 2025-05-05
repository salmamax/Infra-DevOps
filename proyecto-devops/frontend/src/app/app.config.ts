import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ✅ Correctamente importado
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // ✅ Optimización de rendimiento
    provideRouter(routes), // ✅ Configuración de rutas
    provideHttpClient() // ✅ HTTP Client para llamadas API
  ]
};
