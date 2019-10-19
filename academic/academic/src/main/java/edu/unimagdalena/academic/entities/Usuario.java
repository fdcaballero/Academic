package edu.unimagdalena.academic.entities;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class Usuario implements Serializable {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long id;
	
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
	
	@ManyToMany
	@JoinTable(name  =  "user_roles",
	joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
	inverseJoinColumns = @JoinColumn( name = "role_id", referencedColumnName = "id"))
	private Set<Role> roles;
	public Profesor getTusuario() {
		return Tusuario;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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
