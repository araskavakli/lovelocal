package com.lovelocal.app.repositories;

import java.util.List;

import com.lovelocal.app.model.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreRepository extends JpaRepository<Store, Long> {
	
//	@Query(value = "SELECT * FROM stores s WHERE s.city_id = :cityId", nativeQuery = true)
//	List<Store> findByCityId(@Param("cityId") Long cityId);
//
//	@Query(value = "SELECT * FROM stores s WHERE s.store_owner_id = :ownerId", nativeQuery = true)
//	List<Store> findByOwnerId(@Param("ownerId") Long ownerId);

}
