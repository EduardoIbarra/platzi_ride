module.exports = async function(req, res, next) {
  if (!req.headers || !req.headers.authorization) {
    return res.badRequest({err: 'No hay una cabecera de autorización'});
  }
  const token = req.headers.authorization;
  const decodedToken = AuthenticationService.JWTVerify(token);
  const user = await User.findOne({id: decodedToken.user});
  if (!user) {
    return next({err: 'Unauthorized'});
  }
  req.user = user.id;
  next();
};
