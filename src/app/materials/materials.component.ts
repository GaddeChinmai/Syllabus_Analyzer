import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent {
  materials = [
    {
      name: 'Data Structures',
      youtube: 'https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU',
      w3schools: 'https://www.w3schools.com/dsa/index.php',
      geeksforgeeks: 'https://www.geeksforgeeks.org/data-structures/',
      type: 'Course',
      description: 'Study of data structures like arrays, linked lists, trees, graphs.'
    },
    {
      name: 'Algorithms',
      youtube: 'https://www.youtube.com/playlist?list=PLdo5W4Nhv31aBrJE1WS4MR9LRfbmZrAQu',
      w3schools: 'https://www.w3schools.com/dsa/dsa_algorithms.php',
      geeksforgeeks: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/',
      type: 'Course',
      description: 'Algorithm design and analysis techniques.'
    },
    {
      name: 'Operating Systems',
      youtube: 'https://www.youtube.com/playlist?list=PLdo5W4Nhv31a5ucW_S1K3-x6ztBRD-PNa',
      w3schools: 'https://www.w3schools.in/operating-system',
      geeksforgeeks: 'https://www.geeksforgeeks.org/operating-systems/',
      type: 'Course',
      description: 'Concepts of operating systems including processes, threads, and scheduling.'
    },
    {
      name: 'Database Systems',
      youtube: 'https://www.youtube.com/playlist?list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc',
      w3schools: 'https://www.w3schools.com/sql/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/dbms/',
      type: 'Course',
      description: 'Relational databases and SQL queries.'
    },
    {
      name: 'Computer Networks',
      youtube: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRj9lCC6wOQmQFg5vYbMhA1D',
      w3schools: 'https://www.w3schools.com/cybersecurity/cybersecurity_network_security.php',
      geeksforgeeks: 'https://www.geeksforgeeks.org/computer-network-tutorials/',
      type: 'Course',
      description: 'Networking concepts and protocols.'
    },
    {
      name: 'Web Technologies',
      youtube: 'https://www.youtube.com/playlist?list=PLqleLpAMfxGYkucA6PHCcEStYwHmo3NdD',
      w3schools: 'https://www.w3schools.com/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/web-technology/',
      type: 'Course',
      description: 'Introduction to HTML, CSS, JavaScript, and web frameworks.'
    },
    // 20 more courses below
    {
      name: 'Machine Learning',
      youtube: 'https://www.youtube.com/playlist?list=PLqYmG7hTraZCDxZ44o4p3N5Anz3lLRVZF',
      w3schools: 'https://www.w3schools.com/python/python_ml_getting_started.asp',
      geeksforgeeks: 'https://www.geeksforgeeks.org/machine-learning/',
      type: 'Course',
      description: 'Basics of machine learning algorithms and applications.'
    },
    {
      name: 'Artificial Intelligence',
      youtube: 'https://www.youtube.com/playlist?list=PLjJh1vlSEYgvyy-wx5joCxJU0Xi1tbcQ1',
      w3schools: 'https://www.w3schools.com/ai/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/artificial-intelligence/',
      type: 'Course',
      description: 'Introduction to AI concepts and techniques.'
    },
    {
      name: 'Cybersecurity',
      youtube: 'https://www.youtube.com/playlist?list=PLBf0hzazHTGMJ6wp2Qb8jpQ1nl8fqw7_T',
      w3schools: 'https://www.w3schools.com/cybersecurity/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/cyber-security-tutorials/',
      type: 'Course',
      description: 'Fundamentals of protecting systems and networks.'
    },
    {
      name: 'Cloud Computing',
      youtube: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4',
      w3schools: 'https://www.w3schools.com/cloud/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/cloud-computing-introduction/',
      type: 'Course',
      description: 'Concepts and services of cloud computing platforms.'
    },
    {
      name: 'Big Data',
      youtube: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt',
      w3schools: 'https://www.w3schools.com/bigdata/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/introduction-to-big-data/',
      type: 'Course',
      description: 'Handling and analyzing large datasets.'
    },
    {
      name: 'Python Programming',
      youtube: 'https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU',
      w3schools: 'https://www.w3schools.com/python/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/python-programming-language/',
      type: 'Course',
      description: 'Learn Python syntax and programming concepts.'
    },
    {
      name: 'Java Programming',
      youtube: 'https://www.youtube.com/playlist?list=PLFE2CE09D83EE3E28',
      w3schools: 'https://www.w3schools.com/java/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/java/',
      type: 'Course',
      description: 'Comprehensive guide to Java programming language.'
    },
    {
      name: 'C++ Programming',
      youtube: 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ',
      w3schools: 'https://www.w3schools.com/cpp/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/c-plus-plus/',
      type: 'Course',
      description: 'Basics and advanced topics in C++.'
    },
    {
      name: 'Data Science',
      youtube: 'https://www.youtube.com/playlist?list=PLZyvi_9gamL-EE3zQJbU5NqI6p-q94F7v',
      w3schools: 'https://www.w3schools.com/datascience/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/data-science/',
      type: 'Course',
      description: 'Data analysis, visualization, and statistical techniques.'
    },
    {
      name: 'Software Engineering',
      youtube: 'https://www.youtube.com/playlist?list=PLQf-KTSY7y3_Wy2zB9-0x-4h6Lt09MZ8E',
      w3schools: 'https://www.w3schools.com/software/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/software-engineering/',
      type: 'Course',
      description: 'Principles and practices of software development.'
    },
    {
      name: 'Mobile App Development',
      youtube: 'https://www.youtube.com/playlist?list=PLgCYzUzKIBE8TUo3tQ6UR2QY3ZQ5t4T1O',
      w3schools: 'https://www.w3schools.com/mobile/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/mobile-application-development/',
      type: 'Course',
      description: 'Building apps for Android and iOS platforms.'
    },
    {
      name: 'ReactJS',
      youtube: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX',
      w3schools: 'https://reactjs.org/tutorial/tutorial.html',
      geeksforgeeks: 'https://www.geeksforgeeks.org/reactjs-tutorial/',
      type: 'Course',
      description: 'Frontend development with ReactJS.'
    },
    {
      name: 'Angular',
      youtube: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d',
      w3schools: 'https://www.w3schools.com/angular/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/angular-tutorial/',
      type: 'Course',
      description: 'Frontend framework for building web apps.'
    },
    {
      name: 'Node.js',
      youtube: 'https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE',
      w3schools: 'https://www.w3schools.com/nodejs/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/node-js/',
      type: 'Course',
      description: 'Server-side JavaScript runtime environment.'
    },
    {
      name: 'Docker',
      youtube: 'https://www.youtube.com/playlist?list=PL8rfsCpe7l4fbtp_dhc2v-fcL4PzlgzG1',
      w3schools: 'https://www.w3schools.com/whatis/whatis_docker.asp',
      geeksforgeeks: 'https://www.geeksforgeeks.org/docker-introduction/',
      type: 'Course',
      description: 'Containerization and deployment tools.'
    },
    {
      name: 'DevOps',
      youtube: 'https://www.youtube.com/playlist?list=PLkKQ6f1uJ1zBvUWT3qJx9NxfqfjOY5J4W',
      w3schools: 'https://www.w3schools.com/devops/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/devops-tutorial/',
      type: 'Course',
      description: 'Development and operations integration.'
    },
    {
      name: 'Blockchain',
      youtube: 'https://www.youtube.com/playlist?list=PLS5SEs8ZftgVfN0MR3ONv8k4bpr37Dzf6',
      w3schools: 'https://www.w3schools.com/blockchain/',
      geeksforgeeks: 'https://www.geeksforgeeks.org/blockchain/',
      type: 'Course',
      description: 'Distributed ledger technologies and cryptocurrencies.'
    }
  ];
}
