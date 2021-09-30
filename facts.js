const app = require("express")();
const port = your_port;
app.get('/fun/facts', (req, res) => {
  var facts = ['
  'humans are humans!',
  'Fact: McDonald’s once made bubblegum-flavored broccoli',
  'Fact: Some fungi create zombies, then control their minds',
  'Fact: The first oranges weren’t orange',
  'Fact: There’s only one letter that doesn’t appear in any U.S. state name, and its single q',
  'Fact: A cow-bison hybrid is called a “beefalo”',
  'Fact: Johnny Appleseed’s fruits weren’t for eating',
  'Fact: Scotland has 421 words for “snow”',
  'Fact: Samsung tests phone durability with a butt-shaped robot',
  'Fact: The “Windy City” name has nothing to do with Chicago weather',
  'Fact: Peanuts aren’t technically nuts, they are actully legumes',
  'Fact: Armadillo shells are bulletproof',

         ]
  let fact = facts[Math.floor(Math.random() * facts.length)]
  res.status(200).send({
  fact: fact
 });
});
app.listen(
port,
() => console.log("i am ready!")
)
