package com.example.syllabusAnalyzer.Repository;

import com.example.syllabusAnalyzer.Course.CourseDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseRepo extends JpaRepository<CourseDetails, Long> {
    Optional<CourseDetails> findByCourseName(String courseName);
}
