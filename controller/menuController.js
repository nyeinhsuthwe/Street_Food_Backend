const Menu = require('../model/menuModel')

const MenuController = {
    getMenu: async (req, res) => {
        const menuList = await Menu.find()
        return res.json({
            data: menuList
        })
    },

    createMenu: async (req, res) => {
        const { menu, price, description, category_id} = req.body;
         const photo = req.file ? req.file.filename : null;
        const createMenu = await Menu.create({ menu, price, description,photo,category_id });
        return res.json({
            msg: "Menu created successfully!",
            data: createMenu
        })
    },

    updateMenu: async (req, res) => {
        const { id } = req.body;
        const updateMenu = await Menu.findByIdAndUpdate(id, { ...req.body });
        return res.json({
            msg: "Menu updated successfully!",
            data: updateMenu
        })
    },

    deleteMenu: async (req, res) => {
        const { id } = req.params;
        const deleteMenu = await Menu.findByIdAndDelete(id);
        return res.json({
            msg: "Menu deleted successfully!",

        })
    },

    upload: async (req, res) => {
        try {
            const {id} = req.params;

            const menu = await Menu.findByIdAndUpdate(id, {
                photo : req.file.filename
            });

            return res.status(200).json({
                success: true,
                msg: "Photo Upload Successfully",
                data: menu
            })
        } catch (e) {
            return res.status(400).json({msg: e.message})
        }
    }
}

module.exports = MenuController