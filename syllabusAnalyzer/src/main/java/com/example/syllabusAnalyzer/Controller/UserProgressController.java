package com.example.syllabusAnalyzer.Controller;

import com.example.syllabusAnalyzer.UserProgress.UserProgress;
import com.example.syllabusAnalyzer.Service.UserProgressService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/progress")
@CrossOrigin(origins = "http://localhost:4200")
public class UserProgressController {

    @Autowired
    private UserProgressService progressService;

    // Add or update progress
    @PostMapping("/add")
    public UserProgress addOrUpdateProgress(@RequestBody UserProgress progress) {
        return progressService.saveOrUpdateProgress(progress);
    }

    // Get all progress records for a user
    @GetMapping("/user/{userId}")
    public List<UserProgress> getProgressByUser(@PathVariable Integer userId) {
        return progressService.getProgressByUser(userId);
    }

    // Get all progress records for a topic
    @GetMapping("/topic/{topicId}")
    public List<UserProgress> getProgressByTopic(@PathVariable Long topicId) {
        return progressService.getProgressByTopic(topicId);
    }

    // Delete a progress record by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProgress(@PathVariable Long id) {
        if (progressService.existsById(id)) {
            progressService.deleteById(id);
            return ResponseEntity.ok("Deleted progress with ID: " + id);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
