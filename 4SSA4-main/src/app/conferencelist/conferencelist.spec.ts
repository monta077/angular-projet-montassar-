import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conferencelist } from './conferencelist';

describe('Conferencelist', () => {
  let component: Conferencelist;
  let fixture: ComponentFixture<Conferencelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conferencelist],
    }).compileComponents();

    fixture = TestBed.createComponent(Conferencelist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
