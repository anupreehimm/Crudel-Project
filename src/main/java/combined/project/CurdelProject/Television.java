package combined.project.CurdelProject;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Television {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="product_id")
	private int tvId;
	@Column(name="product_model")
	private String model;
	@Column(name="product_brand")
	private String brand;
	@Column(name="product_cost")
	private int cost;
	@Column(name="product_size")
	private double size;
	@Column(name="product_type")
	private String type;
	
}
