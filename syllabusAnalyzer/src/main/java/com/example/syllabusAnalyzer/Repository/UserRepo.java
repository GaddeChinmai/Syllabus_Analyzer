package com.example.syllabusAnalyzer.Repository;

import com.example.syllabusAnalyzer.users.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepo extends JpaRepository<UserDetails, Integer> {
    Optional<UserDetails> findByUsername(String username);
    Optional<UserDetails> findByEmail(String email);
}