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
    }
  }
}
