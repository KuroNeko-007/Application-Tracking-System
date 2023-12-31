package com.iamneo.security.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
public class JobDetails {

	@Id
	@GeneratedValue
	private int id;
	private String department;
	private String position;
	private String location;
	private int jobminiexp;
	private Long salary;
	@Column(length=5000)
	private String description;
	private String requirements;
	private String mode;
	private String date;
	private String status="Waiting";

	private List<Integer> user;
}
