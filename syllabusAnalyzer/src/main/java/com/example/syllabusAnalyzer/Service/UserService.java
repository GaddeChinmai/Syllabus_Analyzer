package com.example.syllabusAnalyzer.Service;

import com.example.syllabusAnalyzer.Repository.UserRepo;
import com.example.syllabusAnalyzer.users.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public Optional<UserDetails> findByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    public Optional<UserDetails> findByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public UserDetails registerUser(UserDetails user) {
        user.setCreatedAt(LocalDateTime.now());
        // TODO: hash the password before saving
        return userRepo.save(user);
    }

    public Optional<UserDetails> loginUser(String username, String password) {
        Optional<UserDetails> userOpt = userRepo.findByUsername(username);
        if (userOpt.isPresent()) {
            UserDetails user = userOpt.get();
            // TODO: Add proper password hashing and verification
            if (user.getPasswordHash().equals(password)) {
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }
}
