import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Vote-Vault-Website'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Vote-Vault-Website');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Vote-Vault-Website app is running!');
  });
});


showGenderInfo(){
  this.div0=false;
  this.div1=true;
  this.div2=false;
  this.div3=false
}

showAgeInfo(){
  this.div0=false;
  this.div2=true;
  this.div1=false;
  this.div3=false
}

showProvinceInfo(){
  this.div0=false;
  this.div3=true;
  this.div2=false;
  this.div1=false
}