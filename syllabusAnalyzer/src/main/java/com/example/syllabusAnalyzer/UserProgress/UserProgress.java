package com.example.syllabusAnalyzer.UserProgress;

import com.example.syllabusAnalyzer.SyllabusTopics.SyllabusTopic;
import com.example.syllabusAnalyzer.users.UserDetails;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_progress")
public class UserProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long progressId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserDetails user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "topic_id", nullable = false)
    private SyllabusTopic topic;

    @Column(name = "completed_subtopics", nullable = false)
    private int completedSubtopics;

    @Column(name = "total_subtopics", nullable = false)
    private int totalSubtopics;

    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;

    public UserProgress() {
        this.lastUpdated = LocalDateTime.now();
    }

    // Getters and Setters

    public Long getProgressId() {
        return progressId;
    }

    public void setProgressId(Long progressId) {
        this.progressId = progressId;
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

    public int getCompletedSubtopics() {
        return completedSubtopics;
    }

    public void setCompletedSubtopics(int completedSubtopics) {
        this.completedSubtopics = completedSubtopics;
    }

    public int getTotalSubtopics() {
        return totalSubtopics;
    }

    public void setTotalSubtopics(int totalSubtopics) {
        this.totalSubtopics = totalSubtopics;
    }

    public LocalDateTime getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(LocalDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
}
