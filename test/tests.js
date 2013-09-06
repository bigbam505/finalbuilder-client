var should = require('should');

describe('#truth', function(){
  it('should be true', function(){
    true.should.eql(true);
  });

  it('should not be false', function(){
    true.should.not.eql(false);
  });
});
