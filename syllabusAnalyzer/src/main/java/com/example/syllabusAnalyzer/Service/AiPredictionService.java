package com.example.syllabusAnalyzer.Service;

import com.example.syllabusAnalyzer.AiPrediction.AiPrediction;
import com.example.syllabusAnalyzer.Repository.AiPredictionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AiPredictionService {

    @Autowired
    private AiPredictionRepo predictionRepo;

    public AiPrediction savePrediction(AiPrediction prediction) {
        return predictionRepo.save(prediction);
    }

    public List<AiPrediction> getAllPredictions() {
        return predictionRepo.findAll();
    }

    public Optional<AiPrediction> getPredictionById(Long id) {
        return predictionRepo.findById(id);
    }

    public List<AiPrediction> getByUserId(Integer userId) {
        return predictionRepo.findByUser_UserId(userId);
    }

    public List<AiPrediction> getByTopicId(Long topicId) {
        return predictionRepo.findByTopic_TopicId(topicId);
    }

    public void deleteById(Long id) {
        predictionRepo.deleteById(id);
    }
}
