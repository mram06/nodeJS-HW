import dataFileManager from "../utils/DataFileManager.mjs";
class Product {
  static loadProductsList() {
    try {
      return dataFileManager.loadData();
    } catch (error) {
      throw new Error("Не вдалося завантажити список продуктів");
    }
  }
  static addNewProduct(productObj) {
    try {
      dataFileManager.addItem({ id: new Date().getTime(), ...productObj });
    } catch (error) {
      throw new Error("Операція з даними не вдалася");
    }
  }
  static getProductById(id) {
    try {
      return dataFileManager.getItemById(id);
    } catch (error) {
      throw new Error("Операція з даними не вдалася");
    }
  }
  static updateProduct(id, productData) {
    try {
      return dataFileManager.updateItemById(id, productData);
    } catch (error) {
      throw new Error("Операція з даними не вдалася");
    }
  }
  static deleteProductById(id) {
    try {
      return dataFileManager.deleteItemById(id);
    } catch (error) {
      throw new Error("Операція з даними не вдалася");
    }
  }
}

export default Product;
