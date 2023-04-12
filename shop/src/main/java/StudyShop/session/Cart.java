package StudyShop.session;

import StudyShop.entity.ProductEncounter;

import java.util.ArrayList;
import java.util.List;

public class Cart
{
    private List<Integer> Products;

    public Cart()
    {
        Products = new ArrayList<>();
    }

    public void AddProduct(Integer id)
    {
        Products.add(id);
    }

    public Integer GetProductsCount()
    {
        return Products.size();
    }


    public void RemoveProduct(Integer id)
    {
        for(int i = 0; i< Products.size(); i++)
        {
            if (Products.get(i).equals(id))
            {
                Products.remove(i);
                return;
            }
        }
    }

    public void RemoveProductAll(Integer id)
    {
        boolean allRemoved;

        do
        {
            int sizeBefore = Products.size();
            RemoveProduct(id);
            int sizeAfter = Products.size();
            allRemoved = sizeAfter == sizeBefore;
        }
        while (!allRemoved);
    }

    public ProductEncounter GetProductCounts()
    {
        ProductEncounter cnts = new ProductEncounter();

        for (Integer product: Products)
            cnts.AddProduct(product);

        return cnts;
    }

    public void Clean()
    {
        Products.clear();
    }
}
