import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatsService } from '../cats.service';
import { CatDisplay } from '../catdisplay';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ CommonModule, RouterLink, MatCardModule ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  catsService = inject(CatsService);
  catDisplay: CatDisplay | undefined;
  constructor() {
      const catDisplayId = Number(this.route.snapshot.params['id']);
      this.catDisplay = this.catsService.getCatDisplayById(catDisplayId);
  }
}
