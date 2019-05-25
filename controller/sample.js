module.exports.getIndex = (req, res, next) => {
  res.render("index", { pageTitle: "Home" });
};
module.exports.getSample1 = (req, res, next) => {
  res.render("sample/sample1", { pageTitle: "Sample1" });
};
module.exports.getSample2 = (req, res, next) => {
  res.render("sample/sample2", { pageTitle: "Sample2" });
};
