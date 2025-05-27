package com.example.syllabusAnalyzer.Repository;

import com.example.syllabusAnalyzer.ProgressHistory.ProgressHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProgressHistoryRepo extends JpaRepository<ProgressHistory, Long> {

    List<ProgressHistory> findByUser_UserId(Integer userId);

    List<ProgressHistory> findByTopic_TopicId(Long topicId);
}
