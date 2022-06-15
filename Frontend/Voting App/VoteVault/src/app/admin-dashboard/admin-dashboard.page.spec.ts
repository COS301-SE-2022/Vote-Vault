import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

import { AdminDashboardPage } from './admin-dashboard.page';

describe('AdminDashboardPage', () => {
  let component: AdminDashboardPage;
  let fixture: ComponentFixture<AdminDashboardPage>;

  beforeAll(waitForAsync(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
  }));

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardPage ],
      imports: [IonicModule.forRoot(),
        RouterModule.forRoot([]),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should have custom timeout', () => {
    console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL); //prints 999999
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an elections class member', () => {
    expect(component.elections).toEqual(jasmine.any(Object));
  });
});
