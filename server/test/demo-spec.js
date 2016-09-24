var should = require("should");
describe('Should test', function() {
    it('number', function() {
        (123).should.be.a.Number;
    });
    it('object property', function() {
        var obj = {name:'mnichangxin',email:"mnichangxin@163.com"};
        obj.should.have.property('name','mnichangxin');
        obj.should.have.property('email');
    });
});