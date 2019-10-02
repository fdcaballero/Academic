package edu.unimagdalena.academic.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
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
	
	@OneToOne(mappedBy = "TpUsuario")
	private Profesor Tusuario;
	
	@OneToOne(mappedBy = "typeUser")
	private Estudiante t_user;
	
	

	public Profesor getTusuario() {
		return Tusuario;
	}

	public void setTusuario(Profesor tusuario) {
		Tusuario = tusuario;
	}

	public Estudiante getT_user() {
		return t_user;
	}

	public void setT_user(Estudiante t_user) {
		this.t_user = t_user;
	}

	public Usuario() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getHabilitado() {
		return habilitado;
	}

	public void setHabilitado(Boolean habilitado) {
		this.habilitado = habilitado;
	}
	
}
