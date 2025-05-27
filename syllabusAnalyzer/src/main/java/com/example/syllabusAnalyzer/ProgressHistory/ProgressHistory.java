package com.example.syllabusAnalyzer.ProgressHistory;

import com.example.syllabusAnalyzer.SyllabusTopics.SyllabusTopic;
import com.example.syllabusAnalyzer.users.UserDetails;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "progress_history")
public class ProgressHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long historyId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserDetails user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "topic_id", nullable = false)
    private SyllabusTopic topic;

    @Column(nullable = false)
    private LocalDateTime date;

    @Column(name = "completed_subtopics", nullable = false)
    private int completedSubtopics;

    @Column(name = "total_subtopics", nullable = false)
    private int totalSubtopics;

    public ProgressHistory() {
    }

    // Constructor for convenience
    public ProgressHistory(UserDetails user, SyllabusTopic topic, LocalDateTime date, int completedSubtopics, int totalSubtopics) {
        this.user = user;
        this.topic = topic;
        this.date = date;
        this.completedSubtopics = completedSubtopics;
        this.totalSubtopics = totalSubtopics;
    }

    // Getters and Setters
    public Long getHistoryId() {
        return historyId;
    }

    public void setHistoryId(Long historyId) {
        this.historyId = historyId;
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

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
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
}
