// Write test code here
const chai = require('chai');
const expect = chai.expect;
const { calculateAreaOfSquare, calculateAreaOfRectangle, calculateAreaOfCircle } = require('../solution/calculate-area-solution');

describe('Function Tests', function() {
    describe('calculateAreaOfSquare()', function() {
        it('should exist', function() {
            expect(calculateAreaOfSquare).to.be.a('function');
        });

        it('should return area for valid input', function() {
            expect(calculateAreaOfSquare(4)).to.equal(16);
        });

        it('should return error message for insufficient input', function() {
            expect(calculateAreaOfSquare()).to.equal("Insufficient Input");
        });

        it('should return error message for invalid input type', function() {
            expect(calculateAreaOfSquare('side')).to.equal("Invalid Input Type, Side Should Be A Number !!");
        });

        it('should return error message for negative input', function() {
            expect(calculateAreaOfSquare(-4)).to.equal("Incorrect Input, Side Cannot Be Zero or Negative !!");
        });
    });

    describe('calculateAreaOfRectangle', function() {
        it('should exist', function() {
            expect(calculateAreaOfRectangle).to.be.a('function');
        });

        it('should return area for valid input', function() {
            expect(calculateAreaOfRectangle(4, 5)).to.equal(20);
        });

        it('should return error message for insufficient inputs', function() {
            expect(calculateAreaOfRectangle(4)).to.equal("Insufficient Inputs");
        });

        it('should return error message for invalid input type', function() {
            expect(calculateAreaOfRectangle(4, 'breadth')).to.equal("Invalid Input Type, Length and Breadth Should Be Numbers !!");
        });

        it('should return error message for negative input', function() {
            expect(calculateAreaOfRectangle(-4, 5)).to.equal("Incorrect Input, Length and Breadth Cannot Be Zero or Negative !!");
        });
    });

    describe('calculateAreaOfCircle()', function() {
        it('should exist', function() {
            expect(calculateAreaOfCircle).to.be.a('function');
        });

        it('should return area for valid input', function() {
            expect(calculateAreaOfCircle(3)).to.be.closeTo(28.274, 0.001);
        });

        it('should return error message for insufficient input', function() {
            expect(calculateAreaOfCircle()).to.equal("Insufficient Input");
        });

        it('should return error message for invalid input type', function() {
            expect(calculateAreaOfCircle('radius')).to.equal("Invalid Input Type, Radius Should Be A Number !!");
        });

        it('should return error message for negative input', function() {
            expect(calculateAreaOfCircle(-3)).to.equal("Incorrect Input, Radius Cannot Be Zero or Negative !!");
        });
    });
});
