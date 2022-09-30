import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { PredictionsPageComponent } from './predictions-page.component';

describe('PredictionsPageComponent', () => {
  let component: PredictionsPageComponent;
  let fixture: ComponentFixture<PredictionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionsPageComponent ],
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
