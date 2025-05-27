import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService, User } from '../auth.service';
import { CommonModule } from '@angular/common';

interface Course {
  id: string;
  name: string;
  description: string;
  selected: boolean;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  imports:[CommonModule]
})
export class CoursesComponent implements OnInit, OnDestroy {
  private userSubscription?: Subscription;

  isLoggedIn = false;
  errorMessage = '';
  user: User | null = null;

  courses: Course[] = [
    { id: 'CSE101', name: 'Data Structures', description: 'Study of data structures.', selected: false },
    { id: 'CSE102', name: 'Algorithms', description: 'Algorithm design and analysis.', selected: false },
    { id: 'CSE103', name: 'Operating Systems', description: 'Introduction to OS concepts.', selected: false },
    { id: 'CSE104', name: 'Database Systems', description: 'Relational databases and SQL.', selected: false },
    { id: 'CSE105', name: 'Computer Networks', description: 'Networking basics and protocols.', selected: false },
    { id: 'CSE106', name: 'Software Engineering', description: 'Software development life cycle.', selected: false },
    { id: 'CSE107', name: 'Artificial Intelligence', description: 'AI concepts and techniques.', selected: false },
    { id: 'CSE108', name: 'Machine Learning', description: 'ML algorithms and applications.', selected: false },
    { id: 'CSE109', name: 'Cyber Security', description: 'Security principles and practices.', selected: false },
    { id: 'CSE110', name: 'Computer Architecture', description: 'Computer hardware design.', selected: false },
    { id: 'CSE111', name: 'Theory of Computation', description: 'Automata theory and formal languages.', selected: false },
    { id: 'CSE112', name: 'Compiler Design', description: 'Compilation techniques and tools.', selected: false },
    { id: 'CSE113', name: 'Parallel Computing', description: 'Concurrent algorithms and architectures.', selected: false },
    { id: 'CSE114', name: 'Embedded Systems', description: 'Microcontrollers and embedded programming.', selected: false },
    { id: 'CSE115', name: 'Digital Logic Design', description: 'Boolean algebra and circuits.', selected: false },
    { id: 'CSE116', name: 'Cloud Computing', description: 'Cloud services and architectures.', selected: false },
    { id: 'CSE117', name: 'Big Data Analytics', description: 'Techniques for analyzing big data.', selected: false },
    { id: 'CSE118', name: 'Natural Language Processing', description: 'Computational linguistics.', selected: false },
    { id: 'CSE119', name: 'Human-Computer Interaction', description: 'Designing user interfaces.', selected: false },
    { id: 'CSE120', name: 'Mobile App Development', description: 'Apps for Android and iOS.', selected: false },
    { id: 'CSE121', name: 'Information Retrieval', description: 'Search engines and indexing.', selected: false },
    { id: 'CSE122', name: 'Computer Graphics', description: 'Rendering and visualization.', selected: false },
    { id: 'CSE123', name: 'Cryptography', description: 'Encryption and data security.', selected: false },
    { id: 'CSE124', name: 'Distributed Systems', description: 'Systems across multiple computers.', selected: false },
    { id: 'CSE125', name: 'Software Testing', description: 'Testing methodologies.', selected: false },
    { id: 'CSE126', name: 'Data Mining', description: 'Extracting patterns from data.', selected: false },
    { id: 'CSE127', name: 'Artificial Neural Networks', description: 'Deep learning and neural nets.', selected: false },
    { id: 'CSE128', name: 'Robotics', description: 'Robotic systems and programming.', selected: false },
    { id: 'CSE129', name: 'Computer Vision', description: 'Image processing and analysis.', selected: false },
    { id: 'CSE130', name: 'Web Technologies', description: 'Web development basics.', selected: false },
    { id: 'CSE131', name: 'Software Project Management', description: 'Managing software projects.', selected: false },
    { id: 'CSE132', name: 'Compiler Optimization', description: 'Improving compiler performance.', selected: false },
    { id: 'CSE133', name: 'Wireless Networks', description: 'Mobile and wireless communication.', selected: false },
    { id: 'CSE134', name: 'Information Theory', description: 'Data compression and transmission.', selected: false },
    { id: 'CSE135', name: 'Game Development', description: 'Design and development of games.', selected: false },
    { id: 'CSE136', name: 'Operating System Security', description: 'Securing OS platforms.', selected: false },
    { id: 'CSE137', name: 'Blockchain Technology', description: 'Distributed ledgers and cryptocurrencies.', selected: false },
    { id: 'CSE138', name: 'Virtual Reality', description: 'Immersive technology systems.', selected: false },
    { id: 'CSE139', name: 'Compiler Theory', description: 'Advanced compiler concepts.', selected: false },
    { id: 'CSE140', name: 'Data Visualization', description: 'Visual representation of data.', selected: false },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => {
      this.user = user;
      this.isLoggedIn = !!user;
      this.loadSelections();
    });
  }

  ngOnDestroy() {
    this.userSubscription?.unsubscribe();
  }

  toggleSelection(course: Course) {
    course.selected = !course.selected;
  }

  saveSelections() {
    if (!this.isLoggedIn || !this.user) {
      this.errorMessage = 'Please log in first.';
      return;
    }

    const selectedCourses = this.courses.filter(c => c.selected);
    if (selectedCourses.length === 0) {
      this.errorMessage = 'Please select at least one course.';
      return;
    }

    this.errorMessage = '';
    localStorage.setItem(
      `selectedCourses_${this.user.id}`,
      JSON.stringify(selectedCourses.map(c => c.id))
    );

    alert(`Courses saved for ${this.user.name}!`);
  }

  loadSelections() {
    if (!this.user) return;
    const saved = localStorage.getItem(`selectedCourses_${this.user.id}`);
    if (saved) {
      const savedIds: string[] = JSON.parse(saved);
      this.courses.forEach(course => {
        course.selected = savedIds.includes(course.id);
      });
    }
  }
  get selectedCoursesCount(): number {
  return this.courses.filter(c => c.selected).length;
}
get hasSelectedCourses(): boolean {
  return this.courses.some(course => course.selected);
}

}
