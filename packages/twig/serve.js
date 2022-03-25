// The serve file for displaying the twigs in a local browser
const express = require('express');
const app = express();

app.use(express.static('build'));
app.get('/', (req, res) => {
		res.send('Hello World!');
});

app.listen(3000, () => console.log(`Server listening on port: ${3000}`));
