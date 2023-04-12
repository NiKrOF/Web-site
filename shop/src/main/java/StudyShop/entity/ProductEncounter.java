package StudyShop.entity;

import java.util.ArrayList;
import java.util.List;

public class ProductEncounter
{
    public class ProdPair
    {
        public Integer productId;
        public Integer count;
        public String name;
        public Integer totalPrice;
    }

    public List<ProdPair> counts;

    public ProductEncounter()
    {
        counts = new ArrayList<>();
    }

    public void AddProduct(Integer id)
    {
        for (ProdPair pair: counts)
        {
            if(pair.productId.equals(id))
            {
                pair.count++;
                return;
            }
        }

        ProdPair pair = new ProdPair();
        pair.productId = id;
        pair.count = 1;
        counts.add(pair);
    }
}
