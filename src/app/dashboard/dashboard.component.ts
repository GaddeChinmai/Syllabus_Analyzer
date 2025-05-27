import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressBarModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: any = null;
  courses: any[] = [];
  notifications: string[] = [];
  materials: any[] = [];
  aiPredictions: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      console.log('Loaded user from storage:', this.user);
      if (this.user && this.user.userId) {
        this.fetchDashboardData(this.user.userId);
      } else {
        this.user = null;
      }
    } else {
      this.user = null;
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  fetchDashboardData(userId: number) {
    this.http.get(`http://localhost:9099/api/dashboard/${userId}`).subscribe({
      next: (data: any) => {
        console.log('Dashboard API response:', data);

        this.courses = data.courses || [];
        this.notifications = data.notifications || [];
        this.materials = data.materials || [];
        this.aiPredictions = data.aiPredictions || [];

        // Optional: update progress/role etc. if backend returns updated user data
        this.user.overallProgress = data.overallProgress;
        this.user.role = data.role;
      },
      error: (err) => {
        console.error('Failed to load dashboard data', err);
      },
    });
  }

  getCourseProgress(course: any) {
    if (!course.totalTopics || course.totalTopics === 0) return 0;
    return (course.topicsCompleted / course.totalTopics) * 100;
  }
}
