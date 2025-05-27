import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Course {
  id: string;
  name: string;
}

interface Topic {
  id: string;
  courseId: string;
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-syllabus-topics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './syllabus-topics.component.html',
  styleUrls: ['./syllabus-topics.component.css'],
})
export class SyllabusTopicsComponent {
  courses: Course[] = [
    { id: 'CSE101', name: 'Data Structures' },
    { id: 'CSE102', name: 'Algorithms' },
    { id: 'CSE103', name: 'Operating Systems' },
    { id: 'CSE104', name: 'Database Systems' },
    { id: 'CSE105', name: 'Computer Networks' },
    { id: 'CSE106', name: 'Software Engineering' },
    { id: 'CSE107', name: 'Artificial Intelligence' },
    { id: 'CSE108', name: 'Machine Learning' },
    { id: 'CSE109', name: 'Cyber Security' },
    { id: 'CSE110', name: 'Computer Architecture' },
    { id: 'CSE111', name: 'Theory of Computation' },
    { id: 'CSE112', name: 'Compiler Design' },
    { id: 'CSE113', name: 'Parallel Computing' },
    { id: 'CSE114', name: 'Embedded Systems' },
    { id: 'CSE115', name: 'Digital Logic Design' },
    { id: 'CSE116', name: 'Cloud Computing' },
    { id: 'CSE117', name: 'Big Data Analytics' },
    { id: 'CSE118', name: 'Natural Language Processing' },
    { id: 'CSE119', name: 'Human-Computer Interaction' },
    { id: 'CSE120', name: 'Mobile App Development' },
    { id: 'CSE121', name: 'Information Retrieval' },
    { id: 'CSE122', name: 'Computer Graphics' },
    { id: 'CSE123', name: 'Cryptography' },
    { id: 'CSE124', name: 'Distributed Systems' },
    { id: 'CSE125', name: 'Software Testing' },
    { id: 'CSE126', name: 'Data Mining' },
    { id: 'CSE127', name: 'Artificial Neural Networks' },
    { id: 'CSE128', name: 'Robotics' },
    { id: 'CSE129', name: 'Computer Vision' },
    { id: 'CSE130', name: 'Web Technologies' },
    { id: 'CSE131', name: 'Software Project Management' },
    { id: 'CSE132', name: 'Compiler Optimization' },
    { id: 'CSE133', name: 'Wireless Networks' },
    { id: 'CSE134', name: 'Information Theory' },
    { id: 'CSE135', name: 'Game Development' },
    { id: 'CSE136', name: 'Operating System Security' },
    { id: 'CSE137', name: 'Blockchain Technology' },
    { id: 'CSE138', name: 'Virtual Reality' },
    { id: 'CSE139', name: 'Compiler Theory' },
    { id: 'CSE140', name: 'Data Visualization' },
  ];

