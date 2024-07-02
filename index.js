import inquirer from "inquirer";
import chalk from "chalk";
let currencAns = await inquirer.prompt([
    {
        name: "currentCurrency",
        type: "list",
        message: chalk.greenBright("Please chose the currency you have from below options"),
        choices: ["PAKISTANI RUPEES", "US DOLLAR", "JAPANESE YEN", "CHINESE YUAN"],
    },
    {
        name: "amount",
        type: "number",
        message: "Please enter the amount ",
    },
    {
        name: "changesCurrency",
        type: "list",
        message: chalk.greenBright("Please chose the currency you want to change from below options"),
        choices: ["PAKISTANI RUPEES", "US DOLLAR", "JAPANESE YEN", "CHINESE YUAN"],
    },
]);
