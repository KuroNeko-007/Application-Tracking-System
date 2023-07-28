package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.feedbackuser;

@Repository
public interface FeedbackRepository extends JpaRepository<feedbackuser,Integer>{

}
