const express = require("express");
const router = express.Router();
const Member = require("../models/Member");
const upload = require("../middleware/upload");

// ADD MEMBER
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newMember = new Member({
      ...req.body,
      image: req.file ? req.file.filename : ""
    });

    await newMember.save();
    res.status(200).json(newMember);
  } catch (err) {
    res.status(500).json({
      message: "Failed to add member",
      error: err.message
    });
  }
});

// GET ALL MEMBERS
router.get("/", async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// GET MEMBER BY ID
router.get("/:id", async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

// DELETE MEMBER
router.delete("/:id", async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);

    if (!deletedMember) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.json({ message: "Member deleted successfully" });
  } catch (err) {
    res.status(500).json({
      message: "Failed to delete member",
      error: err.message
    });
  }
});

module.exports = router;