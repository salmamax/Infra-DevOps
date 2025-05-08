import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Dog {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);
  
  title = 'DogApp';
  dogs: Dog[] = [];
  isLoading = true;
  error: string | null = null;
  newDogName = '';

  ngOnInit(): void {
    this.fetchDogs();
  }

  fetchDogs(): void {
    this.http.get<{ dogs: Dog[] }>('/api/dogs').subscribe({
      next: (response) => {
        this.dogs = response.dogs;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los perros';
        this.isLoading = false;
        console.error('API Error:', err);
      }
    });
  }

  addDog(): void {
    if (!this.newDogName.trim()) return;

    this.http.post('/api/dogs', { name: this.newDogName }).subscribe({
      next: () => {
        this.fetchDogs();
        this.newDogName = '';
      },
      error: (err) => {
        this.error = 'Error al añadir perro';
        console.error('Error:', err);
      }
    });
  }

  trackByDogId(index: number, dog: Dog): number {
    return dog.id;
  }
}
