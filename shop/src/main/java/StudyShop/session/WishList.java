package StudyShop.session;

import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

public class WishList
{
    private List<Integer> Products;
    public WishList() {Products = new ArrayList<>();}
    public void AddProduct(Integer id) {Products.add(id);}
    public Integer GetProductsCount() {return Products.size();}
}