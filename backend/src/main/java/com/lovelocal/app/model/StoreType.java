package com.lovelocal.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table (name = "store_types")
public class StoreType {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Long id;
	
	private Boolean fruit = false;
	
	private Boolean butcher = false;
	
	private Boolean bakery = false;
	
	private Boolean tobacco = false;
	
	private Boolean souvenir = false;
	
}
