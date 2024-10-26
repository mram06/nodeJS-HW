import Product from "../models/Product.mjs";
class ProductsController {
  static products(req, res) {
    const productsList = Product.loadProductsList();
    console.log(productsList);

    res.render("productsList", {
      title: "Products",
      products: productsList,
    });
  }
  static createForm(req, res) {
    res.render("addProduct", { title: "Додати товар" });
  }
  static productInfo(req, res) {
    const product = Product.getProductById(req.params.id);
    res.render("productInfo", { product: product });
  }
  static addProduct(req, res) {
    const productData = req.body;
    Product.addNewProduct(productData);
    res.redirect("/products");
  }
}

export default ProductsController;
