import React, { useState } from 'react';

interface AccountData {
    userId: number;
    accountNumber: string;
    pin: string;
    balance: number;
}

function UseAtm() {
    const [userId, setUserId] = useState('');
    const [pin, setPin] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [amount, setAmount] = useState('');
    const [fastCashAmount, setFastCashAmount] = useState('');
    const [balance, setBalance] = useState(0);

    //  account data
    const accountData: AccountData[] = [
        { userId: 123, accountNumber: '123456789', pin: '1234', balance: 5000 },
        { userId: 456, accountNumber: '987654321', pin: '5678', balance: 10000 }
    ];

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Find account 
        const selectedAccount = accountData.find(account => account.userId.toString() === userId);
        if (!selectedAccount) {
            console.log('User ID not found');
            return;
        }

        // pin
        if (selectedAccount.pin !== pin) {
            console.log('Incorrect PIN');
            return;
        }

        // Perform withdrawal 
        if (transactionType === 'Withdraw' && parseInt(amount) > 0) {
            if (parseInt(amount) <= selectedAccount.balance) {
                const remainingBalance = selectedAccount.balance - parseInt(amount);
                setBalance(remainingBalance);
                console.log(`Withdrawn PKR ${amount}. Remaining balance: PKR ${remainingBalance}`);
            } else {
                console.log('Insufficient balance');
            }
        }

        
        console.log({
            userId,
            pin,
            accountNumber,
            transactionType,
            amount,
            fastCashAmount
        });
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    User ID:
                    <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </label>
                <br />
                <label>
                    PIN:
                    <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
                </label>
                <br />
                <label>
                    Account Number:
                    <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                </label>
                <br />
                <label>
                    Transaction Type:
                    <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Withdraw">Withdraw</option>
                        <option value="Deposit">Deposit</option>
                        <option value="Balance Enquiry">Balance Enquiry</option>
                        
                    </select>
                </label>
                <br />
                {transactionType === 'Withdraw' && (
                    <label>
                        Amount:
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </label>
                )}
                {transactionType === 'Fast Cash' && (
                    <label>
                        Fast Cash Amount:
                        <select value={fastCashAmount} onChange={(e) => setFastCashAmount(e.target.value)}>
                            <option value="">Select</option>
                            <option value="500">500</option>
                            <option value="1000">1000</option>
                            <option value="2000">2000</option>
                            
                        </select>
                    </label>
                )}
                <br />
                <button type="submit">Submit</button>
            </form>
            <div>
                Balance: PKR {balance}
            </div>
        </div>
    );
}

export default UseAtm;




// import React, { useState } from 'react';

// function UseAtm() {
//     const [userId, setUserId] = useState('');
//     const [pin, setPin] = useState('');
//     const [accountType, setAccountType] = useState('');
//     const [transactionType, setTransactionType] = useState('');
//     const [amount, setAmount] = useState('');
//     const [fastCashAmount, setFastCashAmount] = useState('');
//     const [balance] = useState('');

//     const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         // Perform actions based on the user input
//         // For demonstration, let's just log the input for now
//         console.log({
//             userId,
//             pin,
//             accountType,
//             transactionType,
//             amount,
//             fastCashAmount
//         });
//     };

//     return (
//         <div>
//             <form onSubmit={handleFormSubmit}>
//                 <label>
//                     User ID:
//                     <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />
//                 </label>
//                 <br />
//                 <label>
//                     Pin:
//                     <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
//                 </label>
//                 <br />
//                 <label>
//                     Account Type:
//                     <select value={accountType} onChange={(e) => setAccountType(e.target.value)}>
//                         <option value="">Select</option>
//                         <option value="Saving">Saving</option>
//                         <option value="Current">Current</option>
//                     </select>
//                 </label>
//                 <br />
//                 <label>
//                     Transaction Type:
//                     <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
//                         <option value="">Select</option>
//                         <option value="Withdraw">Withdraw</option>
//                         <option value="Deposit">Deposit</option>
//                         <option value="Balance Enquiry">Balance Enquiry</option>
//                         {/* Add more options as needed */}
//                     </select>
//                 </label>
//                 <br />
//                 {transactionType === 'Withdraw' && (
//                     <label>
//                         Amount:
//                         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//                     </label>
//                 )}
//                 {transactionType === 'Fast Cash' && (
//                     <label>
//                         Fast Cash Amount:
//                         <select value={fastCashAmount} onChange={(e) => setFastCashAmount(e.target.value)}>
//                             <option value="">Select</option>
//                             <option value="500">500</option>
//                             <option value="1000">1000</option>
//                             <option value="2000">2000</option>
//                             {/* Add more options as needed */}
//                         </select>
//                     </label>
//                 )}
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//             <div>
//                 Balance: {balance && `PKR ${balance}`}
//             </div>
//         </div>
//     );
// }

// export default UseAtm;




// // import React from "react";
// import inquirer from "inquirer";

// interface UserType {
//     userId: number,
//     pin: number,
//     transactionType: string,
//     amount?: number
// }

// export default async function UseAtm(){

//     const userInput: UserType = await inquirer.prompt([
//         {
//             type: "number",
//             name: "userId",
//             message: "Enter Your userId:"
//         },
//         {
//             type: "password",
//             name: "pin",
//             message: "Enter Your Pin:"
//         },
//         {
//             type: "list",
//             name: "accountType",
//             choices: ["Saving", "Current"],
//             message: "Select Account Type:"
//         },
//         {
//             type: "list",
//             name: "transactionType",
//             choices: ["Withdraw", "Deposit", "Balance Enquiry", "Transfer", "Mini Statement", "Change Pin", "Exit"],
//             message: "Select Transaction Type:"
//         },
//         {
//             type: "number",
//             name: "amount",
//             message: "Enter Amount:",
//             when: (userInput: UserType) => userInput.transactionType === "Withdrawal"
//         },
//         {
//             type: "list",
//             name: "fastCashAmount",
//             message: "select amount",
//             choices: ["500", "1000", "2000", "3000", "5000", "10000"],
//             when: (userInput: UserType) => userInput.transactionType === "Fast Cash",
//         },
// ]);

// if (userInput.userId && userInput.pin) {
//     if (userInput.transactionType === "Balance Inquiry") {
//         const customBalanceResponse = await inquirer.prompt([
//             {
//                 type: "number",
//                 name: "customBalance",
//                 message: "Enter Custom Balance for demonstration purposes:"
//             }
//         ]);
//         const customBalance = customBalanceResponse.customBalance || Math.floor(Math.random() * 100000);
//         console.log("Your current balance is: PKR " + customBalance);
//         return;
//     }
    
//     const balance = Math.floor(Math.random() * 100000);
//     const enteredAmount = userInput.amount || parseInt(userInput.fastCashAmount);
//     if (enteredAmount <= balance) {
//         const remaining = balance - enteredAmount;
//         console.log(`${enteredAmount} is debited from your account.\nYour remaining balance is: PKR ${remaining}`);
//     } else {
//         console.log("Insufficient Balance. Please enter a correct amount.");
//     }
// }
// }