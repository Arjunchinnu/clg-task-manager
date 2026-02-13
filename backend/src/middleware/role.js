export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    console.log("User in authorize:", req.user); // 👈 add this
    console.log("Allowed Roles:", allowedRoles);
    const role = req.user?.role;

    if (!role || !allowedRoles.includes(role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden. You are not authorized.",
      });
    }

    next();
  };
};
