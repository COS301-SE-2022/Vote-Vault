import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoPageComponent } from './howto-page.component';

describe('HowtoPageComponent', () => {
  let component: HowtoPageComponent;
  let fixture: ComponentFixture<HowtoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
