const Category = require("../model/categoryModel");

const categoryController = {
  createCategory: async (req, res) => {
    const {name }= req.body;
    const photo = req.file ? req.file.filename : null;
    const createCategory = await Category.create({ name, photo });
    return res.json({
      message: "category created successfully!",
      data: createCategory,
    });
  },


  getCategoryList : async (req, res)=>{
    const getCategoryList = await Category.find();
    return res.json ({
    data : getCategoryList
    })
  },

  deleteCategory : async (req,res) =>{
    const{id} = req.params
    const deleteCategory = await Category.findByIdAndDelete(id);
    return res.json({
      message : "Your Category is deleted Successfully!",
      data: deleteCategory
    })
  },

  //for photo create
  upload: async (req, res) => {
    try {
      const { id } = req.params;

      const menu = await Menu.findByIdAndUpdate(id, {
        photo: req.file.filename,
      });

      return res.status(200).json({
        success: true,
        msg: "Photo Upload Successfully",
        data: menu,
      });
    } catch (e) {
      return res.status(400).json({ msg: e.message });
    }
  },
};

module.exports = categoryController;
