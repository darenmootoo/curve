const express = require("express");
const mongoose = require("mongoose");
const contractSchema = require("../models/contractModel");

const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const contract = await contractSchema.save(req.body);
//     res.status(201).json({ contract });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

const createContact = async (req, res) => {
  const fakeReqBody = "Contract 1";
  const contract1 = new contractSchema({ Name: fakeReqBody });

  contract1.save((err, contract1) => {
    if (err) {
      console.log(err);
    } else {
      console.log(contract1);
    }
  });
};

module.exports = createContact;