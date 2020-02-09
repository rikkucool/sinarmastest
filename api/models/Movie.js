/**
 * Movie.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: { type: 'string', required: true, },
    description: { type: 'string', required: true, },
    duration: { type: 'number', required: true, },
    artists: { type: 'string', required: true, },
    genres: { type: 'string', required: true, },
    watchUrl: { type: 'string', required: true, unique: true },
    mostViewed: { type: 'number', required: false, defaultsTo:0, allowNull:true },
    mostVoted: { type: 'number', required: false, defaultsTo:0, allowNull:true },
  },

};

