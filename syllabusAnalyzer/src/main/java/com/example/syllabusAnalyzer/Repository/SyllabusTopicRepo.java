package com.example.syllabusAnalyzer.Repository;

import com.example.syllabusAnalyzer.SyllabusTopics.SyllabusTopic;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SyllabusTopicRepo extends JpaRepository<SyllabusTopic, Long> {

    // Custom query: Find all topics for a given course
    List<SyllabusTopic> findByCourse_CourseId(Long courseId);

    // Optionally: Find by topic name
    List<SyllabusTopic> findByTopicNameContainingIgnoreCase(String keyword);
}
