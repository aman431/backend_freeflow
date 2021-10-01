const BoardModels = require("../models/boards");
const { Op } = require("sequelize");

class ProductController {
  async createBoard(req, res) {
    try {
      const { body } = req;

      //check existing data from the database..
      const data = await BoardModels.findAll({});
      body.id = data.length + 1;
      body.title = "new board";
      body.stage = 1;

      // create board
      const response = await BoardModels.create(body);

      // check status
      res.status(201).json(response);
    } catch (err) {
      // throw a error
      throw new Error(err.message);
    }
  }

  updateBoardById(req, res) {
    const { id } = req.params;
    const data = await BoardModels.findOne({ where: { id } });
    if (data) {
      res.status(404).send();
      return;
    }

    const { price, mrp, stock } = data;
    if (mrp < price && stock == 0) {
      res.status(422).send([]);
    } else if (mrp < price) {
      res.status(422).send([]);
    } else if (stock === 0) {
      res.status(422).send([]);
    } else {
      await BoardModels.update({ isPublished: true }, { where: { id } });
    }
  }
}

module.exports = new ProductController();
