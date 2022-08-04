import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { BallotPage } from './ballot.page';


describe('BallotPage', () => {
  let component: BallotPage;
  let fixture: ComponentFixture<BallotPage>;

  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
  });


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([]),
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore())]
    }).compileComponents();

    fixture = TestBed.createComponent(BallotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  console.log('BALLOT');
  });

  it('should have a ballot1 class member', () => {
    expect(component.ballot1).toEqual(jasmine.any(Object));
  });

  it('should have a ballot2 class member', () => {
    expect(component.ballot2).toEqual(jasmine.any(Object));
  });

  it('should have a ballot3 class member', () => {
    expect(component.ballot3).toEqual(jasmine.any(Object));
  });

  it('should have a slideIndex class member', () => {
    expect(component.slideIndex).toEqual(jasmine.any(Number));
  });

  it('should have a selected class member', () => {
    expect(component.selected).toEqual(jasmine.any(Object));
  });

  it('should have custom timeout', () => {
    console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL); //prints 999999
  });

});
