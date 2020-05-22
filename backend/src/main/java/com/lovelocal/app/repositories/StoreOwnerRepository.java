package com.lovelocal.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lovelocal.app.model.StoreOwner;

@Repository
public interface StoreOwnerRepository extends JpaRepository<StoreOwner, Long>{

}
