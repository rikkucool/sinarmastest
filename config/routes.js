/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /movies': 'MovieController.getMovies',
  'GET /search/movies':'MovieController.search',
  'GET /show/movie/:watchUrl':'MovieController.showMovie',
  'PATCH /movie/update/vote/:id':'MovieController.updateVoted',

  'POST /admin/create/movie': 'MovieController.adminCreate',
  'PATCH /admin/edit/movie/:id' : 'MovieController.adminUpdate',
  'GET /admin/get/most/viewed/movie' : 'MovieController.adminGetMostViewed',
  'GET /admin/get/most/voted/movie' : 'MovieController.adminGetMostVoted'
};
