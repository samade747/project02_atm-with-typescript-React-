import inquirer from "inquirer"

interface UserType {
    userId: number,
    pin: number,
    transactionId: string,
    amount?: number
}

export default async function UseAtm(){

    const userInput: UserType = await inquirer.prompt([
        {
            type: "password",
            name: "pin",
            message: "Enter Your Pin:"
        },
        {
            type: "list",
            name: "accountType",
            choices: ["Saving", "Current"],
            message: "Select Account Type:"
        },
        {
            type: "list",
            name: "transactionType",
            choices: ["Withdraw", "Deposit", "Balance Enquiry", "Transfer", "Mini Statement", "Change Pin", "Exit"],
            message: "Select Transaction Type:"
        },
        {
            type: "number",
            name: "amount",
            message: "Enter Amount:",
            when: (userInput: UserType) => userInput.transactionType === "Withdrawal"
        },
        {
            type: "list",
            name: fastCashAmount",
            message:  choices: ["500", "1000", "2000", "3000", "5000", "10000"],
            when: (userInput: UserType) => userInput.transactionType === "Fast Cash",

        }


    ]);




}




// export default function Meezanatm() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Meezan ATM</h1>
//             </header>
//         </div>
//     )
// }