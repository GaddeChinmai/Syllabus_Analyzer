import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Course {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-user-progress',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-progress.component.html',
  styleUrls: ['./user-progress.component.css']
})
export class UserProgressComponent {
  courses: Course[] = [
    { id: 'CSE101', name: 'Data Structures', description: 'Study of data structures.', completed: false },
    { id: 'CSE102', name: 'Algorithms', description: 'Algorithm design and analysis.', completed: false },
    { id: 'CSE103', name: 'Operating Systems', description: 'Introduction to OS concepts.', completed: false },
    { id: 'CSE104', name: 'Database Systems', description: 'Relational databases and SQL.', completed: false },
    { id: 'CSE105', name: 'Computer Networks', description: 'Networking basics and protocols.', completed: false },
    { id: 'CSE106', name: 'Software Engineering', description: 'Software development life cycle.', completed: false },
    { id: 'CSE107', name: 'Artificial Intelligence', description: 'AI concepts and techniques.', completed: false },
    { id: 'CSE108', name: 'Machine Learning', description: 'ML algorithms and applications.', completed: false },
    { id: 'CSE109', name: 'Cyber Security', description: 'Security principles and practices.', completed: false },
    { id: 'CSE110', name: 'Computer Architecture', description: 'Computer hardware design.', completed: false },
    { id: 'CSE111', name: 'Theory of Computation', description: 'Automata theory and formal languages.', completed: false },
    { id: 'CSE112', name: 'Compiler Design', description: 'Compilation techniques and tools.', completed: false },
    { id: 'CSE113', name: 'Parallel Computing', description: 'Concurrent algorithms and architectures.', completed: false },
    { id: 'CSE114', name: 'Embedded Systems', description: 'Microcontrollers and embedded programming.', completed: false },
    { id: 'CSE115', name: 'Digital Logic Design', description: 'Boolean algebra and circuits.', completed: false },
    { id: 'CSE116', name: 'Cloud Computing', description: 'Cloud services and architectures.', completed: false },
    { id: 'CSE117', name: 'Big Data Analytics', description: 'Techniques for analyzing big data.', completed: false },
    { id: 'CSE118', name: 'Natural Language Processing', description: 'Computational linguistics.', completed: false },
    { id: 'CSE119', name: 'Human-Computer Interaction', description: 'Designing user interfaces.', completed: false },
    { id: 'CSE120', name: 'Mobile App Development', description: 'Apps for Android and iOS.', completed: false },
    { id: 'CSE121', name: 'Information Retrieval', description: 'Search engines and indexing.', completed: false },
    { id: 'CSE122', name: 'Computer Graphics', description: 'Rendering and visualization.', completed: false },
    { id: 'CSE123', name: 'Cryptography', description: 'Encryption and data security.', completed: false },
    { id: 'CSE124', name: 'Distributed Systems', description: 'Systems across multiple computers.', completed: false },
    { id: 'CSE125', name: 'Software Testing', description: 'Testing methodologies.', completed: false },
    { id: 'CSE126', name: 'Data Mining', description: 'Extracting patterns from data.', completed: false },
    { id: 'CSE127', name: 'Artificial Neural Networks', description: 'Deep learning and neural nets.', completed: false },
    { id: 'CSE128', name: 'Robotics', description: 'Robotic systems and programming.', completed: false },
    { id: 'CSE129', name: 'Computer Vision', description: 'Image processing and analysis.', completed: false },
    { id: 'CSE130', name: 'Web Technologies', description: 'Web development basics.', completed: false }
  ];

  get completedCount(): number {
    return this.courses.filter(c => c.completed).length;
  }

  get progressPercent(): number {
    return (this.completedCount / this.courses.length) * 100;
  }
}
