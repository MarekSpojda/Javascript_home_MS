document.addEventListener("DOMContentLoaded", function () {
//Task1
    let getNumber = function (num, tab) {
        console.log(tab.includes(num));
    };

    getNumber(2, [33, 54, 2, 1, 4, 100]);// => true
    getNumber(5, [33, 54, 2, 1, 4, 100]);// => false

//Task2
    let createIdentityMatrix = function (rows) {
        let table = [rows];
        for (let i = 0; i < rows; i++) {
            table[i] = [rows];
            for (let j = 0; j < rows; j++) {
                table[i][j] = 0;
                if (i === j) {
                    table[i][j] = 1;
                }
            }
        }
        return table;
    };

    console.log(createIdentityMatrix(5));

//Task3
    let Tree = function (type) {
        this.type = type;
    };
    let tree1 = new Tree("Jabłoń");
    let tree2 = new Tree("Dąb");
    let tree3 = new Tree("Buk");

    Tree.prototype.bloom = function () {
        return "I'm blooming";
    };

    console.log(tree1.type + " " + tree1.bloom());
    console.log(tree2.type + " " + tree2.bloom());
    console.log(tree3.type + " " + tree3.bloom());

//Task1 extra
    let addTheSameNumbers = function (num, tab) {
        let sum = null;
        for (let i = 0; i < tab.length; i++) {
            if (tab[i] === num) {
                sum += tab[i];
            }
        }
        return sum;
    };

    console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));// => 14
    console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));// => 9
    console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));// => 0
    console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));// => null

//Task2 extra
    let powers = function (num) {
        if (num <= 0) {
            return [];
        }

        let tab = [];
        let power = 1;
        while (true) {
            let result = Math.pow(num, power);
            if (result < 200) {
                tab.push(result);
                power++;
            } else {
                break;
            }
        }
        tab.sort(function (a, b) {
            if (b < a)
                return -1;
            if (b > a)
                return 1;
            // a = b
            return 0
        });
        return tab;
    };

    console.log("Task2 extra: " + powers(2));// => [ 128, 64, 32, 16, 8, 4, 2 ]
    console.log("Task2 extra: " + powers(5));// => [ 125, 25, 5 ]
    console.log("Task2 extra: " + powers(-4));// => []

//Task3 extra
    let getFirstWrongElement = function (tab) {
        for (let i = 1; i < tab.length; i++) {
            let isMatch = false;
            for (let j = 1; j < (tab[i] + 1); j++) {
                if ((tab[i - 1] * j) === tab[i]) {
                    isMatch = true;
                    break;
                }
            }
            if (isMatch === false) {
                return tab[i];
            }
        }
        return null;
    };

    console.log("Task3 extra: " + getFirstWrongElement([1, 5, 10, 14, 28, 84]));//=> 14
    console.log("Task3 extra: " + getFirstWrongElement([3, 5, 15, 45]));// => 5
    console.log("Task3 extra: " + getFirstWrongElement([1, 8, 32, 128, 1024]));// => null

//Task4 extra
    let getLastNumbers = function (num, tab) {
        if (num < 0 || isNaN(num)) {
            return [];
        }
        let resultTab = [];
        for (let i = num; i > 0; i--) {
            resultTab.push(tab[tab.length - i]);
        }

        return resultTab;
    };

    console.log("Task4 extra: [" + getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]) + "]");// => [6, 7]
    console.log("Task4 extra: [" + getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]) + "]");// => [12, 13, 14, 15]
    console.log("Task4 extra: [" + getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]) + "]");// => []
    console.log("Task4 extra: [" + getLastNumbers('ala', [-4, -3, -2, 0, 1, 2, 3, 4]) + "]");// => []
});