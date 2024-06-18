const express = require("express");
const app = express();
app.use(function (req, res) {
   res.type('text/plain');
   res.status(404);
   res.send('404 - Not Found');

   app.get('/', (req, res) => {
      res.status(200).send('This is index page.');
      // custom 404 page

   });

});
app.get('/error', (req, res) => {
   res.status(500).send('This is error page.');
});

app.listen(3000, () => {
   console.log("Server is running at port 3000")
})
