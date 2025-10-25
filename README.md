# Express Rate Limit Middleware

A lightweight Express.js middleware for basic IP-based rate limiting. Useful for preventing abuse, spam, or brute-force attacks.

## Features
- Limits requests based on IP
- Custom max requests and time window
- Easy to integrate
- Minimal and dependency-free

## Installation
```bash
npm install
```

## Usage
```javascript
const express = require("express");
const rateLimit = require("./src/rateLimit");

const app = express();

app.use(rateLimit({ windowMs: 60000, max: 100 })); // 100 req/min

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

## Parameters
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| windowMs | number | 60000 | Time window in ms |
| max | number | 100 | Max requests allowed per window per IP |
