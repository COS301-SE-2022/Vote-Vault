import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { HistoryPageComponent } from './history-page.component';

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPageComponent ],
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display 2019 results', () => {
  //   component.get19();

  //   expect(component.currentYear).toEqual(2019);
  // });

  // it('should display 2020 results', () => {
  //   component.get20();

  //   expect(component.currentYear).toEqual(2020);
  // });

  // it('should display 2021 results', () => {
  //   component.get21();

  //   expect(component.currentYear).toEqual(2021);
  // });
});
