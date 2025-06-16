const palindromes = function (str) {
    let i = 0
    let j = str.length - 1;
    while(i < j) {
        if (/[^A-Za-z0-9]/.test(str[i]) || str[i] == ' ') {
                i++;
                continue;
        }

         if (/[^A-Za-z0-9]/.test(str[j]) || str[j] == ' ') {
                j--;
                continue;
        }

        if(str[i].toLowerCase() !== str[j].toLowerCase()) {
                return false;
        }
        i++;
        j--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
