import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { By } from '@angular/platform-browser';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HomeComponent, MatToolbarModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render text', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const title = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.innerHTML).toContain('Find a cat picture');
  });
});
