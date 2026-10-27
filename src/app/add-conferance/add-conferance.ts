import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConferanceService } from '../conferance-service';
import { Conferance } from '../models/conferance';

@Component({
  selector: 'app-add-conferance',
  imports: [ReactiveFormsModule],
  templateUrl: './add-conferance.html',
  styleUrl: './add-conferance.css',
})
export class AddConferance {
  private fb = inject(FormBuilder);
  private conferanceService = inject(ConferanceService);
  private router = inject(Router);

  //formBuilder
  conferanceForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    location: ['', Validators.required],
    date: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    nbPlaces: [1, [Validators.required, Validators.min(1)]],
  });

  // POST
  addConferance() {
    if (this.conferanceForm.invalid) return;
    const conf: Conferance = this.conferanceForm.getRawValue();
    this.conferanceService.addConferance(conf).subscribe({
      next: () => this.router.navigate(['/list']),
      error: (err) => console.error('Erreur ajout', err),
    });
  }
}
