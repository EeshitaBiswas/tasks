/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newarr: number[] = [];
    if (numbers.length === 1) {
        newarr = [numbers[0], numbers[0]];
    } else if (numbers.length >= 1) {
        newarr = [numbers[0], numbers[numbers.length - 1]];
    }
    return newarr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newarr1 = numbers.map((number: number): number => number * 3);
    return newarr1;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newarr2 = numbers.map((number: string): number =>
        isNaN(parseInt(number)) ? 0 : parseInt(number)
    );
    return newarr2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newarr3_1 = amounts.map((str: string): string =>
        str.startsWith("$") ? str.slice(1) : str
    );
    const newarr3 = newarr3_1.map((number: string): number =>
        isNaN(parseInt(number)) ? 0 : parseInt(number)
    );
    return newarr3;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newmessages_qm_removed = messages.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    const finalmessages = newmessages_qm_removed.map(
        (message: string): string =>
            message.endsWith("!") ? message.toUpperCase() : message
    );
    return finalmessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortwords = words.filter((word: string): boolean => word.length < 4);
    return shortwords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const allcolors = colors.filter(
            (color: string): boolean =>
                color !== "red" && color !== "blue" && color !== "green"
        );
        if (allcolors.length === 0) {
            return true;
        }
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (oldValue: number, newValue: number) => oldValue + newValue,
        0
    );
    let newstring: string[] = addends.map(
        (number: number): string => number + "+"
    );
    if (addends.length === 0) {
        newstring = ["0", " "];
    }
    let finalstring = [sum, "=", ...newstring].join("").toString();
    finalstring = finalstring.slice(0, finalstring.length - 1);
    return finalstring;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    values.map((value: number): number => {
        if (values.length > 1 && values[0] < 0) return 0;
        sum += value;
        if (value < 0) {
            console.log("sum (found a neg number): ", sum);
            sum += value;
            return sum;
        }
        //console.log("sum (did not find a neg number): ", sum);
        //console.log("count: ", count);
        return sum;
    });
    const newArray = [...values];
    //newArray.findIndex((element) => element < 0);
    //console.log(newArray.findIndex((element) => element < 0));
    //console.log("last index: ", newArray.length - 1, " ", newArray[length - 1]);
    let insertNum = newArray.findIndex((element) => element < 0);
    if (insertNum !== -1) insertNum++;
    newArray.splice(
        newArray.findIndex((element) => element < 0) !== -1
            ? insertNum
            : newArray.length,
        0,
        sum
    );
    console.log("newArray: ", newArray);
    return newArray;
}
