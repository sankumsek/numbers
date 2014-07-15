describe('numberWord', function() {
  it('takes a single number in numerical form and returns it in written form', function() {
    numberWord("1").should.equal("one");
  });
  it('takes a two digit number in numerical form and returns is in written form', function(){
    numberWord("24").should.equal("twenty four");
  });
  it('takes a three digit number in numerical form and returns is in written form', function(){
    numberWord("384").should.equal("three hundred eighty four");
  });
  it('takes a number divisble by ten in numerical form and return a written one', function(){
    numberWord("30").should.equal("thirty");
  });
  it ("takes the number hundred and returns it in written form", function(){
    numberWord("100").should.equal("hundred");
  });
  it ("takes the number 310 and writtens it in written form", function(){
    numberWord("310").should.equal("three hundred ten");
  })
});
