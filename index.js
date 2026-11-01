const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send(`<h1>Hello World!!!</h1>
<h2>We Come in Peace</h2>
<h3>Some famous quote here</h3>
<p>ellentesque condimentum pretium odio. In et enim eu leo vestibulum consectetur a quis leo. Nulla tincidunt dignissim suscipit. Pellentesque aliquet facilisis mattis. Aliquam non urna quis purus pellentesque iaculis. Fusce euismod aliquam leo nec viverra. Fusce elementum elit ut neque finibus aliquam.

Proin efficitur turpis sit amet porttitor suscipit. Quisque pulvinar elementum ipsum, laoreet egestas neque gravida sit amet. Pellentesque id dolor ex. Aliquam congue egestas sapien vitae egestas. Sed condimentum mattis venenatis. Curabitur a libero ipsum. Pellentesque auctor congue mi. Etiam quis dapibus ipsum, at vulputate nunc. Aliquam porta imperdiet suscipit. Curabitur tincidunt lacus ex. Morbi feugiat id ipsum non laoreet.</p>
<h5>I've added my README.md also</h5>
<h6>Fixed typo in readme.md</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum lacus ut molestie tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sem dictum, vulputate nisl vel, volutpat mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut nisl in est lacinia elementum. Nulla id lorem nisi. Donec a enim sit amet arcu ultrices dignissim. Phasellus neque risus, iaculis sed mollis sed, aliquet in quam. Praesent eu felis metus. Aliquam et semper nisi. Aenean tempor nibh velit, egestas facilisis ante lacinia nec. Sed pulvinar maximus interdum. Aliquam lobortis, magna eu semper placerat, leo felis lobortis eros, ut maximus metus dolor rutrum diam. Maecenas laoreet iaculis arcu eu tempus.</p>`);
});

const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
