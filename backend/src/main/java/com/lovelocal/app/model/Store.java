package com.lovelocal.app.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "stores")
public class Store implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String country;

    private String name;

    @JsonManagedReference
    @OneToMany(mappedBy = "store")
    private List<Review> reviews;

    @NaturalId
    @Column(name = "google_id", columnDefinition = "VARCHAR(512)")
    private String googleId;

    @Column(columnDefinition = "VARCHAR(512)")
    private String site;

    private String type;

    @Column(columnDefinition = "VARCHAR(512)")
    private String types;

    private String address;
    private String addressCity;
    private String addressStreet;
    private String postalCode;
    private Double latitude;
    private Double longitude;
    private String phone;
    private Double rating;
    private Integer reviewsCount;

    @Column(columnDefinition = "VARCHAR(512)")
    private String reviewsLink;

    private String reviewsPerScore;
    private String reviewsId;
    private String photosCount;

    @Column(columnDefinition = "VARCHAR(512)")
    private String photo;

    @Column(columnDefinition = "VARCHAR(512)")
    private String workingHours;

    private Boolean verified;

    @Column(columnDefinition = "VARCHAR(512)")
    private String ownerId;

    @Column(columnDefinition = "VARCHAR(512)")
    private String ownerLink;

    private String email;
    private String email2;
    private String twitter;
    private String linkedin;
    private String facebook;
    private String instagram;

}
