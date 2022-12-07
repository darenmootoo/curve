const multer = require("multer");
const {trackController} = require("../controllers/trackController");
const transformBuffer = require("../utils/transformBuffer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("file");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        }
        const transformedBuffer = transformBuffer(req.file.buffer);
        const data = await trackController(transformedBuffer);
        // data.forEach(async (track) => {
        //   track.save(function (err, result) {
        //     if (err) {
        //       console.log("error", err);
        //     }
        //     console.log("result", result);
            
        //   });
        res.status(200).json("Upload successful");
  
      // });
    });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports = router;