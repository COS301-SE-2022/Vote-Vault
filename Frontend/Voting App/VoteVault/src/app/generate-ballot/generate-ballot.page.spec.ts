import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { GenerateBallotPage } from './generate-ballot.page';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

describe('GenerateBallotPage', () => {
  let component: GenerateBallotPage;
  let fixture: ComponentFixture<GenerateBallotPage>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBallotPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([]),
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore())
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateBallotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  console.log('GENERATE BALLOT');
  });

  it('should have a slideIndex class member', () => {
    expect(component.slideIndex).toEqual(jasmine.any(Number));
  });

  it('should have a optionInput class member', () => {
    expect(component.optionInput).toEqual(jasmine.any(String));
  });

  it('should have a name class member', () => {
    expect(component.name).toEqual(jasmine.any(String));
  });

  it('should have a surname class member', () => {
    expect(component.surname).toEqual(jasmine.any(String));
  });

  it('should have a idNum class member', () => {
    expect(component.idNum).toEqual(jasmine.any(String));
  });

  it('should have a ballotName class member', () => {
    expect(component.ballotName).toEqual(jasmine.any(String));
  });

  it('should have a ballotName1 class member', () => {
    expect(component.ballotName1).toEqual(jasmine.any(String));
  });

  it('should have a ballotName2 class member', () => {
    expect(component.ballotName2).toEqual(jasmine.any(String));
  });

  it('should have a ballot1Options class member', () => {
    expect(component.ballot1Options).toEqual(jasmine.any(Object));
  });

  it('should have a ballot2Options class member', () => {
    expect(component.ballot2Options).toEqual(jasmine.any(Object));
  });

  it('should have a ballot3Options class member', () => {
    expect(component.ballot3Options).toEqual(jasmine.any(Object));
  });

  it('should update name model', () => {
    fixture.detectChanges();
    component.name = 'FAKE NAME';
    component.name = 'OTHER FAKE NAME';
    component.ngOnInit();
    fixture.whenStable().then(() => {
    fixture.detectChanges();
     expect(component.name).toEqual('OTHER FAKE NAME');
  });
  });

  it('should render Candidate List in ion-card', () => {
    const fixture = TestBed.createComponent(GenerateBallotPage);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ion-card').textContent).toContain('Candidate Details');
  });
});