 topics: Topic[] = [
  // CSE101 - Data Structures
  { id: 'T1', courseId: 'CSE101', title: 'Arrays & Linked Lists', description: 'Basic data structures', completed: false },
  { id: 'T2', courseId: 'CSE101', title: 'Stacks & Queues', description: 'LIFO and FIFO structures', completed: false },
  { id: 'T3', courseId: 'CSE101', title: 'Trees and Graphs', description: 'Hierarchical and networked data', completed: false },

  // CSE102 - Algorithms
  { id: 'T4', courseId: 'CSE102', title: 'Sorting Algorithms', description: 'Bubble, Quick, Merge sorts', completed: false },
  { id: 'T5', courseId: 'CSE102', title: 'Searching Algorithms', description: 'Binary and linear search', completed: false },
  { id: 'T6', courseId: 'CSE102', title: 'Dynamic Programming', description: 'Optimization technique', completed: false },

  // CSE103 - Operating Systems
  { id: 'T7', courseId: 'CSE103', title: 'Processes and Threads', description: 'Concurrency concepts', completed: false },
  { id: 'T8', courseId: 'CSE103', title: 'Memory Management', description: 'Paging and segmentation', completed: false },
  { id: 'T9', courseId: 'CSE103', title: 'File Systems', description: 'Storage organization', completed: false },

  // CSE104 - Database Systems
  { id: 'T10', courseId: 'CSE104', title: 'Relational Model', description: 'Tables and relations', completed: false },
  { id: 'T11', courseId: 'CSE104', title: 'SQL Queries', description: 'CRUD operations', completed: false },
  { id: 'T12', courseId: 'CSE104', title: 'Normalization', description: 'Database design', completed: false },

  // CSE105 - Computer Networks
  { id: 'T13', courseId: 'CSE105', title: 'Network Models', description: 'OSI and TCP/IP', completed: false },
  { id: 'T14', courseId: 'CSE105', title: 'Routing Algorithms', description: 'Finding paths', completed: false },
  { id: 'T15', courseId: 'CSE105', title: 'Network Security', description: 'Protocols and encryption', completed: false },

  // CSE106 - Software Engineering
  { id: 'T16', courseId: 'CSE106', title: 'Software Development Life Cycle', description: 'Phases and methodologies', completed: false },
  { id: 'T17', courseId: 'CSE106', title: 'Requirement Analysis', description: 'Gathering user needs', completed: false },
  { id: 'T18', courseId: 'CSE106', title: 'Testing Strategies', description: 'Unit and integration testing', completed: false },

  // CSE107 - Artificial Intelligence
  { id: 'T19', courseId: 'CSE107', title: 'Search Algorithms', description: 'Uninformed and informed search', completed: false },
  { id: 'T20', courseId: 'CSE107', title: 'Knowledge Representation', description: 'Logic and semantic networks', completed: false },
  { id: 'T21', courseId: 'CSE107', title: 'Machine Learning Basics', description: 'Supervised and unsupervised learning', completed: false },

  // CSE108 - Machine Learning
  { id: 'T22', courseId: 'CSE108', title: 'Regression', description: 'Linear and logistic regression', completed: false },
  { id: 'T23', courseId: 'CSE108', title: 'Classification Algorithms', description: 'Decision trees, SVM', completed: false },
  { id: 'T24', courseId: 'CSE108', title: 'Neural Networks', description: 'Deep learning concepts', completed: false },

  // CSE109 - Cyber Security
  { id: 'T25', courseId: 'CSE109', title: 'Cryptography', description: 'Encryption basics', completed: false },
  { id: 'T26', courseId: 'CSE109', title: 'Network Security', description: 'Firewalls and VPNs', completed: false },
  { id: 'T27', courseId: 'CSE109', title: 'Ethical Hacking', description: 'Penetration testing techniques', completed: false },

  // CSE110 - Computer Architecture
  { id: 'T28', courseId: 'CSE110', title: 'Processor Design', description: 'ALU, registers, pipelines', completed: false },
  { id: 'T29', courseId: 'CSE110', title: 'Memory Hierarchy', description: 'Cache, RAM, virtual memory', completed: false },
  { id: 'T30', courseId: 'CSE110', title: 'Input/Output Systems', description: 'I/O devices and buses', completed: false },

  // CSE111 - Theory of Computation
  { id: 'T31', courseId: 'CSE111', title: 'Automata Theory', description: 'Finite automata, pushdown automata', completed: false },
  { id: 'T32', courseId: 'CSE111', title: 'Formal Languages', description: 'Grammar types and language classes', completed: false },
  { id: 'T33', courseId: 'CSE111', title: 'Turing Machines', description: 'Computability models', completed: false },

  // CSE112 - Compiler Design
  { id: 'T34', courseId: 'CSE112', title: 'Lexical Analysis', description: 'Tokenizing source code', completed: false },
  { id: 'T35', courseId: 'CSE112', title: 'Syntax Analysis', description: 'Parsing techniques', completed: false },
  { id: 'T36', courseId: 'CSE112', title: 'Code Generation', description: 'Target code creation', completed: false },

  // CSE113 - Parallel Computing
  { id: 'T37', courseId: 'CSE113', title: 'Parallel Architectures', description: 'Multi-core and distributed systems', completed: false },
  { id: 'T38', courseId: 'CSE113', title: 'Parallel Algorithms', description: 'Design and analysis', completed: false },
  { id: 'T39', courseId: 'CSE113', title: 'Synchronization', description: 'Locks, semaphores, barriers', completed: false },

  // CSE114 - Embedded Systems
  { id: 'T40', courseId: 'CSE114', title: 'Microcontrollers', description: 'Architecture and programming', completed: false },
  { id: 'T41', courseId: 'CSE114', title: 'Real-Time Systems', description: 'Scheduling and interrupts', completed: false },
  { id: 'T42', courseId: 'CSE114', title: 'Embedded Programming', description: 'C and assembly languages', completed: false },

  // CSE115 - Digital Logic Design
  { id: 'T43', courseId: 'CSE115', title: 'Boolean Algebra', description: 'Logic simplification', completed: false },
  { id: 'T44', courseId: 'CSE115', title: 'Combinational Circuits', description: 'Adders, multiplexers', completed: false },
  { id: 'T45', courseId: 'CSE115', title: 'Sequential Circuits', description: 'Flip-flops, counters', completed: false },

  // CSE116 - Cloud Computing
  { id: 'T46', courseId: 'CSE116', title: 'Cloud Models', description: 'IaaS, PaaS, SaaS', completed: false },
  { id: 'T47', courseId: 'CSE116', title: 'Virtualization', description: 'Hypervisors and containers', completed: false },
  { id: 'T48', courseId: 'CSE116', title: 'Cloud Security', description: 'Risks and mitigation', completed: false },

  // CSE117 - Big Data Analytics
  { id: 'T49', courseId: 'CSE117', title: 'Hadoop Ecosystem', description: 'HDFS, MapReduce', completed: false },
  { id: 'T50', courseId: 'CSE117', title: 'Spark Framework', description: 'In-memory computing', completed: false },
  { id: 'T51', courseId: 'CSE117', title: 'Data Warehousing', description: 'ETL and OLAP', completed: false },

  // CSE118 - Natural Language Processing
  { id: 'T52', courseId: 'CSE118', title: 'Text Processing', description: 'Tokenization and parsing', completed: false },
  { id: 'T53', courseId: 'CSE118', title: 'Language Models', description: 'N-grams, embeddings', completed: false },
  { id: 'T54', courseId: 'CSE118', title: 'Sentiment Analysis', description: 'Opinion mining', completed: false },

  // CSE119 - Human-Computer Interaction
  { id: 'T55', courseId: 'CSE119', title: 'User Interface Design', description: 'Principles and guidelines', completed: false },
  { id: 'T56', courseId: 'CSE119', title: 'Usability Testing', description: 'User feedback methods', completed: false },
  { id: 'T57', courseId: 'CSE119', title: 'Accessibility', description: 'Design for all users', completed: false },

  // CSE120 - Mobile App Development
  { id: 'T58', courseId: 'CSE120', title: 'Android Development', description: 'Activities and layouts', completed: false },
  { id: 'T59', courseId: 'CSE120', title: 'iOS Development', description: 'Swift and UIKit basics', completed: false },
  { id: 'T60', courseId: 'CSE120', title: 'Cross-platform Tools', description: 'Flutter, React Native', completed: false },

  // CSE121 - Information Retrieval
  { id: 'T61', courseId: 'CSE121', title: 'Indexing', description: 'Inverted files and data structures', completed: false },
  { id: 'T62', courseId: 'CSE121', title: 'Ranking Algorithms', description: 'TF-IDF and PageRank', completed: false },
  { id: 'T63', courseId: 'CSE121', title: 'Search Engines', description: 'Architecture and crawling', completed: false },

  // CSE122 - Computer Graphics
  { id: 'T64', courseId: 'CSE122', title: 'Rendering Techniques', description: 'Rasterization and ray tracing', completed: false },
  { id: 'T65', courseId: 'CSE122', title: 'Modeling', description: '3D shapes and transformations', completed: false },
  { id: 'T66', courseId: 'CSE122', title: 'Animation', description: 'Keyframes and interpolation', completed: false },

  // CSE123 - Cryptography
  { id: 'T67', courseId: 'CSE123', title: 'Symmetric Encryption', description: 'AES and DES algorithms', completed: false },
  { id: 'T68', courseId: 'CSE123', title: 'Asymmetric Encryption', description: 'RSA and ECC', completed: false },
  { id: 'T69', courseId: 'CSE123', title: 'Hash Functions', description: 'SHA and MD5', completed: false },

  // CSE124 - Distributed Systems
  { id: 'T70', courseId: 'CSE124', title: 'Distributed Algorithms', description: 'Consensus and coordination', completed: false },
  { id: 'T71', courseId: 'CSE124', title: 'Fault Tolerance', description: 'Replication and recovery', completed: false },
  { id: 'T72', courseId: 'CSE124', title: 'Distributed File Systems', description: 'GFS and HDFS', completed: false },

  // CSE125 - Software Testing
  { id: 'T73', courseId: 'CSE125', title: 'Test Planning', description: 'Test cases and coverage', completed: false },
  { id: 'T74', courseId: 'CSE125', title: 'Automated Testing', description: 'Selenium and unit tests', completed: false },
  { id: 'T75', courseId: 'CSE125', title: 'Performance Testing', description: 'Load and stress tests', completed: false },

  // CSE126 - Data Mining
  { id: 'T76', courseId: 'CSE126', title: 'Association Rules', description: 'Market basket analysis', completed: false },
  { id: 'T77', courseId: 'CSE126', title: 'Clustering', description: 'K-means and hierarchical', completed: false },
  { id: 'T78', courseId: 'CSE126', title: 'Classification', description: 'Decision trees and SVM', completed: false },

  // CSE127 - Artificial Neural Networks
  { id: 'T79', courseId: 'CSE127', title: 'Perceptron Model', description: 'Basic neuron model', completed: false },
  { id: 'T80', courseId: 'CSE127', title: 'Backpropagation', description: 'Training neural networks', completed: false },
  { id: 'T81', courseId: 'CSE127', title: 'Deep Learning', description: 'CNNs and RNNs', completed: false },

  // CSE128 - Robotics
  { id: 'T82', courseId: 'CSE128', title: 'Robot Kinematics', description: 'Movement and position', completed: false },
  { id: 'T83', courseId: 'CSE128', title: 'Sensors and Actuators', description: 'Perception and control', completed: false },
  { id: 'T84', courseId: 'CSE128', title: 'Robot Programming', description: 'ROS basics', completed: false },

  // CSE129 - Computer Vision
  { id: 'T85', courseId: 'CSE129', title: 'Image Processing', description: 'Filtering and enhancement', completed: false },
  { id: 'T86', courseId: 'CSE129', title: 'Feature Extraction', description: 'SIFT and SURF', completed: false },
  { id: 'T87', courseId: 'CSE129', title: 'Object Recognition', description: 'Machine learning techniques', completed: false },

  // CSE130 - Web Technologies
  { id: 'T88', courseId: 'CSE130', title: 'HTML & CSS', description: 'Markup and styling', completed: false },
  { id: 'T89', courseId: 'CSE130', title: 'JavaScript Basics', description: 'DOM manipulation', completed: false },
  { id: 'T90', courseId: 'CSE130', title: 'Frontend Frameworks', description: 'Angular, React basics', completed: false },

  // CSE131 - Software Project Management
  { id: 'T91', courseId: 'CSE131', title: 'Project Planning', description: 'Gantt charts and milestones', completed: false },
  { id: 'T92', courseId: 'CSE131', title: 'Risk Management', description: 'Identification and mitigation', completed: false },
  { id: 'T93', courseId: 'CSE131', title: 'Team Dynamics', description: 'Roles and communication', completed: false },

  // CSE132 - Compiler Optimization
  { id: 'T94', courseId: 'CSE132', title: 'Optimization Techniques', description: 'Loop unrolling, inlining', completed: false },
  { id: 'T95', courseId: 'CSE132', title: 'Intermediate Code', description: 'IR generation and optimization', completed: false },
  { id: 'T96', courseId: 'CSE132', title: 'Register Allocation', description: 'Efficient resource use', completed: false },

  // CSE133 - Wireless Networks
  { id: 'T97', courseId: 'CSE133', title: 'Wireless Standards', description: 'WiFi, Bluetooth basics', completed: false },
  { id: 'T98', courseId: 'CSE133', title: 'Signal Propagation', description: 'Fading and interference', completed: false },
  { id: 'T99', courseId: 'CSE133', title: 'Security in Wireless', description: 'WEP, WPA protocols', completed: false },

  // CSE134 - Information Theory
  { id: 'T100', courseId: 'CSE134', title: 'Entropy and Information', description: 'Measure of uncertainty', completed: false },
  { id: 'T101', courseId: 'CSE134', title: 'Data Compression', description: 'Lossless and lossy', completed: false },
  { id: 'T102', courseId: 'CSE134', title: 'Error Detection', description: 'Parity and CRC', completed: false },

  // CSE135 - Game Development
  { id: 'T103', courseId: 'CSE135', title: 'Game Engines', description: 'Unity and Unreal basics', completed: false },
  { id: 'T104', courseId: 'CSE135', title: 'Game Physics', description: 'Collision detection', completed: false },
  { id: 'T105', courseId: 'CSE135', title: 'Game AI', description: 'Pathfinding and behavior trees', completed: false },

  // CSE136 - Operating System Security
  { id: 'T106', courseId: 'CSE136', title: 'Access Control', description: 'Permissions and policies', completed: false },
  { id: 'T107', courseId: 'CSE136', title: 'Malware Analysis', description: 'Detection and prevention', completed: false },
  { id: 'T108', courseId: 'CSE136', title: 'Security Protocols', description: 'Authentication and authorization', completed: false },

  // CSE137 - Blockchain Technology
  { id: 'T109', courseId: 'CSE137', title: 'Blockchain Basics', description: 'Distributed ledger concepts', completed: false },
  { id: 'T110', courseId: 'CSE137', title: 'Smart Contracts', description: 'Automated agreements', completed: false },
  { id: 'T111', courseId: 'CSE137', title: 'Consensus Mechanisms', description: 'Proof of Work, Stake', completed: false },

  // CSE138 - Virtual Reality
  { id: 'T112', courseId: 'CSE138', title: 'VR Hardware', description: 'Headsets and controllers', completed: false },
  { id: 'T113', courseId: 'CSE138', title: '3D Rendering', description: 'Stereo rendering techniques', completed: false },
  { id: 'T114', courseId: 'CSE138', title: 'User Interaction', description: 'Gesture and voice controls', completed: false },

  // CSE139 - Compiler Theory
  { id: 'T115', courseId: 'CSE139', title: 'Parsing Techniques', description: 'Top-down and bottom-up', completed: false },
  { id: 'T116', courseId: 'CSE139', title: 'Semantic Analysis', description: 'Type checking', completed: false },
  { id: 'T117', courseId: 'CSE139', title: 'Code Optimization', description: 'Improving performance', completed: false },

  // CSE140 - Data Visualization
  { id: 'T118', courseId: 'CSE140', title: 'Visualization Tools', description: 'D3.js and Tableau', completed: false },
  { id: 'T119', courseId: 'CSE140', title: 'Chart Types', description: 'Bar, line, pie charts', completed: false },
  { id: 'T120', courseId: 'CSE140', title: 'Interactive Dashboards', description: 'User-driven data exploration', completed: false },
];


  // Simulated selected courses (in your app, get from actual user selection)
  selectedCourseIds: string[] = this.courses.map(c => c.id); // Here all courses are selected
get groupedTopicsByCourse() {
  return this.selectedCourseIds.map(courseId => {
    const course = this.courses.find(c => c.id === courseId);
    const topics = this.topics.filter(t => t.courseId === courseId);
    return { course, topics };
  }).filter(group => group.course); // Filter out any undefined course if ID not found
}


toggleTopicCompletion(topic: Topic) {
  topic.completed = !topic.completed;
}

saveTopics() {
    // Example: you might want to send updated topics to a backend API
    // For demo, just log to console
    const allTopics = this.groupedTopicsByCourse.flatMap(group => group.topics);
    console.log('Saving topics:', allTopics);

    // TODO: Replace this with actual saving logic (e.g., HTTP request)
    alert('Topics saved successfully!');
  }
}
