function calc(target) {
  let result = document.getElementById("result");
  let clickButton = target.innerHTML;

  if(result.innerHTML == "" && (clickButton == "+" || clickButton == "-" || clickButton == "/" || clickButton == "*" || clickButton == "=")) {
    return;
  } else if(result.innerHTML == "" && clickButton == ".") {
    result.innerHTML = "0.";
  } else if(result.innerHTML == "" && clickButton == "00") {
    result.innerHTML = "0"
  } else if(result.innerHTML == "0" && (clickButton == "00" || clickButton == "0")) {
    return;
  } else if(result.innerHTML == "0" && (clickButton == "1" || clickButton == "2" || clickButton == "3" || clickButton == "4" || clickButton == "5" || clickButton == "6" || clickButton == "7" || clickButton == "8" || clickButton == "9")) {
    result.innerHTML = clickButton;
  } else if(((result.innerHTML.toString().slice(-1)) == "+" || (result.innerHTML.toString().slice(-1)) == "-" || (result.innerHTML.toString().slice(-1)) == "*" || (result.innerHTML.toString().slice(-1)) == "/") && (clickButton == "+" || clickButton == "-" || clickButton == "*" || clickButton == "/")) {
    result.innerHTML = result.innerHTML.slice(0, -1) + clickButton;
  } else if(((result.innerHTML.toString().slice(-1)) == "+" || (result.innerHTML.toString().slice(-1)) == "-" || (result.innerHTML.toString().slice(-1)) == "*" || (result.innerHTML.toString().slice(-1)) == "/") && clickButton == ".") {
    result.innerHTML += "0.";
  } else if(((result.innerHTML.toString().slice(-1)) == "+" || (result.innerHTML.toString().slice(-1)) == "-" || (result.innerHTML.toString().slice(-1)) == "*" || (result.innerHTML.toString().slice(-1)) == "/") && clickButton == "00") {
    result.innerHTML += "0";
  } else if(((result.innerHTML.toString().slice(-2)) == "+0" || (result.innerHTML.toString().slice(-2)) == "-0" || (result.innerHTML.toString().slice(-2)) == "*0" || (result.innerHTML.toString().slice(-2)) == "/0") && (clickButton == "00" || clickButton == "0")) {
    return;
  } else if(((result.innerHTML.toString().slice(-2)) == "+0" || (result.innerHTML.toString().slice(-2)) == "-0" || (result.innerHTML.toString().slice(-2)) == "*0" || (result.innerHTML.toString().slice(-2)) == "/0") && (clickButton == "1" || clickButton == "2" || clickButton == "3" || clickButton == "4" || clickButton == "5" || clickButton == "6" || clickButton == "7" || clickButton == "8" || clickButton == "9")) {
    result.innerHTML = result.innerHTML.slice(0, -1) + clickButton;
  } else if((result.innerHTML.toString().slice(-1)) == "." && clickButton == ".") {
    return;
  } else if((result.innerHTML.toString().slice(-1)) == "." && (clickButton == "+" || clickButton == "-" || clickButton == "*" || clickButton == "/")) {
    result.innerHTML = result.innerHTML.slice(0, -1) + clickButton;
  } else if(clickButton == "AC") {
      result.innerHTML = ""
    } else if(clickButton == "=") {
      result.innerHTML = eval(result.innerHTML)
    } else {
      result.innerHTML += clickButton
    }
  }