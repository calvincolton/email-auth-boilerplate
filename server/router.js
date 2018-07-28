module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send(['array', 'of', 'strings', 'water', 'bottle', 'phone', 'book']);
  });
}


// app.get('/', function(req, res, next) {
//   res.send(['array', 'of', 'strings']);
// });
