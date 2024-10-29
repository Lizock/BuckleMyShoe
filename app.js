// Require express framework
const express = require("express"); 
const PORT = 3000;
// Instantiate express
const app = express();

app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

function buckleConverter(number) {
    switch (number) {
      case 1:
      case 2:
        return "1, 2, buckle my shoe.";
      case 3:
      case 4:
        return "3, 4, shut the door.";
      case 5:
      case 6:
        return "5, 6, pick up sticks.";
      case 7:
      case 8:
        return "7, 8, lay them straight.";
      case 9:
      case 10:
        return "9, 10, a big fat hen!";
      default:
        return "Please enter a number between 1 and 10.";
    }
  }

// Define a default route
app.get('/', (req, res) => {
    console.log("Testing if this works! - server");
    res.render('home', { message: null });
});

app.post('/', (req, res) => {
    if (req.body.number) {
        let number = parseInt(req.body.number);
        if (isNaN(number) || number < 1 || number > 10) {
            res.render('home', { message: "Please enter a number between 1 and 10." });
        } else {
        let verse = buckleConverter(number);
        res.render('home', { message: verse });
        }
    }
});

// Start the app
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});