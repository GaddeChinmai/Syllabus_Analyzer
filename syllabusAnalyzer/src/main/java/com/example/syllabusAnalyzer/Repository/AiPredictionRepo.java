package com.example.syllabusAnalyzer.Repository;

import com.example.syllabusAnalyzer.AiPrediction.AiPrediction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AiPredictionRepo extends JpaRepository<AiPrediction, Long> {
    List<AiPrediction> findByUser_UserId(Integer userId);
    List<AiPrediction> findByTopic_TopicId(Long topicId);
}
