package com.example.syllabusAnalyzer.Service;

import com.example.syllabusAnalyzer.ProgressHistory.ProgressHistory;
import com.example.syllabusAnalyzer.Repository.ProgressHistoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProgressHistoryService {

    @Autowired
    private ProgressHistoryRepo historyRepo;

    public ProgressHistory saveHistory(ProgressHistory history) {
        return historyRepo.save(history);
    }

    public List<ProgressHistory> getHistoryByUser(Integer userId) {
        return historyRepo.findByUser_UserId(userId);
    }

    public List<ProgressHistory> getHistoryByTopic(Long topicId) {
        return historyRepo.findByTopic_TopicId(topicId);
    }

    public Optional<ProgressHistory> getHistoryById(Long id) {
        return historyRepo.findById(id);
    }

    public boolean existsById(Long id) {
        return historyRepo.existsById(id);
    }

    public void deleteById(Long id) {
        historyRepo.deleteById(id);
    }
}
