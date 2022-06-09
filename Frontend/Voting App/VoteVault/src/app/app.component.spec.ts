import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { RouterTestingModule } from '@angular/router/testing';
import { Firestore } from 'firebase/firestore';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

describe('AppComponent', () => {


  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [     provideFirestore(() => getFirestore()),
        RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
