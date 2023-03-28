package StudyShop.controller;

import java.util.List;

import StudyShop.entity.Product;
import StudyShop.repository.ProductRepoJpa;
import StudyShop.session.SessionStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@Controller
public class ShopController {
  @Autowired
  private ProductRepoJpa productRepo;

  @Autowired
  private SessionStorage sessionStorage;

  @GetMapping("/shop")
  public String getProducts(Model model
          , @RequestParam(required = false, name = "filter") String filterBy
          , @RequestParam(required = false, name = "sort") String sortBy
          , @RequestParam(required = false, name = "direction") String sortDir) {
    try {
      if (filterBy == null)
        filterBy = "";

      boolean sortAscending = false;
      if (sortDir == null || sortDir.equals("asc"))
        sortAscending = true;

      boolean sortByName = false;
      if (sortBy == null || sortBy.equals("name"))
        sortByName = true;

      List<Product> products = null;

      if(sortByName)
      {
        if(sortAscending)
          products = productRepo.findByNameContainingIgnoreCaseOrderByNameAsc(filterBy);
        else
          products = productRepo.findByNameContainingIgnoreCaseOrderByNameDesc(filterBy);
      }
      else
      {
        if(sortAscending)
          products = productRepo.findByNameContainingIgnoreCaseOrderByPriceAsc(filterBy);
        else
          products = productRepo.findByNameContainingIgnoreCaseOrderByPriceDesc(filterBy);
      }

      model.addAttribute("products", products);
    }
    catch (Exception e)
    {
      model.addAttribute("message", e.getMessage());
    }

    return "products";
  }

  @CrossOrigin(origins = "*")
  @PostMapping("/addToWishList")
  @ResponseBody
  public void addProduct(@RequestParam(required = true, name = "id") Integer productId, HttpSession session)
  {
    sessionStorage.GetData(session).AddProduct(productId);
  }

  @CrossOrigin(origins = "*")
  @GetMapping("/wishListCnt")
  @ResponseBody
  public String getProductsCnt(HttpSession session)
  {
    return sessionStorage.GetData(session).GetProductsCount().toString();
  }
}
