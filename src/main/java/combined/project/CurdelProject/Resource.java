package combined.project.CurdelProject;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;

@Data
@Entity
public class Resource implements UserDetails {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String empName;
	private String username;
	private String password;
	private long mobileNo;
	private String email; 
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}
	public String getPassword(){
		// TODO Auto-generated method stub
		return password;
	}
	public String getUsername(){
		// TODO Auto-generated method stub
		return username;
	}
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
