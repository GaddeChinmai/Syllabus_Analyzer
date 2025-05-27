package com.example.syllabusAnalyzer.Repository;

import com.example.syllabusAnalyzer.UserProgress.UserProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserProgressRepo extends JpaRepository<UserProgress, Long> {

    List<UserProgress> findByUser_UserId(Integer userId);

    List<UserProgress> findByTopic_TopicId(Long topicId);
}
