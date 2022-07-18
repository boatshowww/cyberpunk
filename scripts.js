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
  document.getElementById("dieValue").innerHTML = statValue;
/*  let dieStr = rollDice(10);
  console.log(dieStr);
  let dieInt = parseInt(dieStr, 10);
  let attValue = dieInt + intParse;
  document.getElementById("dieValue").innerHTML = subInt; */
}

function intelligenceSkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("intDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10) + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
}

function willpowerSkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("willDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10) + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
}

function reflexSkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("refDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10) + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
}

function dexteritySkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("dexDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10) + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
}

function technologySkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("techDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10) + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
}

function badassSkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("badDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10) + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
}

function willpowerSkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("willDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10) + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
}

function bodySkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("bodyDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10) + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
}


function statFunction(blockId) {
  var x = document.getElementById(blockId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function setLocal() {
  let concValue = document.getElementById("concentration").value;
    if (concValue != "") {
      localStorage.setItem("concentration", concValue);
    }
  let concealValue = document.getElementById("conceal").value;
    if (concValue != "") {
      localStorage.setItem("conceal", concealValue);
    }
  let lipValue = document.getElementById("lip-reading").value;
    if (lipValue != "") {
      localStorage.setItem("lip-reading", lipValue);
    }
  let percValue = document.getElementById("perception").value;
    if (percValue != "") {
      localStorage.setItem("perception", percValue);
    }
  let trackValue = document.getElementById("tracking").value;
    if (trackValue != "") {
      localStorage.setItem("tracking", trackValue);
    }
  let athValue = document.getElementById("athletics").value;
    if (athValue != "") {
      localStorage.setItem("athletics", athValue);
    }
  let contValue = document.getElementById("contortionist").value;
    if (contValue != "") {
      localStorage.setItem("contortionist", contValue);
    }
  let danceValue = document.getElementById("dance").value;
    if (danceValue != "") {
      localStorage.setItem("dance", danceValue);
    }
  let endValue = document.getElementById("endurance").value;
    if (endValue != "") {
      localStorage.setItem("endurance", endValue);
    }
  let restValue = document.getElementById("resist-torture").value;
    if (restValue != "") {
      localStorage.setItem("resist-torture", restValue);
    }
  let stealthValue = document.getElementById("stealth").value;
    if (stealthValue != "") {
      localStorage.setItem("stealth", stealthValue);
    }
  let pilotValue = document.getElementById("piloting").value;
    if (pilotValue != "") {
      localStorage.setItem("piloting", pilotValue);
    }
  let accountingValue = document.getElementById("accounting").value;
    if (accountingValue != "") {
      localStorage.setItem("accounting", accountingValue);
    }
  let animalValue = document.getElementById("animal-handling").value;
    if (animalValue != "") {
      localStorage.setItem("animal-handling", animalValue);
    }
  let cookValue = document.getElementById("cooking").value;
    if (cookValue != "") {
      localStorage.setItem("cooking", cookValue);
    }
  let businessValue = document.getElementById("business").value;
    if (businessValue != "") {
      localStorage.setItem("business", businessValue);
    }
  let compositionValue = document.getElementById("composition").value;
    if (compositionValue != "") {
      localStorage.setItem("composition", compositionValue);
    }
  let deductionValue = document.getElementById("deduction").value;
    if (deductionValue != "") {
      localStorage.setItem("deduction", deductionValue);
    }
  let educationValue = document.getElementById("education").value;
    if (educationValue != "") {
      localStorage.setItem("education", educationValue);
    }
  let gamblingValue = document.getElementById("gambling").value;
    if (gamblingValue != "") {
      localStorage.setItem("gambling", gamblingValue);
    }
  let languageValue = document.getElementById("language").value;
    if (languageValue != "") {
      localStorage.setItem("language", languageValue);
    }
  let researchValue = document.getElementById("research").value;
    if (researchValue != "") {
      localStorage.setItem("research", researchValue);
    }
  let localValue = document.getElementById("local-expert").value;
    if (localValue != "") {
      localStorage.setItem("local-expert", localValue);
    }
  let scienceValue = document.getElementById("science").value;
    if (scienceValue != "") {
      localStorage.setItem("science", scienceValue);
    }
  let tacticsValue = document.getElementById("tactics").value;
    if (tacticsValue != "") {
      localStorage.setItem("tactics", tacticsValue);
    }
  let survivalValue = document.getElementById("survival").value;
    if (survivalValue != "") {
      localStorage.setItem("survival", survivalValue);
    }
  let brawlingValue = document.getElementById("brawling").value;
    if (brawlingValue != "") {
      localStorage.setItem("brawling", brawlingValue);
    }
  let evasionValue = document.getElementById("evasion").value;
    if (evasionValue != "") {
      localStorage.setItem("evasion", evasionValue);
    }
  let meleeValue = document.getElementById("melee").value;
    if (meleeValue != "") {
      localStorage.setItem("melee", meleeValue);
    }
  let actValue = document.getElementById("acting").value;
    if (actValue != "") {
      localStorage.setItem("acting", actValue);
    }
  let instrumentValue = document.getElementById("instrument").value;
    if (instrumentValue != "") {
      localStorage.setItem("instrument", instrumentValue);
    }
  let archeryValue = document.getElementById("archery").value;
    if (archeryValue != "") {
      localStorage.setItem("archery", archeryValue);
    }
  let pistolsValue = document.getElementById("pistols").value;
    if (pistolsValue != "") {
      localStorage.setItem("pistols", pistolsValue);
    }
  let riflesValue = document.getElementById("rifles").value;
    if (riflesValue != "") {
      localStorage.setItem("rifles", riflesValue);
    }
  let explosivesValue = document.getElementById("explosives").value;
    if (explosivesValue != "") {
      localStorage.setItem("explosives", explosivesValue);
    }
  let charismaValue = document.getElementById("charisma").value;
    if (charismaValue != "") {
      localStorage.setItem("charisma", charismaValue);
    }
  let empathyValue = document.getElementById("empathy").value;
    if (empathyValue != "") {
      localStorage.setItem("empathy", empathyValue);
    }
  let interrogationValue = document.getElementById("interrogation").value;
    if (interrogationValue != "") {
      localStorage.setItem("interrogation", interrogationValue);
    }
  let persuasionValue = document.getElementById("persuasion").value;
    if (persuasionValue != "") {
      localStorage.setItem("persuasion", persuasionValue);
    }
  let styleValue = document.getElementById("style").value;
    if (styleValue != "") {
      localStorage.setItem("style", styleValue);
    }
  let seawiseValue = document.getElementById("seawise").value;
    if (seawiseValue != "") {
      localStorage.setItem("seawise", seawiseValue);
    }
  let medicineValue = document.getElementById("medicine").value;
    if (medicineValue != "") {
      localStorage.setItem("medicine", medicineValue);
    }
  let theftValue = document.getElementById("theft").value;
    if (theftValue != "") {
      localStorage.setItem("theft", theftValue);
    }
  let carpentryValue = document.getElementById("carpentry").value;
    if (carpentryValue != "") {
      localStorage.setItem("carpentry", carpentryValue);
    }
  let techsmithValue = document.getElementById("techsmith").value;
    if (techsmithValue != "") {
      localStorage.setItem("techsmith", techsmithValue);
    }
  }
