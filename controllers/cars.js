const Car = require('../models/Cars');
const featuredCars = require('../mockData/featuredCars');
const carslist = require('../mockData/cars');

exports.add = async (_, res) => {
  try {
    carslist.forEach(async (item) => {
      let car = new Car(item);
      await car.save();
    });

    return res.status(201).json({ message: 'Created' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something Went Wrong' });
  }
};

exports.get = async (req, res) => {
  try {
    const products = await Car.find({
      name: { $regex: req.query.searchText, $options: 'i' },
    });

    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something Went Wrong' });
  }
};

exports.featured = async (_, res) => {
  try {
    return res.status(200).json(featuredCars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something Went Wrong' });
  }
};
