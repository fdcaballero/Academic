package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import edu.unimagdalena.academic.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{

	Role findByNombre(String nombre);
}
