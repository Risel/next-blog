const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

async function init() {
  try {
    await mongoose.connect(``)
  } catch (e) {
    console.log(e)
  }
}