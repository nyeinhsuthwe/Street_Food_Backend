const express = require('express');
const MenuController = require('../controller/menuController');
const multer = require("multer");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get('/get-menu-list', MenuController.getMenu);
router.post('/create-menu', upload.single('photo'), MenuController.createMenu);
router.patch('/update-menu/:id', MenuController.updateMenu);
router.delete('/delete-menu/:id', MenuController.deleteMenu);
router.post("/:id/upload",[
    upload.single("photo"),
    body("photo").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("File is required");
      }
      if (!req.file.mimetype.startsWith("image")) {
        throw new Error("File must be an image");
      }
      return true;
    }),
  ], MenuController.upload)

module.exports = router