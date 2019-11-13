package edu.unimagdalena.academic.entities;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "Horas_Semanales")
public class Hora_Semanal implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "dia" , nullable = false)
	private String dia;
	
	@Column(name = "hora" , nullable = false)
	private String hora;
	@Column (name = "dia_indice" , nullable = false) 
	private Integer dia_indice;
	
	@Column (name = "hora_indice" , nullable = false)
	private Integer hora_indice;
	
	
	@ManyToMany(mappedBy = "horas_semanales")
	private Set<Clase>  horas_clases;
	
	
	public Hora_Semanal() {
		super();
	
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDia() {
		return dia;
	}
	public void setDia(String dia) {
		this.dia = dia;
	}
	public String getHora() {
		return hora;
	}
	public void setHora(String hora) {
		this.hora = hora;
	}
	public Integer getDia_indice() {
		return dia_indice;
	}
	public void setDia_indice(Integer dia_indice) {
		this.dia_indice = dia_indice;
	}
	public Integer getHora_indice() {
		return hora_indice;
	}
	public void setHora_indice(Integer hora_indice) {
		this.hora_indice = hora_indice;
	}
	public Set<Clase> getHoras_clases() {
		return horas_clases;
	}
	public void setHoras_clases(Set<Clase> horas_clases) {
		this.horas_clases = horas_clases;
	}
	
}
