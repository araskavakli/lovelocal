package com.lovelocal.app;
import org.springframework.boot.test.context.SpringBootTest;

import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

import com.lovelocal.app.repositories.CityRepository;
import com.lovelocal.app.repositories.StoreOwnerRepository;
import com.lovelocal.app.repositories.StoreRepository;

import io.restassured.RestAssured;
import io.restassured.response.Response;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AppApplicationTests {

	@Autowired
	StoreRepository storeRepository;

	@Autowired
	StoreOwnerRepository storeOwnerRepository;

	@Autowired
	CityRepository cityRepository;

	@LocalServerPort
	private int port;

	@Before
	public void setUp() throws Exception {
		RestAssured.port = port;
	}

	@Test
	public void getStores_returns200() {
		Response response = RestAssured.get("http://localhost:" + port + "/api/stores").andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getStoreById_returns200() {
		Long dbSize = storeRepository.count();
		Response response = RestAssured.get("http://localhost:" + port + "/api/stores/" + dbSize).andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getStoresByCityId_returns200() {
		Long dbSize = cityRepository.count();
		Response response = RestAssured.get("http://localhost:" + port + "/api/stores/?cityId=" + dbSize).andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getStoresByOwnerId_returns200() {
		Long dbSize = storeOwnerRepository.count();
		Response response = RestAssured.get("http://localhost:" + port + "/api/stores/?ownerId=" + dbSize).andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

}
