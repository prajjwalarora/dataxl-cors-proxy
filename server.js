const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(cors());

app.use("/", async (req, res) => {
  try {
    const url = req.url.split("url=")[1];
    const respose = await axios.get(url);
    res.status(200).json(respose.data);
  } catch (error) {
    console.log(error.type, error.message);
    res.status(500).json({
      message: "internal Server Error!",
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}...`);
});
