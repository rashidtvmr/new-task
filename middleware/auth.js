module.exports = (req, res, next) => {
  if (!req.session.isLoggedin) {
    return res.status(404).redirect("/");
  }
  next();
};
