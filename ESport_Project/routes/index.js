const express = require("express")

const router = express.Router()

router.route("/pmpl")
.get(
    getAllPmpls()
)