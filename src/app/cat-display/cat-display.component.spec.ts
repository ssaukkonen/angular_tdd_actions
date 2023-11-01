import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatDisplayComponent } from './cat-display.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CatDisplay } from '../catdisplay';
import { HomeComponent } from '../home/home.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('CatDisplayComponent', () => {
  let component: CatDisplayComponent;
  let fixture: ComponentFixture<CatDisplayComponent>;
  let catDisplayDe: DebugElement;
  let catDisplayEl: HTMLElement;
  let expectedCatDisplay: CatDisplay;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CatDisplayComponent, HomeComponent, RouterTestingModule]
    });
    fixture = TestBed.createComponent(CatDisplayComponent);
    component = fixture.componentInstance;
    expectedCatDisplay = {id: 0, name: "TestCat", color: "Red", age: 2, photo: "localhost", details: "text"};
    component.catDisplay = expectedCatDisplay;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('with new input it component should be updated', () => {
    const expectedName = expectedCatDisplay.name;
    const expectedColor = expectedCatDisplay.color;
    const expectedAge = expectedCatDisplay.age;
    const expectedPhoto = expectedCatDisplay.photo;
    expect(component.catDisplay.name).toEqual(expectedName);
    expect(component.catDisplay.color).toEqual(expectedColor);
    expect(component.catDisplay.age).toEqual(expectedAge);
    expect(component.catDisplay.photo).toEqual(expectedPhoto);
  });

  it('with new input it should show information in html', () => {
    catDisplayDe = fixture.debugElement.query(By.css('.cat-card'));
    catDisplayEl = catDisplayDe.nativeElement;
    const expectedName = expectedCatDisplay.name;
    const expectedColor = expectedCatDisplay.color;
    const expectedAge = expectedCatDisplay.age.toString();
    const expectedPhoto = expectedCatDisplay.photo;
    const expectedDetails = expectedCatDisplay.details;
    const expectedText = "More information about TestCat"
    expect(catDisplayEl.innerHTML).withContext(expectedName);
    expect(catDisplayEl.innerHTML).withContext(expectedColor);
    expect(catDisplayEl.innerHTML).withContext(expectedAge);
    expect(catDisplayEl.innerHTML).withContext(expectedPhoto);
    expect(catDisplayEl.innerHTML).withContext(expectedDetails);
    expect(catDisplayEl.innerHTML).withContext(expectedText);
  });
});
