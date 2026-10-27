import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConferance } from './add-conferance';

describe('AddConferance', () => {
  let component: AddConferance;
  let fixture: ComponentFixture<AddConferance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddConferance],
    }).compileComponents();

    fixture = TestBed.createComponent(AddConferance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
