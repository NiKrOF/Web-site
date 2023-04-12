package StudyShop.repository;

import StudyShop.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepoJpa extends JpaRepository<Order, Integer> {

}
