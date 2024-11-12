/* 1.1 */
const bankAccount = {
    ownerName: "Name",
    accountNumber: 12589642,
    balance : 5967,

    deposit(amount) {
        bankAccount.balance += Number(amount);
        console.log(bankAccount.balance)
    },

    withdraw(amount) {
        bankAccount.balance -= Number(amount);
        console.log(bankAccount.balance)
    }
};

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const inp = document.querySelector(".inp");

btn1.addEventListener("click", () => {
    bankAccount.deposit(inp.value);
});

btn2.addEventListener("click", () => {
    bankAccount.withdraw(inp.value);
});

/* 1.2 */

const weather = {
    temperature: undefined,
    humidity: undefined,
    windSpeed: undefined,

    tempWeather(value) {
        const celsies = (Number(value) >= 0) ? alert("true") : alert("false");
    }
};

const btn3 = document.querySelector(".btn3");
const inp2 = document.querySelector(".inp2");

btn3.addEventListener("click", () => {
    weather.tempWeather(inp2.value)
});

/* 1.3 */

let name = document.querySelector(".user-inp1");
let password = document.querySelector(".user-inp2");
let mail = document.querySelector(".user-inp3");
const btn4 = document.querySelector(".btn4");

const user = {
    name: "Олександр Романенко",
    email: "user1234@example.com",
    password: "Sunrise23",

    login(userName, pass, mail) {
        const loginFunc = (userName == this.name && pass == this.password && mail == this.email) ? console.log("Успішний вхід!") : console.log("Перевірте логін чи пароль");
    }
};

btn4.addEventListener("click", () => {
    user.login(name.value, password.value, mail.value);
});

/* 1.4 */

const movie = {
    title: undefined,
    director: undefined,
    rating: 8,
    year: undefined,

    isGood(){
        const counting = (this.rating > 7) ? console.log(true) : console.log(false);
    }
};

movie.isGood()