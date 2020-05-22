package com.lovelocal.app.security;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
public class LoginController {

    @RequestMapping("/login")
    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_STORE_OWNER')")
    public Principal returnLoggedInUser(Principal user) {

        return user;
    }

}
