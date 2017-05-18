'use strict'

const express = require('express')
const knex = require('../knex')

const router = express.Router()

router.get('/', (req, res, next) => {
  knex('classifieds')
  .select(['id', 'title', 'description', 'price', 'item_image', 'created_at'])
  .then(classifieds => {
    res.send(classifieds)
  })
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  knex('classifieds')
  .select(['id', 'title', 'description', 'price', 'item_image', 'created_at'])
  .where('id', id)
  .then(classified => {
    res.send(classified[0])
  })
})

router.post('/', (req, res, next) => {
  knex('classifieds')
  .insert(req.body)
  .returning(['id', 'title', 'description', 'price', 'item_image'])
  .then(insertedClassified => {
    res.send(insertedClassified[0])
  })
})

router.patch('/:id', (req, res, next) => {
  let id = req.params.id
  knex('classifieds')
  .where('id', id)
  .update(req.body)
  .returning(['id', 'title', 'description', 'price', 'item_image'])
  .then(updatedClassfied => {
    res.send(updatedClassfied[0])
  })
})

router.delete('/:id', (req, res, next) => {
  let id = req.params.id
  knex('classifieds')
  .where('id', id)
  .returning(['id', 'title', 'description', 'price', 'item_image'])
  .del()
  .then(deletedClassfied => {
    res.send(deletedClassfied[0])
  })
})

module.exports = router
