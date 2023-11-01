import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CatDisplayComponent } from '../cat-display/cat-display.component';
import { CatDisplay } from '../catdisplay';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { CatsService } from '../cats.service';

@Component({
  standalone: true,
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, MatIconModule,
    CatDisplayComponent, CommonModule,
    MatGridListModule,
    ]
})
export class HomeComponent {
  catDisplayList: CatDisplay[] =[];
  catsService: CatsService = inject(CatsService)
  constructor() {
    this.catDisplayList = this.catsService.getAllCatDisplays();
  }
}
