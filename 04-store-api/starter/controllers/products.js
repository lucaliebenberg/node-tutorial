const getAllProductsStatic = async (req, res) => {
  throw new Error("Not implemented async error");
  res.status(200).json({ msg: "products testing route" });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "products route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
