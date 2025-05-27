package com.example.syllabusAnalyzer.Materials;

import com.example.syllabusAnalyzer.SyllabusTopics.SyllabusTopic;
import jakarta.persistence.*;

@Entity
@Table(name = "materials")
public class MaterialDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long materialId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "topic_id", nullable = false)
    private SyllabusTopic topic;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, length = 500)
    private String link;

    @Enumerated(EnumType.STRING)
    @Column(name = "material_type", nullable = false)
    private MaterialType materialType;

    // Constructors
    public MaterialDetails() {}

    public MaterialDetails(SyllabusTopic topic, String title, String link, MaterialType materialType) {
        this.topic = topic;
        this.title = title;
        this.link = link;
        this.materialType = materialType;
    }

    // Getters and setters
    public Long getMaterialId() {
        return materialId;
    }

    public void setMaterialId(Long materialId) {
        this.materialId = materialId;
    }

    public SyllabusTopic getTopic() {
        return topic;
    }

    public void setTopic(SyllabusTopic topic) {
        this.topic = topic;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public MaterialType getMaterialType() {
        return materialType;
    }

    public void setMaterialType(MaterialType materialType) {
        this.materialType = materialType;
    }

    // Enum for material types
    public enum MaterialType {
        VIDEO,
        ARTICLE,
        BOOK,
        PDF,
        LINK,
        OTHER
    }
}
