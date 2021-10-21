import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// HIPAA major components
import { HipaaTableComponent } from './hipaa-table/hipaa-table.component';
import { HipaaTableNzComponent } from './hipaa-table-nz/hipaa-table-nz.component';

const routes: Routes = [
  { path: '', redirectTo: '/bootstrap', pathMatch: 'full' },
  { path: 'bootstrap', component: HipaaTableComponent },
  { path: 'zorro', component: HipaaTableNzComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
