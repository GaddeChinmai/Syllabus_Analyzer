import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
})
export class TopnavComponent implements OnInit {
  isLoggedIn = false;

  @Output() navItemClicked = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.isLoggedIn = !!localStorage.getItem('loggedInUser');
    }
  }

  handleTopNavClick(componentName: string): void {
    if (componentName === 'logout') {
      this.isLoggedIn = false;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('loggedInUser');
      }
      this.router.navigate(['/login']); // Navigate to login page after logout
    } else if (componentName === 'login') {
      this.isLoggedIn = true;
      this.router.navigate(['/login']); // Navigate to login page
    } else if (componentName === 'home') {
      this.router.navigate(['/home']); // Navigate home
    } else if (componentName === 'notifications') {
      this.router.navigate(['/notifications']);
    } else if (componentName === 'profile') {
      this.router.navigate(['/profile']);
    } else {
      // Default route navigation (optional)
      this.router.navigate(['/' + componentName]);
    }

    this.navItemClicked.emit(componentName);
  }
  logout() {
  this.isLoggedIn = false;
  if (typeof window !== 'undefined') {
    localStorage.removeItem('loggedInUser');
  }
  this.router.navigate(['/login']);
  this.navItemClicked.emit('logout');
}

}
