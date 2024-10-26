class MainController {
  static index(req, res) {
    res.render("index", {
      title: "Головна сторінка",
    });
  }
}

export default MainController;
