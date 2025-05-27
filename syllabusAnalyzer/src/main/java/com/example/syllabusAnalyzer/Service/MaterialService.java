package com.example.syllabusAnalyzer.Service;

import com.example.syllabusAnalyzer.Materials.MaterialDetails;
import com.example.syllabusAnalyzer.Repository.MaterialRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaterialService {

    @Autowired
    private MaterialRepo materialRepo;

    public MaterialDetails saveMaterial(MaterialDetails material) {
        return materialRepo.save(material);
    }

    public List<MaterialDetails> getAllMaterials() {
        return materialRepo.findAll();
    }

    public List<MaterialDetails> getMaterialsByTopic(Long topicId) {
        return materialRepo.findByTopic_TopicId(topicId);
    }

    public Optional<MaterialDetails> getMaterialById(Long id) {
        return materialRepo.findById(id);
    }

    public boolean existsById(Long id) {
        return materialRepo.existsById(id);
    }

    public void deleteById(Long id) {
        materialRepo.deleteById(id);
    }
}
