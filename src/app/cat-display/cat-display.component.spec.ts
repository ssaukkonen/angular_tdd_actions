import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDisplayComponent } from './cat-display.component';

describe('CatDisplayComponent', () => {
  let component: CatDisplayComponent;
  let fixture: ComponentFixture<CatDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CatDisplayComponent]
    });
    fixture = TestBed.createComponent(CatDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
