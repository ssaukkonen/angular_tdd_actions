import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule, BrowserAnimationsModule],
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

  it('should have correct text in html', () => {
    const grid = fixture.debugElement.query(By.css('mat-grid-list')).nativeElement;
    expect(grid.innerText).withContext("Martta\nAge: 3, Color: Gray\nPaavo\nAge: 3, Color: Orange");
  });

  it('should filter list when new filter matches', () => {
    expect(component.filteredCatsList).toEqual(component.catDisplayList);
    component.filterResults("Martta");
    expect(component.filteredCatsList).not.toEqual(component.catDisplayList);
  });

  it('should filter html when new filter clicked', () => {
    const grid = fixture.debugElement.query(By.css('mat-grid-list')).nativeElement;
    expect(grid.innerText).withContext("Martta\nAge: 3, Color: Gray\nPaavo\nAge: 3, Color: Orange");
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = "Martta";
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler("click");
    fixture.detectChanges();
    const gridAfter = fixture.debugElement.query(By.css('mat-grid-list')).nativeElement;
    expect(gridAfter.innerText).not.withContext("Martta\nAge: 3, Color: Gray\nPaavo\nAge: 3, Color: Orange");
    expect(gridAfter.innerText).withContext("Martta\nAge: 3, Color: Gray");
  });

  it('should filter html when new filter and enter pressed', () => {
    const grid = fixture.debugElement.query(By.css('mat-grid-list')).nativeElement;
    expect(grid.innerText).withContext("Martta\nAge: 3, Color: Gray\nPaavo\nAge: 3, Color: Orange");
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = "Martta";
    input.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    fixture.detectChanges();
    const gridAfter = fixture.debugElement.query(By.css('mat-grid-list')).nativeElement;
    expect(gridAfter.innerText).not.withContext("Martta\nAge: 3, Color: Gray\nPaavo\nAge: 3, Color: Orange");
    expect(gridAfter.innerText).withContext("Martta\nAge: 3, Color: Gray");
  });

});
