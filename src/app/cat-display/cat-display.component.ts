import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatDisplay } from '../catdisplay';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'cat-display',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './cat-display.component.html',
  styleUrls: ['./cat-display.component.css']
})
export class CatDisplayComponent {
  @Input() catDisplay!: CatDisplay;
}
