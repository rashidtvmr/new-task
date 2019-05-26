module.exports = (req, res, next) => {
  if (req.session.isLoggedin) {
    return res.status(200).redirect("/sample1");
  }
  next();
};
