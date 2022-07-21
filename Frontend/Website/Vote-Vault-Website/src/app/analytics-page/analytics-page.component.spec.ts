import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsPageComponent } from './analytics-page.component';

describe('AnalyticsPageComponent', () => {
  let component: AnalyticsPageComponent;
  let fixture: ComponentFixture<AnalyticsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display gender dist', () => {
    component.showGenderInfo();

    expect(component.div0).toBe(false);
    expect(component.div1).toBe(true);
    expect(component.div2).toBe(false);
    expect(component.div3).toBe(false);
  });

  it('should display age dist', () => {
    component.showAgeInfo();

    expect(component.div0).toBe(false);
    expect(component.div1).toBe(false);
    expect(component.div2).toBe(true);
    expect(component.div3).toBe(false);
  });

  it('should display provincial dist', () => {
    component.showProvinceInfo();

    expect(component.div0).toBe(false);
    expect(component.div1).toBe(false);
    expect(component.div2).toBe(false);
    expect(component.div3).toBe(true);
  });
});


