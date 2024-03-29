const { Category } = require('../models')

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