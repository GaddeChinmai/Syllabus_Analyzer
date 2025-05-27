package com.example.syllabusAnalyzer.Service;

import com.example.syllabusAnalyzer.UserProgress.UserProgress;
import com.example.syllabusAnalyzer.Repository.UserProgressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserProgressService {

    @Autowired
    private UserProgressRepo progressRepo;

    public UserProgress saveOrUpdateProgress(UserProgress progress) {
        progress.setLastUpdated(LocalDateTime.now());
        return progressRepo.save(progress);
    }

    public List<UserProgress> getProgressByUser(Integer userId) {
        return progressRepo.findByUser_UserId(userId);
    }

    public List<UserProgress> getProgressByTopic(Long topicId) {
        return progressRepo.findByTopic_TopicId(topicId);
    }

    public Optional<UserProgress> getProgressById(Long id) {
        return progressRepo.findById(id);
    }

    public boolean existsById(Long id) {
        return progressRepo.existsById(id);
    }

    public void deleteById(Long id) {
        progressRepo.deleteById(id);
    }
}
