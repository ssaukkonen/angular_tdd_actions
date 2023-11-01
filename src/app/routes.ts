import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'CATS'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Cat details'
    }
  ];
  
  export default routeConfig;