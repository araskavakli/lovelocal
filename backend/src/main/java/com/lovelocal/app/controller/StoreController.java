package com.lovelocal.app.controller;

import java.util.NoSuchElementException;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

import com.lovelocal.app.model.Store;
import com.lovelocal.app.repositories.StoreRepository;
import com.lovelocal.app.repositories.UserRepository;
import com.lovelocal.app.security.User;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.lovelocal.app.security.UserRoles.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/stores")
public class StoreController {

    private final StoreRepository storeRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostConstruct
    public void addUsersPostConstruct() {

        userRepository.deleteAll();

        User aras = new User();
        aras.setUsername("aras");
        aras.setEmailAddress("araskavakli@gmail.com");
        aras.setPassword(passwordEncoder.encode("password"));
        aras.setUserRoles(ADMIN);
        aras.setGrantedAuthorities(ADMIN.getGrantedAuthorities());
        userRepository.save(aras);

        User eray = new User();
        eray.setUsername("eray");
        eray.setEmailAddress("eraydamar@gmail.com");
        eray.setPassword(passwordEncoder.encode("password"));
        eray.setUserRoles(ADMIN);
        eray.setGrantedAuthorities(ADMIN.getGrantedAuthorities());
        userRepository.save(eray);

    }

    @GetMapping()
    public ResponseEntity<?> getAllStores() {
        return new ResponseEntity<>(storeRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{storeId}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_STORE_OWNER', 'ROLE_GUEST')")
    public ResponseEntity<?> getStoreById(@Valid @PathVariable Long storeId) {

        try {
            return new ResponseEntity<>(storeRepository.findById(storeId).get(), HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(String.format("The store with ID %d does not exist.", storeId),
                    HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'STORE_OWNER')")
    public ResponseEntity<?> addStore(@Valid @RequestBody Store store) {

        return new ResponseEntity<>(storeRepository.save(store), HttpStatus.OK);

    }

    @PutMapping("/{storeId}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_STORE_OWNER')")
    public ResponseEntity<?> editStore(@Valid @PathVariable Long storeId, @Valid @RequestBody Store store) {

        if (storeRepository.existsById(storeId)) {
            store.setId(storeId);
            return new ResponseEntity<>(storeRepository.save(store), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(
                    String.format("The store with ID %d does not exist. Edit unsuccessful", storeId),
                    HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/{storeId}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_STORE_OWNER')")
    public ResponseEntity<?> deleteStoreById(@Valid @PathVariable Long storeId) {

        try {
            storeRepository.deleteById(storeId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (EmptyResultDataAccessException e) {
            return new ResponseEntity<>(
                    String.format("The store with ID %d does not exist. Delete unsuccessful.", storeId),
                    HttpStatus.NOT_FOUND);
        }
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> errorHandler(MethodArgumentNotValidException e) {
        return new ResponseEntity<>("Sorry, there seems to be a problem with your request.",
                HttpStatus.BAD_REQUEST);
    }

}
