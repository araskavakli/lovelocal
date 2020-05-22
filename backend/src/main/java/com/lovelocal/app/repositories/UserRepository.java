package com.lovelocal.app.repositories;

import com.lovelocal.app.security.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT * FROM users u WHERE u.username = :username", nativeQuery = true)
    User findUserByUsername(@Param("username") String username);

    @Query(value = "SELECT * FROM users u WHERE u.email_address = :emailAddress", nativeQuery = true)
    User findUserByEmailAddress(@Param("emailAddress") String emailAddress);

}
