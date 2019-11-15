package edu.unimagdalena.academic.restfull;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import javax.persistence.EntityNotFoundException;
import edu.unimagdalena.academic.repositories.Responsable_AlumnoRepository;
import edu.unimagdalena.academic.services.CursoService;
import edu.unimagdalena.academic.services.EstudianteService;
import edu.unimagdalena.academic.services.ResponsableAlumnoService;
import edu.unimagdalena.academic.entities.*;

@RestController
@RequestMapping("/api/v1") //Nombre para accesar a la api
public class RestEstudianteController {
	
	 @Autowired
	 private EstudianteService studentRepository;
	 @Autowired
	 private CursoService cursoService;
	 @Autowired
	 private ResponsableAlumnoService responsableService;
	
	 @GetMapping("/estudiantes/{nombre}")
	 public List<Estudiante> getEstudianteByNombre(@PathVariable("nombre") String nombre){
		return studentRepository.findEstudianteByNombre(nombre);
	 }
	
	 @GetMapping("/estudiante/{nombre}/{curso}")
	 public List<Estudiante> getEstudiantesByNombreAndCurso(@PathVariable("nombre") String nombre, @PathVariable("curso") String curso){
		return studentRepository.findEstudiantesByNombreAndCurso(nombre, curso);
	 }
	
	 @GetMapping("/estudiantees/{curso}")
	 public List<Estudiante> getEstudianteByCurso(@PathVariable("curso") String curso){
		return studentRepository.findEstudiantesByGrado(curso);
	 }
	
	 @GetMapping("/estudiante/{id}")
	 public Estudiante getEstudiante(@PathVariable("id") Long id) {
		Optional<Estudiante> estudiante =  studentRepository.findById(id);
		if(!estudiante.isPresent()) {
			
			throw new EntityNotFoundException("No se encontro el estudiante con id" + id);
		}
		return estudiante.get();
	 }
	 
	 @GetMapping("/estudiante")
	 public List<Estudiante> listar(){
		 return studentRepository.findAll();
	 }
	 
	 @PutMapping("/estudiante/{id}")
	 public Estudiante editStudent(@RequestBody Estudiante estudiante, @PathVariable Long id) {
		
		 estudiante.setId(id);
		 
		 if(estudiante.getVar1String() != null) {
			 Optional<Responsable_Alumno> responsable = responsableService.findById(Long.parseLong(estudiante.getVar1String())); //NUEVO RESPONSABLE
			 if(estudiante.getResponsable() != null) {
				 if(estudiante.getResponsable().getId() == responsable.get().getId()) {
			     }else {
					Responsable_Alumno RespAnt = estudiante.getResponsable(); //Tomamos el responsable anterior y le quitamos el estudiante 
					for(Estudiante Bestudiante : RespAnt.getEstudiantes()  ) {
						if(Bestudiante.getId() == estudiante.getId()) { //ENCONTRAMOS EL ESTUDIANTE Y LO REMOVEMOS DE LA LISTA
							RespAnt.getEstudiantes().remove(Bestudiante); 
							break;
						}
					}
					 
					// responsableService.save(RespAnt);
				 }
			 }
				 
			 
			 estudiante.setResponsable(responsable.get()); //AGREGAMOS AL ESTUDIANTE EL NUEVO REPRESENTANTE Y AL REPRESENTANTE LE AGREGAMOS UN NUEVO ESTUDIANTE
			 responsable.get().getEstudiantes().add(estudiante);
			//responsableService.save(responsable.get());
		}
			
			if(estudiante.getVarString() != null) {
				Optional<Curso> curso = cursoService.findById(Long.parseLong(estudiante.getVarString()));
				if(estudiante.getGrado() != null) {
					if(estudiante.getGrado() != null) {
						if(estudiante.getGrado().getId() == curso.get().getId()) { // TOMAMOS EL CURSO DEL ESTUDIANTE Y VERIFICAMOS SI ES EL MISMO QUE YA POSEE
						}else {
							Curso cursoAnt = estudiante.getGrado();
							for(Estudiante Bestudiante: cursoAnt.getEstudiantes()) { //Itera sobre la lista de estudiante del curso
								if(Bestudiante.getId() == estudiante.getId()) { //ENCUENTRA AL ESTUDIANTE 
									cursoAnt.getEstudiantes().remove(Bestudiante);
									break;
								}
							}
						//	cursoService.save(cursoAnt);
						}
					}
				}
				estudiante.setGrado(curso.get());
				curso.get().getEstudiantes().add(estudiante);
				//cursoService.save(curso.get());
			}
		 return studentRepository.save(estudiante);
	}
	 
	 @DeleteMapping("/estudiante/{id}")
	 public void borrarStudent(@PathVariable("id") Long id) {
		Estudiante aux = studentRepository.getOne(id);
		studentRepository.delete(aux);
		 
	 }
 
     @PostMapping("/estudiante")
     public Estudiante createStudent(@RequestBody Estudiante student) {
		
		if(student.getVar1String() != null) {
			Optional<Responsable_Alumno> responsable = responsableService.findById(Long.parseLong( student.getVar1String())); //Buscamos el responsable
			student.setResponsable(responsable.get()); //Agregamos el responsable al estudiante 
			responsable.get().getEstudiantes().add(student); //Agregamos el estudiante al responsable
			//responsableService.save(responsable.get());
		}
		
		if(student.getVarString() != null) {
			Optional<Curso> curso = cursoService.findById(Long.parseLong(student.getVarString()));
			student.setGrado(curso.get());
			curso.get().getEstudiantes().add(student);
			//cursoService.save(curso.get());
			
		}
		
		
		return studentRepository.save(student);
	}

     @GetMapping("/estudianteesc/{id}")
	 public List<Estudiante> getEstudianteByIdCurso(@PathVariable("id") Long id){
		return studentRepository.findEstudiantesByCurso(id);
	 }

}
