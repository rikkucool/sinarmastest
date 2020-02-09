const supertest = require('supertest');
const chai = require('chai');
const { expect } = chai;

describe('Movie Controller', () => {
  let response;
  describe('getMovies', () => {
    beforeEach( async () =>{
      response = await supertest(sails.hooks.http.app).get('/movies');
    });
    it('will return 200', () => {
      expect(response.status).to.deep.equal(200);
    });
    it('will return instance of array', () => {
      expect(response.body).instanceOf(Array);
    });
  });

  describe('adminCreate', () => {
    beforeEach( async () =>{
      const today = new Date();
      const postData = {
        title: today.toISOString(),
        description: 'description aja',
        duration: 120,
        artists: 'william, lauren, ricky, mia',
        genres: 'action'
      };
      response =  await supertest(sails.hooks.http.app).post('/admin/create/movie').send(postData);
    });
    it('will return 200', () => {
      expect(response.status).to.deep.equal(200);
    });
    it('will return instance of inserted object', () => {
      expect(response.body).instanceOf(Object);
    });
    it('will return instance of inserted object with keys', () => {
      expect(response.body).to.have.keys('createdAt', 'updatedAt', 'id', 'title', 'description', 'duration', 'artists', 'genres', 'watchUrl', 'mostViewed', 'mostVoted');
    });
  });

});
