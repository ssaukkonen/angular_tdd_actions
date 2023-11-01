import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { ActivatedRoute } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let detailsDe: DebugElement;
  let detailsEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ DetailsComponent ],
      providers: [{ provide: ActivatedRoute,  
        useValue: 
         {
          snapshot: {
                  params: {id: 0}
                     }
         }
     }],
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('with new routing it should show information in html', async () => {
    detailsDe = fixture.debugElement.query(By.css('.cat-card-max'));
    detailsEl = detailsDe.nativeElement;
    expect(detailsEl.innerHTML).withContext("Martta\nAge: 3, Color: Gray\nMartta likes to play with feathers and she likes to eat dry cat food.\nHome");
  });
});
