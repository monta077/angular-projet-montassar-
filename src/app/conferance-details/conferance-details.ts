import { Component, OnInit, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConferanceService } from '../conferance-service';
import { Conferance } from '../models/conferance';

@Component({
  selector: 'app-conferance-details',
  imports: [RouterLink],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails implements OnInit {
  private conferanceService = inject(ConferanceService);

  // récupéré depuis la route details/:id (withComponentInputBinding)
  id = input.required<string>();

  conferance = signal<Conferance | null>(null);

  ngOnInit(): void {
    // GET by id
    this.conferanceService.getConferanceById(+this.id()).subscribe({
      next: (data) => this.conferance.set(data),
      error: (err) => console.error('Conférence introuvable', err),
    });
  }
}
