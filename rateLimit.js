const rateLimit = (options = {}) => {
  const windowMs = options.windowMs || 60000;
  const max = options.max || 100;
  const hits = new Map();

  return (req, res, next) => {
    const now = Date.now();
    const ip = req.ip;

    if (!hits.has(ip)) {
      hits.set(ip, []);
    }

    const timestamps = hits.get(ip).filter(ts => now - ts < windowMs);
    timestamps.push(now);
    hits.set(ip, timestamps);

    if (timestamps.length > max) {
      return res.status(429).send("Too Many Requests");
    }

    next();
  };
};

module.exports = rateLimit;
