package combined.project.CurdelProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

class CurdelProjectApplicationTests {
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	ResourceService service;
	
	public static void main(String[] args) {
		SpringApplication.run(CurdelProjectApplication.class, args);
		
	}
//	@PostConstruct
//	public void you() {
//		Resource rec=new Resource();
//		rec.setEmail("anu@gmail.com"); rec.setEmpName("Anu");
//		rec.setMobileNo(234567891); rec.setPassword(encoder.encode("Preethi"));
//		rec.setUsername("Anu"); 
//		
//		service.implementSave(rec);
//	}
	
	

	
	
}
