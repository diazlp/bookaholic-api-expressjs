const { Op } = require('sequelize')
const { Book, Category } = require('../models')

exports.findAll = async (req, res) => {
  try {
    let filterOptions = {
      attributes: {
        exclude: ['created_at', 'updated_at', 'category_id']
      },
      include: {
        model: Category,
        attributes: {
          exclude: ['created_at', 'updated_at']
        }
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

    const allBooks = await Book.findAndCountAll(filterOptions);

    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch Books', error: error.message });
  }
}

exports.create = async (req, res) => {
  try {
    const { title, description, image_url, release_year, price, total_page, category_id } = req.body;

    const existingBook = await Book.findOne({ where: { title } });

    if (existingBook) {
      return res.status(400).json({ message: 'Book already exists' });
    }

    const existingCategory = await Category.findOne({ where: { id: category_id } })

    if (!existingCategory) {
      return res.status(400).json({ message: 'Book category not found' });
    }

    // Validate release_year
    if (release_year < 1980 || release_year > 2021) {
      return res.status(400).json({ message: 'Invalid release year. Release year must be between 1980 and 2021' });
    }

    await Book.create({
      title,
      description,
      image_url,
      release_year,
      price,
      total_page,
      category_id
    });

    const newlyCreatedBook = await Book.findOne({
      where: { title },
      attributes: {
        exclude: ['created_at', 'updated_at', 'category_id']
      },
      include: {
        model: Category,
        attributes: {
          exclude: ['created_at', 'updated_at']
        }
      }
    })

    res.status(201).json({ message: 'Book created successfully', data: newlyCreatedBook });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create book', error: error.message });
  }
};


exports.update = async (req, res) => {
  const { id } = req.params
  const { title, description, image_url, release_year, price, total_page, category_id } = req.body;

  try {
    const existingBook = await Book.findByPk(id);

    if (!existingBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (category_id) {
      const existingCategory = await Category.findOne({ where: { id: category_id } })

      if (!existingCategory) {
        return res.status(404).json({ message: 'Book category not found' });
      }
    }

    await Book.update({
      title,
      description,
      image_url,
      release_year,
      price,
      total_page,
      category_id
    }, {
      where: {
        id
      },
      individualHooks: true
    })

    const updatedBook = await Book.findByPk(id, {
      attributes: {
        exclude: ['created_at', 'updated_at', 'category_id'],
      },
      include: {
        model: Category,
        attributes: {
          exclude: ['created_at', 'updated_at']
        }
      }
    });

    res.status(200).json({
      message: 'Book has been updated successfully', data: updatedBook
    })
  } catch (error) {
    res.status(500).json({ message: 'Failed to update Book', error: error.message });
  }
}

exports.delete = async (req, res) => {
  const { id } = req.params

  try {
    const existingBook = await Book.findByPk(id);

    if (!existingBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    await Book.destroy({
      where: { id }
    })

    res.status(200).json({
      message: 'Book has been deleted successfully', data: {
        id: existingBook.id,
        title: existingBook.title
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete Book', error: error.message });
  }
}