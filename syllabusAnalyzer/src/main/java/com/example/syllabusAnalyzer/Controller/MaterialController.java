package com.example.syllabusAnalyzer.Controller;

import com.example.syllabusAnalyzer.Materials.MaterialDetails;
import com.example.syllabusAnalyzer.Service.MaterialService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/materials")
@CrossOrigin(origins = "http://localhost:4200")
public class MaterialController {

    @Autowired
    private MaterialService materialService;

    // Add a new material
    @PostMapping("/add")
    public MaterialDetails addMaterial(@RequestBody MaterialDetails material) {
        return materialService.saveMaterial(material);
    }

    // Get all materials for a specific topic
    @GetMapping("/topic/{topicId}")
    public List<MaterialDetails> getMaterialsByTopic(@PathVariable Long topicId) {
        return materialService.getMaterialsByTopic(topicId);
    }

    // Get all materials
    @GetMapping("/all")
    public List<MaterialDetails> getAllMaterials() {
        return materialService.getAllMaterials();
    }

    // Delete a material by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMaterial(@PathVariable Long id) {
        if (materialService.existsById(id)) {
            materialService.deleteById(id);
            return ResponseEntity.ok("Deleted material with ID: " + id);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Update a material by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<MaterialDetails> updateMaterial(@PathVariable Long id, @RequestBody MaterialDetails updatedMaterial) {
        return materialService.getMaterialById(id).map(material -> {
            material.setTitle(updatedMaterial.getTitle());
            material.setLink(updatedMaterial.getLink());
            material.setMaterialType(updatedMaterial.getMaterialType());
            material.setTopic(updatedMaterial.getTopic());
            MaterialDetails saved = materialService.saveMaterial(material);
            return ResponseEntity.ok(saved);
        }).orElse(ResponseEntity.notFound().build());
    }
}
