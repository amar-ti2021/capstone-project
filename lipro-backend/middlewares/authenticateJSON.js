import bodyParser from "body-parser";

function authenticateJSON(req, res, next) {
  if (req.is("application/json")) {
    bodyParser.json()(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: "Invalid JSON format" });
      }
      next();
    });
  } else {
    next();
  }
}

export default authenticateJSON;
