export function FaNumbers(number: string): string {
    let farsiNumber: string = "";
    for (let i: number = 0; i <= number.length; i++) {
        if (number[i] == "0") {
            farsiNumber += "۰";
        }
        else if (number[i] == "1") {
            farsiNumber += "۱";
        }
        else if (number[i] == "2") {
            farsiNumber += "۲";
        }
        else if (number[i] == "3") {
            farsiNumber += "۳";
        }
        else if (number[i] == "4") {
            farsiNumber += "۴";
        }
        else if (number[i] == "5") {
            farsiNumber += "۵";
        }
        else if (number[i] == "6") {
            farsiNumber += "۶";
        }
        else if (number[i] == "7") {
            farsiNumber += "۷";
        }
        else if (number[i] == "8") {
            farsiNumber += "۸";
        }
        else if (number[i] == "9") {
            farsiNumber += "۹";
        } else if (number[i] == "/") {
            farsiNumber += number[i];
        }
    }
    return farsiNumber;
}