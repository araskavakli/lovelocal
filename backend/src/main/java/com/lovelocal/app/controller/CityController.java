package com.lovelocal.app.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lovelocal.app.model.City;
import com.lovelocal.app.repositories.CityRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping
public class CityController {
	
	private final CityRepository cityRepository;
	
	@GetMapping
	public ResponseEntity<List<City>> getAllCities() {
		return new ResponseEntity<List<City>>(cityRepository.findAll(), HttpStatus.OK);
	}

}
