import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification {
  id: number;
  message: string;
  detail: string;   // extra detail shown on hover
  type: 'success' | 'error' | 'info' | 'warning';
  read: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];

  ngOnInit() {
    this.notifications = [
      {
        id: 1,
        message: "Syllabus is pending",
        detail: "You have topics pending completion. Please complete soon.",
        type: 'warning',
        read: false,
        createdAt: new Date()
      },
      {
        id: 2,
        message: "Syllabus finished successfully",
        detail: "Congratulations! You have completed the syllabus.",
        type: 'success',
        read: true,
        createdAt: new Date(Date.now() - 3600 * 1000)
      },
      {
        id: 3,
        message: "Last date approaching",
        detail: "Reminder: The syllabus completion deadline is near.",
        type: 'error',
        read: false,
        createdAt: new Date(Date.now() - 7200 * 1000)
      }
    ];
  }

  markAsRead(id: number) {
    const notif = this.notifications.find(n => n.id === id);
    if (notif) notif.read = true;
  }

  getIcon(type: string): string {
    switch(type) {
      case 'success': return 'fas fa-check-circle';
      case 'error': return 'fas fa-exclamation-circle';
      case 'warning': return 'fas fa-exclamation-triangle';
      case 'info': return 'fas fa-info-circle';
      default: return 'fas fa-bell';
    }
  }
}