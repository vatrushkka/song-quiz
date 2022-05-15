import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerGuard } from './shared/services/player-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz-page/quiz-page.module').then(m => m.QuizPageModule),
    canActivate: [PlayerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
