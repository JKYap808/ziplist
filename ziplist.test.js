

describe('ZipList', function() {
  const list1 = [1, 2, 3];
  const list2 = ['a', 'b', 'c'];
  const result = [1, 'a', 2, 'b', 3, 'c'];
  it('should return a single array with six elements', function () {
    chai.expect(zipList(list1, list2)).to.be.a('array');
    chai.expect(zipList(list1, list2).length).to.equal(6);
  });
  it('should have correct order', function () {
    chai.expect(zipList(list1, list2)).to.deep.equal(result);
  });
});

describe('ZipListTheSimpleWay', function() {
  const list1 = [1, 2, 3];
  const list2 = ['a', 'b', 'c'];
  const result = [1, 'a', 2, 'b', 3, 'c'];
  it('should return a single array with six elements', function () {
    chai.expect(zipListTheSimpleWay(list1, list2)).to.be.a('array');
    chai.expect(zipListTheSimpleWay(list1, list2).length).to.equal(6);
  });
  it('should have correct order', function () {
    chai.expect(zipListTheSimpleWay(list1, list2)).to.deep.equal(result);
  });
});