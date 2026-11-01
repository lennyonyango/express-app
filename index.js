const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send(`<h1>Hello World!!!</h1>
<h2>We Come in Peace</h2>
<h3>Some famous quote here</h3>
<h4>And another here!</h4>
<h5>I've added my README.md also</h5>
<h6>Fixed typo in readme.md</h6>
<p>Hello world</p>`);
});

const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
