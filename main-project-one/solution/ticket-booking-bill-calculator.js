function getPerTicketPriceBySeatType(seatType) {
    switch (seatType) {
        case "Silver":
            return 250.00;
        case "Gold":
            return 350.00;
        case "Platinum":
            return 450.00;
        default:
            throw new Error("Invalid Seat Type");
    }
}

function getPerComboPrice(comboType) {
    switch (comboType) {
        case "Combo-1":
            return 150.00;
        case "Combo-2":
            return 275.00;
        case "Combo-3":
            return 475.00;
        default:
            throw new Error("Invalid Combo Type");
    }
}

function calculateTotalTicketAmount(seatType, ticketCount) {
    if (ticketCount <= 0) {
        throw new Error("Ticket count must be greater than zero");
    }
    const pricePerTicket = getPerTicketPriceBySeatType(seatType);
    return pricePerTicket * ticketCount;
}

function calculateTotalComboAmount(comboType, comboCount) {
    if (comboCount <= 0) {
        throw new Error("Combo count must be greater than zero");
    }
    const pricePerCombo = getPerComboPrice(comboType);
    return pricePerCombo * comboCount;
}

function calculateTotalBillAmount(seatType, ticketCount, comboType, comboCount) {
    const totalTicketAmount = calculateTotalTicketAmount(seatType, ticketCount);
    const totalComboAmount = calculateTotalComboAmount(comboType, comboCount);
    return totalTicketAmount + totalComboAmount;
}

function validateName(name) {
    if (!name) {
        throw new Error("Name is empty");
    }
    if (/[^a-zA-Z]/.test(name)) {
        throw new Error("Name has digits or special characters");
    }
    return true;
}

function validatePhoneNumber(phoneNumber) {
    if (!phoneNumber) {
        throw new Error("Phone number is empty");
    }
    if (/[^0-9]/.test(phoneNumber) || phoneNumber.length !== 10) {
        throw new Error("Phone number has special characters or alphabets or has less than 10 digits");
    }
    return true;
}

function calculateGrandTotal() {
    let grandTotal = 0;
    let continueCalculation = true;

    while (continueCalculation) {
        try {
            const name = prompt("Enter your name:");
            validateName(name);
            const phoneNumber = prompt("Enter your phone number:");
            validatePhoneNumber(phoneNumber);

            const seatType = prompt("Enter seat type (Silver/Gold/Platinum):");
            const ticketCount = parseInt(prompt("Enter ticket count:"), 10);
            const comboType = prompt("Enter combo type (Combo-1/Combo-2/Combo-3):");
            const comboCount = parseInt(prompt("Enter combo count:"), 10);

            const totalBillAmount = calculateTotalBillAmount(seatType, ticketCount, comboType, comboCount);
            grandTotal += totalBillAmount;

            const continueResponse = prompt("Do you want to continue? (Y/N):");
            if (continueResponse.toUpperCase() !== 'Y') {
                continueCalculation = false;
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return grandTotal;
}

// do not delete/edit the below code, as it is written to export the functions to be tested
module.exports = {
    getPerComboPrice,
    getPerTicketPriceBySeatType,
    calculateTotalTicketAmount,
    calculateTotalComboAmount,
    calculateTotalBillAmount,
    validateName,
    validatePhoneNumber,
    calculateGrandTotal
};
