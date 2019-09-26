package edu.unimagdalena.academic.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "Clases")
public class Clase implements Serializable {

	 @Id 
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Integer id;
	 
	 @Column(name = "id_profesor")
	 private Integer id_profesor;
	 
	 @Column(name = "id_asignatura")
	 private Integer id_asignatura;
	 
}
