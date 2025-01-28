let num = "";

  function calculate(value) {
    num += value;
    document.getElementById("display").textContent = num;
  }

  function result() {
    const finEl = eval(num);
    document.getElementById("display").textContent = finEl;
    num = finEl.toString();
  }

  function clearDisplay() {
    num = "";
    document.getElementById("display").textContent = "0";
  }
  function backclear(){
    num = num.slice(0,-1);
    result();
  }