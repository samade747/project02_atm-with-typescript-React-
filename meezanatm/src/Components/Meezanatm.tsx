import inquirer from "inquirer"

interface UserType {
    userId: number,
    pin: number,
    transactionId: string,
    amount?: number
}

async function  UseAtm(){

    const userInput: UserType = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: "Please Enter Your User Id: ",
            validate: (value) => {
                if (value === "") {
        }
    ])    
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