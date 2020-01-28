const shortid = require("shortid");

// Create 100 random guest id
for (let i = 0; i < 100; i++) {
  const id = shortid.generate();
  console.log(id);
}
