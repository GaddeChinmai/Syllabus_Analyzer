package com.example.syllabusAnalyzer.Controller;

import com.example.syllabusAnalyzer.SyllabusTopics.SyllabusTopic;
import com.example.syllabusAnalyzer.Service.SyllabusTopicService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/syllabus")
@CrossOrigin(origins = "http://localhost:4200")
public class SyllabusController {

    @Autowired
    private SyllabusTopicService syllabusTopicService;

    // Get all syllabus topics
    @GetMapping("/all")
    public List<SyllabusTopic> getAllTopics() {
        return syllabusTopicService.getAllTopics();
    }

    // Add a new syllabus topic
    @PostMapping("/add")
    public ResponseEntity<SyllabusTopic> addTopic(@RequestBody SyllabusTopic topic) {
        SyllabusTopic savedTopic = syllabusTopicService.saveTopic(topic);
        return ResponseEntity.ok(savedTopic);
    }
}
