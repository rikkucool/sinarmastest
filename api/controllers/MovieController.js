/**
 * MovieController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const limit = 10;

const getMovies = async function(req, res){
  const skip = req.param('page') === undefined ? 0 : parseInt(req.param('page')-1) * limit;
  const movies = await Movie.find({ skip , limit});
  res.send(movies);
};

const showMovie = async function(req, res){
  const watchUrl = encodeURI(req.param('watchUrl'));
  const movie = await Movie.findOne({watchUrl});
  movie.mostViewed+=1;
  await Movie.update({id:movie.id}).set({mostViewed:movie.mostViewed}).fetch();
  res.send(movie);
};

const updateVoted = async function(req, res){
  const id = req.param('id');
  const movie = await Movie.findOne({id});
  movie.mostVoted+=1;
  const updatedMovie = await Movie.update(id).set(mostVoted).fetch();
  res.send(updatedMovie);
};

const search = async function(req, res){
  const where = {};
  const skip = req.param('page') === undefined ? 0 : parseInt(req.param('page')) * limit;
  req.param('title') === undefined ? '' : where.title = req.param('title');
  req.param('description') === undefined ? '' : where.description = req.param('description');
  req.param('artists') === undefined ? '' : where.artists = req.param('artists');
  req.param('genres') === undefined ? '' : where.artists = req.param('genres');
  const movies = await Movie.find({ where, skip , limit});
  res.send(movies);
};




// admin

const adminCreate = async function(req, res){
  const movie = req.body;
  movie.watchUrl = encodeURI(movie.title);
  const createdMovie = await Movie.create(movie).fetch();
  res.send(createdMovie);
};

const adminUpdate = async function(req, res){
  const id = req.param('id');
  const movie = req.body;
  const updatedMovie = await Movie.update(id).set(movie).fetch();
  res.send(updatedMovie);
};

const adminGetMostViewed = async function(req, res){
  const movie = await Movie.find({limit: 1}).sort('mostViewed desc');
  res.send(movie);
};

const adminGetMostVoted = async function(req, res){
  const movie = await Movie.find({limit: 1}).sort('mostVoted desc');
  res.send(movie);
};

module.exports = {
  getMovies,
  updateVoted,
  search,
  showMovie,
  adminCreate,
  adminUpdate,
  adminGetMostViewed,
  adminGetMostVoted
};

