package com.example.syllabusAnalyzer.Controller;

import com.example.syllabusAnalyzer.AiPrediction.AiPrediction;
import com.example.syllabusAnalyzer.Service.AiPredictionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/predictions")
@CrossOrigin(origins = "http://localhost:4200")
public class AiPredictionController {

    @Autowired
    private AiPredictionService predictionService;

    @PostMapping("/add")
    public ResponseEntity<AiPrediction> addPrediction(@RequestBody AiPrediction prediction) {
        AiPrediction saved = predictionService.savePrediction(prediction);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/all")
    public ResponseEntity<List<AiPrediction>> getAll() {
        return ResponseEntity.ok(predictionService.getAllPredictions());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        return predictionService.getPredictionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<AiPrediction>> getByUser(@PathVariable Integer userId) {
        return ResponseEntity.ok(predictionService.getByUserId(userId));
    }

    @GetMapping("/topic/{topicId}")
    public ResponseEntity<List<AiPrediction>> getByTopic(@PathVariable Long topicId) {
        return ResponseEntity.ok(predictionService.getByTopicId(topicId));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        predictionService.deleteById(id);
        return ResponseEntity.ok("Prediction with ID " + id + " deleted.");
    }
}
