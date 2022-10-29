const ShopRoutes = async (req, res) => {
  try {
    if (req.method === 'POST') {
      return res.send({message: 'You are sending a post request'})
    }
  } catch (err) {
    return res.status(400).end()
  }
}

export default ShopRoutes  