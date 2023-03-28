package StudyShop.repository;

import StudyShop.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepoJpa extends JpaRepository<Product, Integer>
{
    List<Product> findByNameContainingIgnoreCaseOrderByPriceAsc(String strToSearch);
    List<Product> findByNameContainingIgnoreCaseOrderByPriceDesc(String strToSearch);
    List<Product> findByNameContainingIgnoreCaseOrderByNameAsc(String strToSearch);
    List<Product> findByNameContainingIgnoreCaseOrderByNameDesc(String strToSearch);
}
