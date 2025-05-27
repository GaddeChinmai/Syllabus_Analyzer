package com.example.syllabusAnalyzer.Service;

import com.example.syllabusAnalyzer.SyllabusTopics.SyllabusTopic;
import com.example.syllabusAnalyzer.Repository.SyllabusTopicRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SyllabusTopicService {

    @Autowired
    private SyllabusTopicRepo syllabusTopicRepo;

    // Add or update topic
    public SyllabusTopic saveTopic(SyllabusTopic topic) {
        return syllabusTopicRepo.save(topic);
    }

    // Get all topics
    public List<SyllabusTopic> getAllTopics() {
        return syllabusTopicRepo.findAll();
    }

    // Get topics by course ID
    public List<SyllabusTopic> getTopicsByCourseId(Long courseId) {
        return syllabusTopicRepo.findByCourse_CourseId(courseId);
    }

    // Get topic by ID
    public Optional<SyllabusTopic> getTopicById(Long id) {
        return syllabusTopicRepo.findById(id);
    }

    // Delete topic by ID
    public void deleteTopicById(Long id) {
        syllabusTopicRepo.deleteById(id);
    }

    // Check if topic exists
    public boolean existsById(Long id) {
        return syllabusTopicRepo.existsById(id);
    }
}
