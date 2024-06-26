import app from "./app.js";
import { connectDb } from "./db/db.config.js";

// port and hostname
const port = process.env.PORT || 8000;
const hostname = "127.0.0.1";

// database connection
connectDb();

app.listen(port, hostname, () =>
  console.log(`Server is ruuning on port:${port}`)
);
