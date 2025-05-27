const chai = require('chai');
const expect = chai.expect;
const {
    getPerComboPrice,
    getPerTicketPriceBySeatType,
    calculateTotalTicketAmount,
    calculateTotalComboAmount,
    calculateTotalBillAmount,
    validateName,
    validatePhoneNumber,
    calculateGrandTotal
} = require('../solution/ticket-booking-bill-calculator');

describe('MovieZone Theaters Ticket Booking', () => {

    describe('solution', () => {
    const solution = require('../solution/ticket-booking-bill-calculator');

    it('should have function getPerComboPrice', () => {
        expect(solution.getPerComboPrice).to.be.a('function');
    });

    it('should have function getPerTicketPriceBySeatType', () => {
        expect(solution.getPerTicketPriceBySeatType).to.be.a('function');
    });

    it('should have function calculateTotalTicketAmount', () => {
        expect(solution.calculateTotalTicketAmount).to.be.a('function');
    });

    it('should have function calculateTotalComboAmount', () => {
        expect(solution.calculateTotalComboAmount).to.be.a('function');
    });

    it('should have function calculateTotalBillAmount', () => {
        expect(solution.calculateTotalBillAmount).to.be.a('function');
    });

    it('should have function validateName', () => {
        expect(solution.validateName).to.be.a('function');
    });

    it('should have function validatePhoneNumber', () => {
        expect(solution.validatePhoneNumber).to.be.a('function');
    });

    it('should have function calculateGrandTotal', () => {
        expect(solution.calculateGrandTotal).to.be.a('function');
    });
});

    describe('getPerComboPrice', () => {
        it('should return price for Combo-1', () => {
            expect(getPerComboPrice('Combo-1')).to.equal(150.00);
        });

        it('should return error message for invalid combo type value', () => {
            expect(() => getPerComboPrice('Combo-4')).to.throw('Invalid Combo Type');
        });
    });

    describe('getPerTicketPriceBySeatType', () => {
        it('should return per ticket price for Gold seat', () => {
            expect(getPerTicketPriceBySeatType('Gold')).to.equal(350.00);
        });

        it('should return error message for invalid seat type value', () => {
            expect(() => getPerTicketPriceBySeatType('Diamond')).to.throw('Invalid Seat Type');
        });
    });

    describe('calculateTotalTicketAmount', () => {
        it('should return total ticket amount for 2 Silver seats', () => {
            expect(calculateTotalTicketAmount('Silver', 2)).to.equal(500.00);
        });

        it('should return error message if ticket count is zero', () => {
            expect(() => calculateTotalTicketAmount('Silver', 0)).to.throw('Ticket count must be greater than zero');
        });

        it('should return error message if seat type is invalid', () => {
            expect(() => calculateTotalTicketAmount('Diamond', 2)).to.throw('Invalid Seat Type');
        });
    });

    describe('calculateTotalComboAmount', () => {
        it('should return total amount for 3 Combo-2', () => {
            expect(calculateTotalComboAmount('Combo-2', 3)).to.equal(825.00);
        });

        it('should return error message if combo count is zero', () => {
            expect(() => calculateTotalComboAmount('Combo-2', 0)).to.throw('Combo count must be greater than zero');
        });

        it('should return error message if combo type is invalid', () => {
            expect(() => calculateTotalComboAmount('Combo-4', 3)).to.throw('Invalid Combo Type');
        });
    });

    describe('calculateTotalBillAmount', () => {
        it('should return total booking amount for 2 Platinum seats and 1 Combo-1', () => {
            expect(calculateTotalBillAmount('Platinum', 2, 'Combo-1', 1)).to.equal(1050.00);
        });

        it('should return error message if ticket count is negative', () => {
            expect(() => calculateTotalBillAmount('Platinum', -2, 'Combo-1', 1)).to.throw('Ticket count must be greater than zero');
        });

        it('should return error message if combo count is negative', () => {
            expect(() => calculateTotalBillAmount('Platinum', 2, 'Combo-1', -1)).to.throw('Combo count must be greater than zero');
        });
    });

    describe('validateName', () => {
        it('should return error message if name is empty', () => {
            expect(() => validateName('')).to.throw('Name is empty');
        });

        it('should return error message if name has digits or special characters', () => {
            expect(() => validateName('John123')).to.throw('Name has digits or special characters');
        });

        it('should return valid if name has only alphabets', () => {
            expect(validateName('John')).to.equal(true);
        });
    });

    describe('validatePhoneNumber', () => {
        it('should return error message if phone number is empty', () => {
            expect(() => validatePhoneNumber('')).to.throw('Phone number is empty');
        });

        it('should return error message if phone number has special characters or alphabets or has less than 10 digits', () => {
            expect(() => validatePhoneNumber('12345678a0')).to.throw('Phone number has special characters or alphabets or has less than 10 digits');
        });

        it('should return valid if phone number has only 10 digits', () => {
            expect(validatePhoneNumber('1234567890')).to.equal(true);
        });
    });

    // calculateGrandTotal is an interactive function, making it challenging to unit test directly.
    // Typically, such functions are refactored to separate the logic from the interaction,
    // allowing us to test the logic independently of the user interaction.
});
