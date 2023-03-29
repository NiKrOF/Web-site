package StudyShop.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "t_products")
@NoArgsConstructor
@Getter
@Setter
public class Product
{
  @Id
  @Column(name = "id", nullable = false)
  private Integer id;

  @Column(name = "name")
  private String name;

  @Column(name = "price")
  private Integer price;
}
