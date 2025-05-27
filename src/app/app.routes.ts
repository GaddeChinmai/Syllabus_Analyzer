import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'courses',
    loadComponent: () => import('./courses/courses.component').then(m => m.CoursesComponent)
  },
  {
    path: 'syllabus',
    loadComponent: () => import('./syllabus-topics/syllabus-topics.component').then(m => m.SyllabusTopicsComponent)
  },
  {
    path: 'materials',
    loadComponent: () => import('./materials/materials.component').then(m => m.MaterialsComponent)
  },
  {
    path: 'user-progress',
    loadComponent: () => import('./user-progress/user-progress.component').then(m => m.UserProgressComponent)
  },
  {
    path: 'ai-predictions',
    loadComponent: () => import('./aipredictions/aipredictions.component').then(m => m.AipredictionsComponent)
  },
  {
    path: 'progress-history',
    loadComponent: () => import('./progress-history/progress-history.component').then(m => m.ProgressHistoryComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./notifications/notifications.component').then(m => m.NotificationsComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },

  { path: '**', redirectTo: 'home' }
];
