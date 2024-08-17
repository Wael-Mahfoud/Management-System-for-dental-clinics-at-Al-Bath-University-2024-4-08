export default function Validator() {

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function isEmpty(text) {
        if (text === undefined)
            return true;

        return !/\S+/.test(text);
    }

    function validateTravelDates(start_date, end_date) {
        return start_date <= end_date;
    }

    function isValidaNumber(number) {
        console.log(number);
        console.log(number <= 0);
        if (isEmpty(number) || (number < 1))
            return false;

        return true;
    }

    function isEmptyArray(array) {
        if (array < 1)
            return true;
        return false;
    }
    return {
        isValidEmail,
        isEmpty,
        validateTravelDates,
        isValidaNumber,
        isEmptyArray,

    };
}