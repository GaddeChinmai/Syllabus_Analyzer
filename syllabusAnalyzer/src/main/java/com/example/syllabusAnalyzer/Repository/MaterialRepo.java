package com.example.syllabusAnalyzer.Repository;

import com.example.syllabusAnalyzer.Materials.MaterialDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MaterialRepo extends JpaRepository<MaterialDetails, Long> {
    List<MaterialDetails> findByTopic_TopicId(Long topicId);
}
