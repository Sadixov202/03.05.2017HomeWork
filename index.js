function ucbucaq(A, B, C) {
    if ((A + B > C) || (A + C > B) || (B + C > A)) {
        if (A + B + C <= 100) {
            if ((A ==C) && (B == A) && (C == B)) {
                return 'beraber terefli ucbucaqdir';
            } else if ((A ==C) || (B == A) || (C == B)){
                return 'beraber yanli ucbucaqdir';
            }else{
                return 'ucbucaqdir';
            }
        } else {
            return 'beraber terefli ucbucaq deyil';
        }
    } else {
        return 'beraber terefli ucbucaq deyil';
    }

}



var A = Number(prompt('reqemi daxil et'));
var B = Number(prompt('reqemi daxil et'));
var C = Number(prompt('reqemi daxil et'));

ucbucaq(A, B, C);
console.log(ucbucaq(A,B,C));
