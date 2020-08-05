export default {
    formatCurrency: function (num) {
        return '$' + Number(num.toFixed(2)).toLocaleString() + ' ';
    }
}

// toFixed() is a Number method that is used to convert a number to fixed-point notation (rounding the result where necessary) and return its value as a string

//The Number JavaScript object is a wrapper object allowing you to work with numerical values

//toLocaleString() is an inbuilt function in JavaScript which is used to convert a date and time to a string.

// Note: to change currency to correct currency