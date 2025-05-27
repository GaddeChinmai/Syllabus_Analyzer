package com.example.syllabusAnalyzer.SyllabusTopics;

import com.example.syllabusAnalyzer.Course.CourseDetails;
import jakarta.persistence.*;

@Entity
@Table(name = "syllabus_topics")
public class SyllabusTopic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long topicId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id", nullable = false)
    private CourseDetails course;

    @Column(nullable = false, length = 200)
    private String topicName;

    @Column(name = "order_index")
    private Integer orderIndex;

    @Column(name = "total_subtopics")
    private Integer totalSubtopics;

    // Constructors
    public SyllabusTopic() {}

    public SyllabusTopic(CourseDetails course, String topicName, Integer orderIndex, Integer totalSubtopics) {
        this.course = course;
        this.topicName = topicName;
        this.orderIndex = orderIndex;
        this.totalSubtopics = totalSubtopics;
    }

    // Getters and Setters
    public Long getTopicId() {
        return topicId;
    }

    public void setTopicId(Long topicId) {
        this.topicId = topicId;
    }

    public CourseDetails getCourse() {
        return course;
    }

    public void setCourse(CourseDetails course) {
        this.course = course;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public Integer getOrderIndex() {
        return orderIndex;
    }

    public void setOrderIndex(Integer orderIndex) {
        this.orderIndex = orderIndex;
    }

    public Integer getTotalSubtopics() {
        return totalSubtopics;
    }

    public void setTotalSubtopics(Integer totalSubtopics) {
        this.totalSubtopics = totalSubtopics;
    }
}
