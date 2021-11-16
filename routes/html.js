const path = require("path");
const router = require("express").Router();

router.get("/excercise" , (req, res) => {
    res.sendFile(path.join(__dirname, "../public/excercise.html"));
});

module.exports = router;