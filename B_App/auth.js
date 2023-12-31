// Middleware for Admin authentication
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const authenticateAdminToken = (req, res, next) => {
    let storedTKN = req.cookies.jwt;
  
    if (!storedTKN) {
      return res.status(401).send("Dead Token!");
    }
  
    try {
      jwt.verify(storedTKN, "jwt_Admin_privateKey");
      next();
    } catch (err) {
      return res.status(403).redirect("/");
    }
  };
  
  // Middleware for User authentication
  const authenticateUserToken = (req, res, next) => {
    let storedTKN = req.cookies.jwt;
  
    if (!storedTKN) {
      return res.status(401).render("login", {
        showSuccessCard: false,
        message: "No Token Provided !",
      });
    }
  
    try {
      jwt.verify(storedTKN, "jwt_User_privateKey");
      console.log("valid token")
      next();
    } catch (err) {
        console.log("invalid token")
      return res.status(403).redirect("/");
    }
  };

export { authenticateAdminToken, authenticateUserToken };







//   app.post("/Admin_Mode", (req, res) => {
//     const { email, password } = req.body;
  
//     const sql = "SELECT * FROM admin WHERE Email_Address = ? AND Password = ?";
  
//     db.query(sql, [email, password], (err, result) => {
//       if (err) {
//         res.status(400).render("SuccessMsg", {
//           showSuccessCard: false,
//           message: "No Token Provided !",
//         });
//       }
  
//       if (result.length >= 1) {
//         const token = jwt.sign(
//           { email: email, Role: "Admin" },
//           "jwt_Admin_privateKey",
//           { expiresIn: "20m" }
//         );
  
//         // Set the token as an HTTP-only cookie
//         res.cookie("jwt", token, { httpOnly: true }); // Token will expire in 20 min (1200000 ms)
//         res.redirect("/admin_portfolio");
//       } else {
//         res.status(400).render("Admin_login");
//       }
//     });
//   });