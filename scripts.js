function getCookieValue(name) {
  let result = document.cookie.match("(^|[^;]+)\s*" + name + "\s*=\s*([^;]+)")
  return result ? result.pop() : ""
}

function getCookie() {
  if (getCookieValue("intCookie") != "") {
    document.getElementById("intDisplay").innerHTML = getCookieValue("intCookie");
  }
  if (getCookieValue("refCookie") != "") {
    document.getElementById("refDisplay").innerHTML = getCookieValue("refCookie");
  }
  if (getCookieValue("dexCookie") != "") {
    document.getElementById("dexDisplay").innerHTML = getCookieValue("dexCookie");
  }
  if (getCookieValue("techCookie") != "") {
    document.getElementById("techDisplay").innerHTML = getCookieValue("techCookie");
  }
  if (getCookieValue("coolCookie") != "") {
    document.getElementById("coolDisplay").innerHTML = getCookieValue("coolCookie");
  }
  if (getCookieValue("willCookie") != "") {
    document.getElementById("willDisplay").innerHTML = getCookieValue("willCookie");
  }
  if (getCookieValue("luckCookie") != "") {
    document.getElementById("luckDisplay").innerHTML = getCookieValue("luckCookie");
  }
  if (getCookieValue("moveCookie") != "") {
    document.getElementById("moveDisplay").innerHTML = getCookieValue("moveCookie");
  }
  if (getCookieValue("bodyCookie") != "") {
    document.getElementById("bodyDisplay").innerHTML = getCookieValue("bodyCookie");
  }
  if (getCookieValue("empCookie") != "") {
    document.getElementById("empDisplay").innerHTML = getCookieValue("empCookie");
  }
  if (getCookieValue("nameCookie") != "") {
    document.getElementById("welcome").innerHTML = getCookieValue("nameCookie");
  }
}

function rollDice(arg) {
  let dValue = 1 + Math.floor(Math.random()*arg)
  document.getElementById("dieValue").innerHTML = dValue;
  }

  function returnText(){
  let intValue = document.getElementById("int").value;
    if (intValue != "") {
      document.getElementById("intDisplay").innerHTML = intValue;
      document.cookie = "intCookie=" + intValue;
    }
  let refValue = document.getElementById("ref").value;
    if (refValue != "") {
      document.getElementById("refDisplay").innerHTML = refValue;
      document.cookie = "refCookie=" + refValue;
    }
  let dexValue = document.getElementById("dex").value;
    if (dexValue != "") {
      document.getElementById("dexDisplay").innerHTML = dexValue;
      document.cookie = "dexCookie=" + dexValue;
    }
  let techValue = document.getElementById("tech").value;
    if (techValue != "") {
      document.getElementById("techDisplay").innerHTML = techValue;
      document.cookie = "techCookie=" + techValue;
    }
  let badValue = document.getElementById("bad").value;
    if (badValue != "") {
      document.getElementById("badDisplay").innerHTML = badValue;
      document.cookie = "badCookie=" + badValue;
    }
  let willValue = document.getElementById("will").value;
    if (willValue != "") {
      document.getElementById("willDisplay").innerHTML = willValue;
      document.cookie = "willCookie=" + willValue;
    }
  let luckValue = document.getElementById("luck").value;
    if (luckValue != "") {
      document.getElementById("luckDisplay").innerHTML = luckValue;
      document.cookie = "luckCookie=" + luckValue;
    }
  let moveValue = document.getElementById("move").value;
    if (moveValue != "") {
      document.getElementById("moveDisplay").innerHTML = moveValue;
      document.cookie = "moveCookie=" + moveValue;
    }
  let bodyValue = document.getElementById("body").value;
    if (bodyValue != "") {
      document.getElementById("bodyDisplay").innerHTML = bodyValue;
      document.cookie = "bodyCookie=" + bodyValue;
    }
/*  let empValue = document.getElementById("emp").value;
    if (empValue != "") {
      document.getElementById("empDisplay").innerHTML = "EMP = " + empValue;
      document.cookie = "empCookie=" + empValue;
    }
  let nameValue = document.getElementById("name").value;
    if (nameValue != "") {
      document.getElementById("welcome").innerHTML = "Welcome back, " + nameValue;
      document.cookie = "nameCookie=" + nameValue;
    } */
  //alert("Stats Updated");
  //return false;
}

function attributeRoll(attributeId) {
  let attInt = document.getElementById(attributeId).innerText;
/*  console.log(attInt);
  let subInt = attInt.slice(6);
  console.log(attInt.substring(6));
  let intParse = parseInt(subInt, 10);
  console.log(intParse); */
  let intInt = parseInt(attInt)
  let statValue = 1 + Math.floor(Math.random()*10) + intInt;
  console.log(statValue);
/*  let dieStr = rollDice(10);
  console.log(dieStr);
  let dieInt = parseInt(dieStr, 10);
  let attValue = dieInt + intParse;
  document.getElementById("dieValue").innerHTML = subInt; */
}

function statFunction(blockId) {
  var x = document.getElementById(blockId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
