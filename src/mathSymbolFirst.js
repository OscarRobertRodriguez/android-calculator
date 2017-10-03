
import checkForMathUnicode from './checkForMathUnicode';


function mathSymbolFirst (a) {
	let input = document.querySelector('.screen_input');
  if(checkForMathUnicode(a) && input.value.length === 1 || input.value.length == 0) {
  	return true;
  } 
  else {
  return false;
   }
}

export default mathSymbolFirst; 