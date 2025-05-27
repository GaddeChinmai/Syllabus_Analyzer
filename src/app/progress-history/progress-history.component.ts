import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './progress-history.component.html',
  styleUrls: ['./progress-history.component.css']
})
export class ProgressHistoryComponent {
  progressHistory: string[] = [];
  newProgress: string = '';

  maxEntries = 20;

  addProgress() {
    const trimmed = this.newProgress.trim();
    if (trimmed.length > 0) {
      this.progressHistory.unshift(trimmed);
      this.newProgress = '';
      if (this.progressHistory.length > this.maxEntries) {
        this.progressHistory.pop();
      }
    }
  }

  get progressPercent(): number {
    return (this.progressHistory.length / this.maxEntries) * 100;
  }

  // Circle circumference = 2 * PI * radius
  radius = 70;
  circumference = 2 * Math.PI * this.radius;

  get strokeDashoffset(): number {
    return this.circumference * (1 - this.progressPercent / 100);
  }
}
