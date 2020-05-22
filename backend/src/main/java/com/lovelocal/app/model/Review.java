package com.lovelocal.app.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "google_id",referencedColumnName = "google_id")
    private Store store;

    @Column(columnDefinition = "VARCHAR(512)")
    private String authorLink;

    private String authorName;
    private String authorId;

    @Column(columnDefinition = "VARCHAR(3500)")
    private String reviewText;

    private String reviewLink;
    private Double reviewRating;
    private String reviewTimestamp;
    private String reviewDatetimeUtc;
    private Integer reviewLikes;
}
