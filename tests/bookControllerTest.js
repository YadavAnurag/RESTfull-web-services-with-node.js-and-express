var should = require('should');
var sinon = require('sinon');

describe('Book Controller Tests : ', function(){
  describe('post', function(){
    it('should not allow an empty title on post', function(){
      var Book = function(Book){this.save = function(){}};

      var req = {
        body: {
          author: 'Anu'
        }
      };

      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      }

      var bookController = require('../controllers/bookController')(Book);

      bookController.post(req, res);
      res.status.calledWith(400).should.equal(true, 'Bad Status'+res.status);
      res.send.calledWith('Title is required').should.equal(true);
    });
  });
});
