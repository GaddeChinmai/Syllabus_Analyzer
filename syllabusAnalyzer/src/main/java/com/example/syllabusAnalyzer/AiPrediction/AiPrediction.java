package com.example.syllabusAnalyzer.AiPrediction;

import com.example.syllabusAnalyzer.SyllabusTopics.SyllabusTopic;
import com.example.syllabusAnalyzer.users.UserDetails;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.LocalDate;

@Entity
@Table(name = "ai_predictions")
public class AiPrediction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long predictionId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserDetails user;

    @ManyToOne
    @JoinColumn(name = "topic_id", nullable = false)
    private SyllabusTopic topic;

    private LocalDate predictionDate;
    private String predictedCompletion; // e.g., "80% complete", "Expected by June 10"
    private String predictionHorizon;   // e.g., "7 days", "2 weeks"

    private LocalDateTime createdAt;

    public AiPrediction() {
        this.createdAt = LocalDateTime.now();
    }

    public AiPrediction(UserDetails user, SyllabusTopic topic, LocalDate predictionDate, String predictedCompletion, String predictionHorizon) {
        this.user = user;
        this.topic = topic;
        this.predictionDate = predictionDate;
        this.predictedCompletion = predictedCompletion;
        this.predictionHorizon = predictionHorizon;
        this.createdAt = LocalDateTime.now();
    }

    // Getters and Setters

    public Long getPredictionId() {
        return predictionId;
    }

    public void setPredictionId(Long predictionId) {
        this.predictionId = predictionId;
    }

    public UserDetails getUser() {
        return user;
    }

    public void setUser(UserDetails user) {
        this.user = user;
    }

    public SyllabusTopic getTopic() {
        return topic;
    }

    public void setTopic(SyllabusTopic topic) {
        this.topic = topic;
    }

    public LocalDate getPredictionDate() {
        return predictionDate;
    }

    public void setPredictionDate(LocalDate predictionDate) {
        this.predictionDate = predictionDate;
    }

    public String getPredictedCompletion() {
        return predictedCompletion;
    }

    public void setPredictedCompletion(String predictedCompletion) {
        this.predictedCompletion = predictedCompletion;
    }

    public String getPredictionHorizon() {
        return predictionHorizon;
    }

    public void setPredictionHorizon(String predictionHorizon) {
        this.predictionHorizon = predictionHorizon;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
