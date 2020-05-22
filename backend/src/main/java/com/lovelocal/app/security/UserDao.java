package com.lovelocal.app.security;

import java.util.Optional;

public interface UserDao {
    Optional<User> findUserByEmailAddress(String emailAddress);
}
