package edu.unimagdalena.academic.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "Horas_Semanales")
public class Hora_Semanal implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "dia" , nullable = false)
	private String dia;
	
	@Column(name = "hora" , nullable = false)
	private String hora;
	@Column (name = "dia_indice" , nullable = false) 
	private Integer dia_indice;
	@Column (name = "hora_indice" , nullable = false)
	private Integer hora_indice;
}
