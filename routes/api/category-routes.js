const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    input:{Product}
  }).then(function(data){
    console.log(data)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where:{
      id:req.params.id
    }
  }).then(function(data){
    console.log(data)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(function(data){
    console.log(data)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{
    where:{
      id:req.params.id
    }
  })
  .then(function(data){
    console.log(data)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(function(data){
    console.log(data)
  })
});

module.exports = router;
