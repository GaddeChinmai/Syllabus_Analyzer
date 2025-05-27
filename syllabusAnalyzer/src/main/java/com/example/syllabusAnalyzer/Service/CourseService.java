package com.example.syllabusAnalyzer.Service;

import com.example.syllabusAnalyzer.Course.CourseDetails;
import com.example.syllabusAnalyzer.Repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepo courseRepo;

    public CourseDetails createCourse(CourseDetails course) {
        course.setCreatedAt(java.time.LocalDateTime.now());
        return courseRepo.save(course);
    }

    public List<CourseDetails> getAllCourses() {
        return courseRepo.findAll();
    }

    public Optional<CourseDetails> getCourseById(Long id) {
        return courseRepo.findById(id);
    }

    public Optional<CourseDetails> updateCourse(Long id, CourseDetails newCourse) {
        return courseRepo.findById(id).map(course -> {
            course.setCourseName(newCourse.getCourseName());
            course.setDescription(newCourse.getDescription());
            return courseRepo.save(course);
        });
    }

    public boolean deleteCourse(Long id) {
        if (courseRepo.existsById(id)) {
            courseRepo.deleteById(id);
            return true;
        }
        return false;
    }
}
