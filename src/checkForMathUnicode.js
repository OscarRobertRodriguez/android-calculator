
const checkForMathUnicode = function checkForMathUnicode(value) {
	   if (!value.includes('÷') && !value.includes('+') && !value.includes('×') && !value.includes('−')) {
         return false;
     }
     return true;
}

export default checkForMathUnicode; 