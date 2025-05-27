package com.example.syllabusAnalyzer.Controller;

import com.example.syllabusAnalyzer.ProgressHistory.ProgressHistory;
import com.example.syllabusAnalyzer.Service.ProgressHistoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/progressHistory")
@CrossOrigin(origins = "http://localhost:4200")
public class ProgressHistoryController {

    @Autowired
    private ProgressHistoryService historyService;

    // Add new progress history entry
    @PostMapping("/add")
    public ProgressHistory addHistory(@RequestBody ProgressHistory history) {
        return historyService.saveHistory(history);
    }

    // Get progress history by user
    @GetMapping("/user/{userId}")
    public List<ProgressHistory> getHistoryByUser(@PathVariable Integer userId) {
        return historyService.getHistoryByUser(userId);
    }

    // Get progress history by topic
    @GetMapping("/topic/{topicId}")
    public List<ProgressHistory> getHistoryByTopic(@PathVariable Long topicId) {
        return historyService.getHistoryByTopic(topicId);
    }

    // Delete history record by id
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteHistory(@PathVariable Long id) {
        if (historyService.existsById(id)) {
            historyService.deleteById(id);
            return ResponseEntity.ok("Deleted history with ID: " + id);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
