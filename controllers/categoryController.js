const { Op } = require('sequelize')
const { Category, Book } = require('../models')

exports.findAll = async (_, res) => {
  try {
    const allCategories = await Category.findAndCountAll()

    res.status(200).json(allCategories)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch Book categories', error: error.message });
  }
}

exports.create = async (req, res) => {
  const { name } = req.body;

  try {
    const existingCategory = await Category.findOne({ where: { name } });

    if (existingCategory) {
      return res.status(400).json({ message: 'Book category already exists' });
    }

    const newCategory = await Category.create({ name });

    res.status(201).json({
      message: 'Book category added successfully', data: {
        name: newCategory.name
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add Book category', error: error.message });
  }
}

exports.update = async (req, res) => {
  const { id } = req.params
  const { name } = req.body;

  try {
    const existingCategory = await Category.findByPk(id);

    if (!existingCategory) {
      return res.status(404).json({ message: 'Book category not found' });
    }

    await existingCategory.update({
      name
    })

    const updatedCategory = await Category.findByPk(id);

    res.status(200).json({
      message: 'Book category updated successfully', data: {
        id,
        name: updatedCategory.name
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Failed to update Book category', error: error.message });
  }
}

exports.delete = async (req, res) => {
  const { id } = req.params

  try {
    const existingCategory = await Category.findOne({ where: { id } });

    if (!existingCategory) {
      return res.status(400).json({ message: 'Book category not found' });
    }

    await Category.destroy({
      where: { id }
    })

    res.status(200).json({
      message: 'Book category deleted successfully', data: {
        id: existingCategory.id,
        name: existingCategory.name
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete Book category', error: error.message });
  }
}

exports.findAllBooks = async (req, res) => {
  const { id } = req.params

  try {
    const existingCategory = await Category.findOne({ where: { id } })

    if (!existingCategory) {
      return res.status(404).json({ message: 'Book category not found' });
    }

    let filterOptions = {
      where: {
        category_id: id
      },
      attributes: {
        exclude: ['created_at', 'updated_at']
      }
    };

    // Apply filters if provided in query parameters
    if (req.query.title) {
      filterOptions.where = {
        ...filterOptions.where,
        title: { [Op.iLike]: `%${req.query.title}%` }
      };
    }

    if (req.query.minYear || req.query.maxYear) {
      filterOptions.where = {
        ...filterOptions.where,
        release_year: {}
      };
      if (req.query.minYear) {
        filterOptions.where.release_year[Op.gte] = req.query.minYear;
      }
      if (req.query.maxYear) {
        filterOptions.where.release_year[Op.lte] = req.query.maxYear;
      }
    }

    if (req.query.minPage || req.query.maxPage) {
      filterOptions.where = {
        ...filterOptions.where,
        total_page: {}
      };
      if (req.query.minPage) {
        filterOptions.where.total_page[Op.gte] = req.query.minPage;
      }
      if (req.query.maxPage) {
        filterOptions.where.total_page[Op.lte] = req.query.maxPage;
      }
    }

    if (req.query.sortByTitle) {
      filterOptions.order = [['title', req.query.sortByTitle]];
    }

    const allBookCategories = await Book.findAndCountAll(filterOptions)

    res.status(200).json(allBookCategories)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch Book categories', error: error.message });
  }
}