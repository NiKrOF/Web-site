package StudyShop.session;

import java.util.ArrayList;
import java.util.List;

public class Cart
{
    private List<Integer> Products;
    public Cart() {Products = new ArrayList<>();}
    public void AddProduct(Integer id) {Products.add(id);}
    public Integer GetProductsCount() {return Products.size();}
}