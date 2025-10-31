const {body} = require ("express-validator");

exports.registerValidation = [
    body("name")
    .notEmpty().withMessage("Name is required.")
    .isLength({min:4}).withMessage("Name must be at least 4 characters long."),

    body("email")
    .notEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Invalid email format."),

    body("password")
    .notEmpty().withMessage("Password is required.")
    .isLength({min:6}).withMessage("Password must be at least 6 characters long.")
],

exports.loginValidation = [
   body("email")
    .notEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Invalid email format."),

    body("password")
    .notEmpty().withMessage("Password is required.")
    
]