const express = require("express");

function startServer(port) {
  // Create App
  const app = express();
  
  // Initialise middlewares
  app.use(express.json());
  app.use(express.urlencoded({ urlencoded: false }));

  // Routes
  app.use("/auth", require("./routes/auth.route"));
  app.use("/forms", require("./routes/forms.route"));

  // Serve static assets in production
  if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, "../", 'client', 'dist', 'index.html'))
    );
  }

  app.listen(port, () => console.log(`[API] Server started on port [${port}]`));
}

module.exports = startServer;