package StudyShop.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "t_orders")
@NoArgsConstructor
@Getter
@Setter
public class Order
{
    @Id
    @Column(name = "order_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "order_id_seq")
    @SequenceGenerator(name = "order_id_seq",sequenceName = "order_id_seq", allocationSize = 1)
    private Integer id;

    @Column(name = "city")
    private String city;

    @Column(name = "date")
    private Date date;

    @Column(name = "items")
    private String items;
}

