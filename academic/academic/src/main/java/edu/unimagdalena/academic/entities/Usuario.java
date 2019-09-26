package edu.unimagdalena.academic.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "users")
public class Usuario implements Serializable {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "user", nullable = false)
	private String user;
	@Column (name = "password" , nullable = false)
	private String password;
	
	@Column(name = "hablitado", nullable = false)
	private Boolean habilitado;
}
