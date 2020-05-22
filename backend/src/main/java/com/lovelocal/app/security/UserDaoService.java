package com.lovelocal.app.security;

import com.lovelocal.app.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserDaoService implements UserDao {

    private final UserRepository userRepository;

    @Override
    public Optional<User> findUserByEmailAddress(String emailAddress) {

        User user = userRepository.findUserByEmailAddress(emailAddress);
        user.setGrantedAuthorities(user.getUserRoles().getGrantedAuthorities());
        return Optional.ofNullable(user);

    }

}
