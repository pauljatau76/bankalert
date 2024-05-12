let cardInfo = {
    name: "Paul Jatau",
    accountNumber: "9876543210",
    balance: 100000,
    pin: 5555,
    bank: "UBA"
};

let recipientInfo = {
    name: "Caroline Paul",
    accountNumber: "1234567890",
    balance: 25000,
    bank: "UBA"
};

let transferInfo = {};

function validatePin() {
    let pin = prompt("Enter your PIN:");
    if (pin === '${cardInfo.pin}') {
        return true;
    } else {
        alert("Invalid PIN!");
        return false;
    }
}

function getTransferDetails() {
    let amount = prompt("Enter amount to transfer:");
    let recipientAccount = prompt("Enter recipient's account number:");
    let recipientBank = prompt("Enter recipient's Bank:");
    letrecipientName = prompt("Enter recipient's name:");
    transferInfor = {
        amount: parseFloat(amount),
        recipientAccount: recipientAccount,
        recipientBank: recipientBank,
        recipientName: recipientName
    };
    recipientInfo.accountNumber = transferInfor.recipientAccount;
}

function validateTransfer() {
    if (transferInfo.amount > cardInfo.balance) {
        alert("Insufficient funds!");
        return false;
    } else if (transferInfo.recipientBank !== cardInfo.bank) {
        alert("Interbank transfer not supported");
        return false;
    } else {
        return true;
    }
}

function performTransfer() {
    if (validatePin() && validateTransfer()) {
        cardInfo.balance -= transferInfo.amount;
        recipientInfo.balance += transferInfo.amount;
        alert('Transfer successful! New balance: ${cardInfo.balance}');
        alert('Recipient new balance: ${recipientInfo.balance}');
    }
}

function withdraw() {
    let amount = prompt("Enter amount to withdraw:");
    if (validatePin() && amount <= cardInfo.balance) {
        cardInfo.balance -= parseFloat(amount);
        alert('Withdrawal successful! New balance: ${cardInfo.balance}');
    } else {
        alert("Insufficient funds or invalid PIN!");
    }
}

function initiateTransaction() {
    let response = prompt("Do you want to (1) Withdraw, (2) Transfer, or (3) Cancel?");
    if (response === "1") {
        withdraw();
    }  else if (response === "2") {
        getTransferDetails();
        performTransfer();
    } else if (response === "3") {
        alert("Transaction cancelled!");
    } else {
        alert("Invalid option!")
    }
}