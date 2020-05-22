package com.lovelocal.app.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService implements UserDetailsService {


    private final UserDao userDao;

    @Override
    public UserDetails loadUserByUsername(String emailAddress) throws UsernameNotFoundException {
        return userDao.findUserByEmailAddress(emailAddress)
                .orElseThrow(() ->
                        new UsernameNotFoundException(String.format("User %s not found", emailAddress))
                );
    }
}
