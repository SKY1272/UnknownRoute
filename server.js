const express = require('express');
const app = express();
const port = 3000;

// Import routes
const userRoutes = require('./router3/userRoutes');
const userProducts = require('./router3/userProducts');
const cartRoutes = require('./router3/cartRoutes');

// Use middleware
app.use(express.json());

// Use routes
app.use('/users', userRoutes);
app.use('/products', userProducts);
app.use('/cart', cartRoutes);

// Default route
app.get('/', (req, res) => {
  res.send("Welcome to the E-Commerce API!");
});

// Handle 404
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
