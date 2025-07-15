const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set MIME types
app.use((req, res, next) => {
  if (req.path.endsWith('.css')) {
    res.type('text/css');
  } else if (req.path.endsWith('.js')) {
    res.type('application/javascript');
  }
  next();
});

// Serve static files
app.use(express.static(__dirname));

// Serve the main HTML file for all routes (SPA-like behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view your site`);
}); 