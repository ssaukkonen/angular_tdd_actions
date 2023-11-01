import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatDisplay } from '../catdisplay';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'cat-display',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, MatButtonModule],
  templateUrl: './cat-display.component.html',
  styleUrls: ['./cat-display.component.scss']
})
export class CatDisplayComponent {
  @Input() catDisplay!: CatDisplay;
}
