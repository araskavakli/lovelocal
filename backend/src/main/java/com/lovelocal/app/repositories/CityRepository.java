package com.lovelocal.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lovelocal.app.model.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long>{

}
