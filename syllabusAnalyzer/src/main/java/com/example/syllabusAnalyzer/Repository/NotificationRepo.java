package com.example.syllabusAnalyzer.Repository;

import com.example.syllabusAnalyzer.Notification.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepo extends JpaRepository<Notification, Long> {
    List<Notification> findByUser_UserId(Integer userId);
}
