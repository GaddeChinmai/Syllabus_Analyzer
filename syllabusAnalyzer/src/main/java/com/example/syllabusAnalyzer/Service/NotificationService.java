package com.example.syllabusAnalyzer.Service;

import com.example.syllabusAnalyzer.Notification.Notification;
import com.example.syllabusAnalyzer.Repository.NotificationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepo notificationRepo;

    public Notification saveNotification(Notification notification) {
        return notificationRepo.save(notification);
    }

    public List<Notification> getByUser(Integer userId) {
        return notificationRepo.findByUser_UserId(userId);
    }

    public void markAsRead(Long id) {
        notificationRepo.findById(id).ifPresent(notification -> {
            notification.setRead(true);
            notificationRepo.save(notification);
        });
    }

    public void deleteById(Long id) {
        notificationRepo.deleteById(id);
    }
}
