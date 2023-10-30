import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form label', () => {
    const title = fixture.debugElement.query(By.css('mat-label')).nativeElement;
    expect(title.innerHTML).toContain('Filter by cat name');
  });

  it('should have a form button', () => {
    const title = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(title.innerHTML).toBeTruthy;
  });
});
