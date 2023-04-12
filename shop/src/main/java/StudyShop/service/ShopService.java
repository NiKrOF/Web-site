package StudyShop.service;

import StudyShop.entity.Order;
import StudyShop.entity.Product;
import StudyShop.entity.ProductEncounter;
import StudyShop.repository.OrderRepoJpa;
import StudyShop.repository.ProductRepoJpa;
import StudyShop.session.Cart;
import StudyShop.session.SessionStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

@Component
public class ShopService
{
    @Autowired
    private ProductRepoJpa productRepo;

    @Autowired
    private OrderRepoJpa orderRepo;

    @Autowired
    private SessionStorage sessionStorage;

    public List<Product> getProducts(boolean sortByName, boolean sortAscending, String filterBy)
    {
        if(sortByName)
        {
            if(sortAscending)
                return productRepo.findByNameContainingIgnoreCaseOrderByNameAsc(filterBy);
            else
                return productRepo.findByNameContainingIgnoreCaseOrderByNameDesc(filterBy);
        }
        else
        {
            if(sortAscending)
                return productRepo.findByNameContainingIgnoreCaseOrderByPriceAsc(filterBy);
            else
                return productRepo.findByNameContainingIgnoreCaseOrderByPriceDesc(filterBy);
        }
    }

    // Cart functions
    Cart getCart(HttpSession ses) {return sessionStorage.GetData(ses.getId());}

    public void addToCart(HttpSession ses, Integer prodictId) {getCart(ses).AddProduct(prodictId);}
    public void delFromCart(HttpSession ses, Integer prodictId) {getCart(ses).RemoveProduct(prodictId);}
    public void delFromCartAll(HttpSession ses, Integer prodictId) {getCart(ses).RemoveProductAll(prodictId);}
    public Integer getCartCnt(HttpSession ses) {return getCart(ses).GetProductsCount();}

    public ProductEncounter getCartCounts(HttpSession ses)
    {
        ProductEncounter cnt = getCart(ses).GetProductCounts();
        for (ProductEncounter.ProdPair pair: cnt.counts)
        {
            Product prod = productRepo.getById(pair.productId);
            pair.name = prod.getName();
            pair.totalPrice = pair.count * prod.getPrice();
        }
        return cnt;
    }

    public Integer getCartCost(HttpSession ses) {
        ProductEncounter cnts = getCart(ses).GetProductCounts();
        Integer cost = 0;
        for (ProductEncounter.ProdPair pair : cnts.counts) {
            Integer price = productRepo.getById(pair.productId).getPrice();
            cost += price * pair.count;
        }
        return cost;
    }
}
