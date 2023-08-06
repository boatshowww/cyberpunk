var shipInfo;
var details;
var characterInfo;
var phr = new XMLHttpRequest();
var xhr = new XMLHttpRequest();

xhr.open('GET', "ships.json", true);
xhr.responseType = 'text';
xhr.send();

phr.open('GET', "characters.json", true);
phr.responseType = 'text';
phr.send();


xhr.onload = function() {
  if(xhr.status === 200) {
    shipInfo = JSON.parse(xhr.responseText);
    console.log(shipInfo);
  }
}

phr.onload = function() {
  if(phr.status === 200) {
    characterInfo = JSON.parse(phr.responseText);
    console.log(characterInfo);
  }
}



function calcShipHit(){
  let funShipClass = "";
  let ammoSpec = "";
  let rangeModifier = 0;
  let customModifier = document.getElementById('custom').value;
  let currentShipClass = document.getElementById("shipClass");
  let shipValue = currentShipClass.value;
  let currentAmmo = document.getElementById('ammo');
  let ammoValue = currentAmmo.value;
  let currentRange = document.getElementById('range').value;
  let finalDc = 0;

  console.log(shipValue);
  console.log(ammoValue);

  if (shipValue === "sloop") {
    funShipClass = shipInfo.ships[0].rangeDifficulty;
    console.log(funShipClass);
  } else if (shipValue === "schooner") {
    funShipClass = shipInfo.ships[1].rangeDifficulty;
    console.log(funShipClass);
  } else if (shipValue === "frigate") {
    funShipClass = shipInfo.ships[2].rangeDifficulty;
    console.log(funShipClass);
  } else if (shipValue === "galleon") {
    funShipClass = shipInfo.ships[3].rangeDifficulty;
    console.log(funShipClass);
  } else if (shipValue === "manowar") {
    funShipClass = shipInfo.ships[4].rangeDifficulty;
    console.log(funShipClass);
  }

  if (ammoValue === "9pounder") {
    ammoSpec = shipInfo.guns[0];
  } else if (ammoValue === "chainShot") {
    ammoSpec = shipInfo.guns[1];
    console.log(ammoSpec);
  } else if (ammoValue === "grapeShot") {
    ammoSpec = shipInfo.guns[2];
    if (currentRange > ammoSpec.maxRange) {
      document.getElementById('shootDiff').innerHTML = ("Out of Range")
    } else {
      document.getElementById('shootDiff').innerHTML = ("AutoHit")
    }
  }

  if (currentRange > ammoSpec.maxRange && ammoValue!= "grapeShot") {
    console.log("out of range");
    document.getElementById('shootDiff').innerHTML = ("Out of Range")
  }
  else if (currentRange <= ammoSpec.maxRange && currentRange > ammoSpec.avgRange && ammoValue!= "grapeShot") {
    console.log("max range");
    let rangeModifier = 5;
    finalDc = parseInt(funShipClass) + parseInt(rangeModifier) + parseInt(customModifier);
    console.log("Final DC: " + finalDc);
    document.getElementById('shootDiff').innerHTML = finalDc;
  } else if (currentRange < ammoSpec.avgRange && currentRange > ammoSpec.closeRange && ammoValue!= "grapeShot") {
    console.log("in range");
    finalDc = parseInt(funShipClass) + parseInt(rangeModifier) + parseInt(customModifier);
    console.log("Final DC: " + finalDc);
    document.getElementById('shootDiff').innerHTML = finalDc;
  } else if (currentRange < ammoSpec.closeRange && currentRange >ammoSpec.blankRange && ammoValue!= "grapeShot") {
    console.log("closing in");
    let rangeModifier = -2;
    finalDc = parseInt(funShipClass) + parseInt(rangeModifier) + parseInt(customModifier);
    console.log("Final DC: " + finalDc);
    document.getElementById('shootDiff').innerHTML = finalDc;
  } else if (currentRange <= ammoSpec.blankRange && ammoValue!= "grapeShot") {
    console.log("point blank, fire at will");
    let rangeModifier = -5;
    console.log(Math.sign(rangeModifier));
    finalDc = parseInt(funShipClass) + parseInt(rangeModifier) + parseInt(customModifier);
    console.log("Final DC: " + finalDc);
    document.getElementById('shootDiff').innerHTML = parseInt(finalDc);
  }

}


function returnCharacter() {
  let playerName = document.getElementById('playerCharacter').value;

  if (playerName === "Thomas Fulry") {
    console.log(characterInfo.players[2])

    localStorage.setItem("badass", characterInfo.players[2].stats.badass);
    localStorage.setItem("body", characterInfo.players[2].stats.body);
    localStorage.setItem("dexterity", characterInfo.players[2].stats.dexterity);
    localStorage.setItem("intelligence", characterInfo.players[2].stats.intelligence);
    localStorage.setItem("luck", characterInfo.players[2].stats.luck);
    localStorage.setItem("movement", characterInfo.players[2].stats.movement);
    localStorage.setItem("reflex", characterInfo.players[2].stats.reflex);
    localStorage.setItem("technology", characterInfo.players[2].stats.technology);
    localStorage.setItem("willpower", characterInfo.players[2].stats.willpower);
    localStorage.setItem("athletics", characterInfo.players[2].skills.athletics);
    localStorage.setItem("brawling", characterInfo.players[2].skills.brawling);
    localStorage.setItem("business", characterInfo.players[2].skills.business);
    localStorage.setItem("carpentry", characterInfo.players[2].skills.carpentry);
    localStorage.setItem("concentration", characterInfo.players[2].skills.concentration);
    localStorage.setItem("cooking", characterInfo.players[2].skills.cooking);
    localStorage.setItem("endurance", characterInfo.players[2].skills.endurance);
    localStorage.setItem("evasion", characterInfo.players[2].skills.evasion);
    localStorage.setItem("influence", characterInfo.players[2].skills.influence);
    localStorage.setItem("local_expert", characterInfo.players[2].skills.local_expert);
    localStorage.setItem("logic", characterInfo.players[2].skills.logic);
    localStorage.setItem("medicine", characterInfo.players[2].skills.medicine);
    localStorage.setItem("perception", characterInfo.players[2].skills.perception);
    localStorage.setItem("performance", characterInfo.players[2].skills.performance);
    localStorage.setItem("sea_vessel_piloting", characterInfo.players[2].skills.sea_vessel_piloting);
    localStorage.setItem("seawise", characterInfo.players[2].skills.seawise);
    localStorage.setItem("stealth", characterInfo.players[2].skills.stealth);
    localStorage.setItem("techsmith", characterInfo.players[2].skills.techsmith);
    localStorage.setItem("theft", characterInfo.players[2].skills.theft);
    localStorage.setItem("explosives", characterInfo.players[2].combat.explosives);
    localStorage.setItem("melee", characterInfo.players[2].combat.melee);
    localStorage.setItem("pistols", characterInfo.players[2].combat.pistols);
    localStorage.setItem("rifles", characterInfo.players[2].combat.rifles);
    localStorage.setItem("name", characterInfo.players[2].name);
  }

  else if (playerName === "Hayden Griffin") {
    console.log(characterInfo.players[0])

    localStorage.setItem("badass", characterInfo.players[0].stats.badass);
    localStorage.setItem("body", characterInfo.players[0].stats.body);
    localStorage.setItem("dexterity", characterInfo.players[0].stats.dexterity);
    localStorage.setItem("intelligence", characterInfo.players[0].stats.intelligence);
    localStorage.setItem("luck", characterInfo.players[0].stats.luck);
    localStorage.setItem("movement", characterInfo.players[0].stats.movement);
    localStorage.setItem("reflex", characterInfo.players[0].stats.reflex);
    localStorage.setItem("technology", characterInfo.players[0].stats.technology);
    localStorage.setItem("willpower", characterInfo.players[0].stats.willpower);
    localStorage.setItem("athletics", characterInfo.players[0].skills.athletics);
    localStorage.setItem("brawling", characterInfo.players[0].skills.brawling);
    localStorage.setItem("business", characterInfo.players[0].skills.business);
    localStorage.setItem("carpentry", characterInfo.players[0].skills.carpentry);
    localStorage.setItem("concentration", characterInfo.players[0].skills.concentration);
    localStorage.setItem("cooking", characterInfo.players[0].skills.cooking);
    localStorage.setItem("endurance", characterInfo.players[0].skills.endurance);
    localStorage.setItem("evasion", characterInfo.players[0].skills.evasion);
    localStorage.setItem("influence", characterInfo.players[0].skills.influence);
    localStorage.setItem("local_expert", characterInfo.players[0].skills.local_expert);
    localStorage.setItem("logic", characterInfo.players[0].skills.logic);
    localStorage.setItem("medicine", characterInfo.players[0].skills.medicine);
    localStorage.setItem("perception", characterInfo.players[0].skills.perception);
    localStorage.setItem("performance", characterInfo.players[0].skills.performance);
    localStorage.setItem("sea_vessel_piloting", characterInfo.players[0].skills.sea_vessel_piloting);
    localStorage.setItem("seawise", characterInfo.players[0].skills.seawise);
    localStorage.setItem("stealth", characterInfo.players[0].skills.stealth);
    localStorage.setItem("techsmith", characterInfo.players[0].skills.techsmith);
    localStorage.setItem("theft", characterInfo.players[0].skills.theft);
    localStorage.setItem("explosives", characterInfo.players[0].combat.explosives);
    localStorage.setItem("melee", characterInfo.players[0].combat.melee);
    localStorage.setItem("pistols", characterInfo.players[0].combat.pistols);
    localStorage.setItem("rifles", characterInfo.players[0].combat.rifles);
    localStorage.setItem("name", characterInfo.players[0].name);
  }
  else if (playerName === "Roger Stone") {
    console.log(characterInfo.players[1])

    localStorage.setItem("badass", characterInfo.players[1].stats.badass);
    localStorage.setItem("body", characterInfo.players[1].stats.body);
    localStorage.setItem("dexterity", characterInfo.players[1].stats.dexterity);
    localStorage.setItem("intelligence", characterInfo.players[1].stats.intelligence);
    localStorage.setItem("luck", characterInfo.players[1].stats.luck);
    localStorage.setItem("movement", characterInfo.players[1].stats.movement);
    localStorage.setItem("reflex", characterInfo.players[1].stats.reflex);
    localStorage.setItem("technology", characterInfo.players[1].stats.technology);
    localStorage.setItem("willpower", characterInfo.players[1].stats.willpower);
    localStorage.setItem("athletics", characterInfo.players[1].skills.athletics);
    localStorage.setItem("brawling", characterInfo.players[1].skills.brawling);
    localStorage.setItem("business", characterInfo.players[1].skills.business);
    localStorage.setItem("carpentry", characterInfo.players[1].skills.carpentry);
    localStorage.setItem("concentration", characterInfo.players[1].skills.concentration);
    localStorage.setItem("cooking", characterInfo.players[1].skills.cooking);
    localStorage.setItem("endurance", characterInfo.players[1].skills.endurance);
    localStorage.setItem("evasion", characterInfo.players[1].skills.evasion);
    localStorage.setItem("influence", characterInfo.players[1].skills.influence);
    localStorage.setItem("local_expert", characterInfo.players[1].skills.local_expert);
    localStorage.setItem("logic", characterInfo.players[1].skills.logic);
    localStorage.setItem("medicine", characterInfo.players[1].skills.medicine);
    localStorage.setItem("perception", characterInfo.players[1].skills.perception);
    localStorage.setItem("performance", characterInfo.players[1].skills.performance);
    localStorage.setItem("sea_vessel_piloting", characterInfo.players[1].skills.sea_vessel_piloting);
    localStorage.setItem("seawise", characterInfo.players[1].skills.seawise);
    localStorage.setItem("stealth", characterInfo.players[1].skills.stealth);
    localStorage.setItem("techsmith", characterInfo.players[1].skills.techsmith);
    localStorage.setItem("theft", characterInfo.players[1].skills.theft);
    localStorage.setItem("explosives", characterInfo.players[1].combat.explosives);
    localStorage.setItem("melee", characterInfo.players[1].combat.melee);
    localStorage.setItem("pistols", characterInfo.players[1].combat.pistols);
    localStorage.setItem("rifles", characterInfo.players[1].combat.rifles);
    localStorage.setItem("name", characterInfo.players[1].name);
  }
  else if (playerName === "generic_badguy") {
    console.log(characterInfo.npcs[0])

    localStorage.setItem("badass", characterInfo.npcs[0].stats.badass);
    localStorage.setItem("body", characterInfo.npcs[0].stats.body);
    localStorage.setItem("dexterity", characterInfo.npcs[0].stats.dexterity);
    localStorage.setItem("intelligence", characterInfo.npcs[0].stats.intelligence);
    localStorage.setItem("luck", characterInfo.npcs[0].stats.luck);
    localStorage.setItem("movement", characterInfo.npcs[0].stats.movement);
    localStorage.setItem("reflex", characterInfo.npcs[0].stats.reflex);
    localStorage.setItem("technology", characterInfo.npcs[0].stats.technology);
    localStorage.setItem("willpower", characterInfo.npcs[0].stats.willpower);
    localStorage.setItem("athletics", characterInfo.npcs[0].skills.athletics);
    localStorage.setItem("brawling", characterInfo.npcs[0].skills.brawling);
    localStorage.setItem("business", characterInfo.npcs[0].skills.business);
    localStorage.setItem("carpentry", characterInfo.npcs[0].skills.carpentry);
    localStorage.setItem("concentration", characterInfo.npcs[0].skills.concentration);
    localStorage.setItem("cooking", characterInfo.npcs[0].skills.cooking);
    localStorage.setItem("endurance", characterInfo.npcs[0].skills.endurance);
    localStorage.setItem("evasion", characterInfo.npcs[0].skills.evasion);
    localStorage.setItem("influence", characterInfo.npcs[0].skills.influence);
    localStorage.setItem("local_expert", characterInfo.npcs[0].skills.local_expert);
    localStorage.setItem("logic", characterInfo.npcs[0].skills.logic);
    localStorage.setItem("medicine", characterInfo.npcs[0].skills.medicine);
    localStorage.setItem("perception", characterInfo.npcs[0].skills.perception);
    localStorage.setItem("performance", characterInfo.npcs[0].skills.performance);
    localStorage.setItem("sea_vessel_piloting", characterInfo.npcs[0].skills.sea_vessel_piloting);
    localStorage.setItem("seawise", characterInfo.npcs[0].skills.seawise);
    localStorage.setItem("stealth", characterInfo.npcs[0].skills.stealth);
    localStorage.setItem("techsmith", characterInfo.npcs[0].skills.techsmith);
    localStorage.setItem("theft", characterInfo.npcs[0].skills.theft);
    localStorage.setItem("explosives", characterInfo.npcs[0].combat.explosives);
    localStorage.setItem("melee", characterInfo.npcs[0].combat.melee);
    localStorage.setItem("pistols", characterInfo.npcs[0].combat.pistols);
    localStorage.setItem("rifles", characterInfo.npcs[0].combat.rifles);
    localStorage.setItem("name", characterInfo.npcs[0].name);
  }
  else if (playerName === "bigger_badder") {
    console.log(characterInfo.npcs[1])

    localStorage.setItem("badass", characterInfo.npcs[1].stats.badass);
    localStorage.setItem("body", characterInfo.npcs[1].stats.body);
    localStorage.setItem("dexterity", characterInfo.npcs[1].stats.dexterity);
    localStorage.setItem("intelligence", characterInfo.npcs[1].stats.intelligence);
    localStorage.setItem("luck", characterInfo.npcs[1].stats.luck);
    localStorage.setItem("movement", characterInfo.npcs[1].stats.movement);
    localStorage.setItem("reflex", characterInfo.npcs[1].stats.reflex);
    localStorage.setItem("technology", characterInfo.npcs[1].stats.technology);
    localStorage.setItem("willpower", characterInfo.npcs[1].stats.willpower);
    localStorage.setItem("athletics", characterInfo.npcs[1].skills.athletics);
    localStorage.setItem("brawling", characterInfo.npcs[1].skills.brawling);
    localStorage.setItem("business", characterInfo.npcs[1].skills.business);
    localStorage.setItem("carpentry", characterInfo.npcs[1].skills.carpentry);
    localStorage.setItem("concentration", characterInfo.npcs[1].skills.concentration);
    localStorage.setItem("cooking", characterInfo.npcs[1].skills.cooking);
    localStorage.setItem("endurance", characterInfo.npcs[1].skills.endurance);
    localStorage.setItem("evasion", characterInfo.npcs[1].skills.evasion);
    localStorage.setItem("influence", characterInfo.npcs[1].skills.influence);
    localStorage.setItem("local_expert", characterInfo.npcs[1].skills.local_expert);
    localStorage.setItem("logic", characterInfo.npcs[1].skills.logic);
    localStorage.setItem("medicine", characterInfo.npcs[1].skills.medicine);
    localStorage.setItem("perception", characterInfo.npcs[1].skills.perception);
    localStorage.setItem("performance", characterInfo.npcs[1].skills.performance);
    localStorage.setItem("sea_vessel_piloting", characterInfo.npcs[1].skills.sea_vessel_piloting);
    localStorage.setItem("seawise", characterInfo.npcs[1].skills.seawise);
    localStorage.setItem("stealth", characterInfo.npcs[1].skills.stealth);
    localStorage.setItem("techsmith", characterInfo.npcs[1].skills.techsmith);
    localStorage.setItem("theft", characterInfo.npcs[1].skills.theft);
    localStorage.setItem("explosives", characterInfo.npcs[1].combat.explosives);
    localStorage.setItem("melee", characterInfo.npcs[1].combat.melee);
    localStorage.setItem("pistols", characterInfo.npcs[1].combat.pistols);
    localStorage.setItem("rifles", characterInfo.npcs[1].combat.rifles);
    localStorage.setItem("name", characterInfo.npcs[1].name);
  }
  else if (playerName === "baddest") {
    console.log(characterInfo.npcs[2])

    localStorage.setItem("badass", characterInfo.npcs[2].stats.badass);
    localStorage.setItem("body", characterInfo.npcs[2].stats.body);
    localStorage.setItem("dexterity", characterInfo.npcs[2].stats.dexterity);
    localStorage.setItem("intelligence", characterInfo.npcs[2].stats.intelligence);
    localStorage.setItem("luck", characterInfo.npcs[2].stats.luck);
    localStorage.setItem("movement", characterInfo.npcs[2].stats.movement);
    localStorage.setItem("reflex", characterInfo.npcs[2].stats.reflex);
    localStorage.setItem("technology", characterInfo.npcs[2].stats.technology);
    localStorage.setItem("willpower", characterInfo.npcs[2].stats.willpower);
    localStorage.setItem("athletics", characterInfo.npcs[2].skills.athletics);
    localStorage.setItem("brawling", characterInfo.npcs[2].skills.brawling);
    localStorage.setItem("business", characterInfo.npcs[2].skills.business);
    localStorage.setItem("carpentry", characterInfo.npcs[2].skills.carpentry);
    localStorage.setItem("concentration", characterInfo.npcs[2].skills.concentration);
    localStorage.setItem("cooking", characterInfo.npcs[2].skills.cooking);
    localStorage.setItem("endurance", characterInfo.npcs[2].skills.endurance);
    localStorage.setItem("evasion", characterInfo.npcs[2].skills.evasion);
    localStorage.setItem("influence", characterInfo.npcs[2].skills.influence);
    localStorage.setItem("local_expert", characterInfo.npcs[2].skills.local_expert);
    localStorage.setItem("logic", characterInfo.npcs[2].skills.logic);
    localStorage.setItem("medicine", characterInfo.npcs[2].skills.medicine);
    localStorage.setItem("perception", characterInfo.npcs[2].skills.perception);
    localStorage.setItem("performance", characterInfo.npcs[2].skills.performance);
    localStorage.setItem("sea_vessel_piloting", characterInfo.npcs[2].skills.sea_vessel_piloting);
    localStorage.setItem("seawise", characterInfo.npcs[2].skills.seawise);
    localStorage.setItem("stealth", characterInfo.npcs[2].skills.stealth);
    localStorage.setItem("techsmith", characterInfo.npcs[2].skills.techsmith);
    localStorage.setItem("theft", characterInfo.npcs[2].skills.theft);
    localStorage.setItem("explosives", characterInfo.npcs[2].combat.explosives);
    localStorage.setItem("melee", characterInfo.npcs[2].combat.melee);
    localStorage.setItem("pistols", characterInfo.npcs[2].combat.pistols);
    localStorage.setItem("rifles", characterInfo.npcs[2].combat.rifles);
    localStorage.setItem("name", characterInfo.npcs[2].name);
  }
}

function getCookieValue(name) {
  let result = document.cookie.match("(^|[^;]+)\s*" + name + "\s*=\s*([^;]+)")
  return result ? result.pop() : ""
}

function getLocalValue(localName) {
  let item = localStorage.getItem(localName)
  return item
}

function getLocal() {
  if (getLocalValue("badass") != "") {
    document.getElementById("badDisplay").innerHTML = getLocalValue("badass");
  }
  if (getLocalValue("intelligence") != "") {
    document.getElementById("intDisplay").innerHTML = getLocalValue("intelligence");
  }
  if (getLocalValue("reflex") != "") {
    document.getElementById("refDisplay").innerHTML = getLocalValue("reflex");
  }
  if (getLocalValue("dexterity") != "") {
    document.getElementById("dexDisplay").innerHTML = getLocalValue("dexterity");
  }
  if (getLocalValue("technology") != "") {
    document.getElementById("techDisplay").innerHTML = getLocalValue("technology");
  }
  if (getLocalValue("willpower") != "") {
    document.getElementById("willDisplay").innerHTML = getLocalValue("willpower");
  }
  if (getLocalValue("luck") != "") {
    document.getElementById("luckDisplay").innerHTML = getLocalValue("luck");
  }
  if (getLocalValue("movement") != "") {
    document.getElementById("moveDisplay").innerHTML = getLocalValue("movement");
  }
  if (getLocalValue("body") != "") {
    document.getElementById("bodyDisplay").innerHTML = getLocalValue("body");
  }
  if (getLocalValue("concentration") != "") {
    document.getElementById("concentrationDisplay").innerHTML = getLocalValue("concentration");
  }
  if (getLocalValue("perception") != "") {
    document.getElementById("perceptionDisplay").innerHTML = getLocalValue("perception");
  }
  if (getLocalValue("athletics") != "") {
    document.getElementById("athleticsDisplay").innerHTML = getLocalValue("athletics");
  }
  if (getLocalValue("stealth") != "") {
    document.getElementById("stealthDisplay").innerHTML = getLocalValue("stealth");
  }
  if (getLocalValue("endurance") != "") {
    document.getElementById("enduranceDisplay").innerHTML = getLocalValue("endurance");
  }
  if (getLocalValue("local_expert") != "") {
    document.getElementById("localExpertDisplay").innerHTML = getLocalValue("local_expert");
  }
  if (getLocalValue("brawling") != "") {
    document.getElementById("brawlingDisplay").innerHTML = getLocalValue("brawling");
  }
  if (getLocalValue("evasion") != "") {
    document.getElementById("evasionDisplay").innerHTML = getLocalValue("evasion");
  }
  if (getLocalValue("theft") != "") {
    document.getElementById("theftDisplay").innerHTML = getLocalValue("theft");
  }
  if (getLocalValue("influence") != "") {
    document.getElementById("influenceDisplay").innerHTML = getLocalValue("influence");
  }
  if (getLocalValue("sea_vessel_piloting") != "") {
    document.getElementById("seaVesselPilotingDisplay").innerHTML = getLocalValue("sea_vessel_piloting");
  }
  if (getLocalValue("seawise") != "") {
    document.getElementById("seawiseDisplay").innerHTML = getLocalValue("seawise");
  }
  if (getLocalValue("medicine") != "") {
    document.getElementById("medicineDisplay").innerHTML = getLocalValue("medicine");
  }
  if (getLocalValue("carpentry") != "") {
    document.getElementById("carpentryDisplay").innerHTML = getLocalValue("carpentry");
  }
  if (getLocalValue("techsmith") != "") {
    document.getElementById("techsmithDisplay").innerHTML = getLocalValue("techsmith");
  }
  if (getLocalValue("business") != "") {
    document.getElementById("businessDisplay").innerHTML = getLocalValue("business");
  }
  if (getLocalValue("cooking") != "") {
    document.getElementById("cookingDisplay").innerHTML = getLocalValue("cooking");
  }
  if (getLocalValue("performance") != "") {
    document.getElementById("performanceDisplay").innerHTML = getLocalValue("performance");
  }
  if (getLocalValue("logic") != "") {
    document.getElementById("logicDisplay").innerHTML = getLocalValue("logic");
  }
  if (getLocalValue("name") != "") {
    document.getElementById("nameH1").innerHTML = getLocalValue("name");
  }
  if (getLocalValue("body") != "" && getLocalValue("willpower") != "")  {
    let hp = getLocalValue("body") + getLocalValue("willpower");
    hp = hp/2 + 10;
    localStorage.setItem("hp", hp)
  }
}

function popHp() {
  //return the player's calculated HP total as an integer
  var maxHp = getLocalValue("hp");
  maxHp = parseInt(maxHp);
  //return the input field that will set the HP
  var inputField = document.getElementById('hp');
  inputField.value = maxHp
}




function rollDice(arg) {
  let dValue = 1 + Math.floor(Math.random()*arg)
  document.getElementById("rawValue").innerHTML = dValue;
  document.getElementById("dieValue").innerHTML = 0;
  }



function attributeRoll(attributeId) {
  let attInt = document.getElementById(attributeId).innerText;
  let intInt = parseInt(attInt)
  let rollValue = 1 + Math.floor(Math.random()*10)
  let statValue = rollValue + intInt;
  console.log(statValue);
  document.getElementById("dieValue").innerHTML = rollValue;
  document.getElementById("rawValue").innerHTML = statValue;
}

function intelligenceSkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("intDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10);
  let totalValue = rollValue + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
  document.getElementById("rawValue").innerHTML = totalValue;
}

function willpowerSkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("willDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10);
  let totalValue = rollValue + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
  document.getElementById("rawValue").innerHTML = totalValue;
}

function reflexSkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("refDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10);
  let totalValue = rollValue + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
  document.getElementById("rawValue").innerHTML = totalValue;
}

function dexteritySkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("dexDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10);
  let totalValue = rollValue + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
  document.getElementById("rawValue").innerHTML = totalValue;
}

function technologySkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("techDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10);
  let totalValue = rollValue + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
  document.getElementById("rawValue").innerHTML = totalValue;
}

function badassSkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("badDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10);
  let totalValue = rollValue + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
  document.getElementById("rawValue").innerHTML = totalValue;
}

function willpowerSkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("willDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10);
  let totalValue = rollValue + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
  document.getElementById("rawValue").innerHTML = totalValue;
}

function bodySkillRoll(skillId) {
  let skillInt = document.getElementById(skillId).innerText;
  let attInt = document.getElementById("bodyDisplay").innerText;
  let integerSkill = parseInt(skillInt);
  let integerAtt = parseInt(attInt);
  let rollValue = 1 + Math.floor(Math.random()*10);
  let totalValue = rollValue + integerSkill + integerAtt;
  document.getElementById("dieValue").innerHTML = rollValue;
  document.getElementById("rawValue").innerHTML = totalValue;
}


  function combatRoll(combatStat, combatSkill) {
    let skillNumber = localStorage.getItem(combatSkill);
    let statNumber = getLocalValue(combatStat);
    let skillNum = parseInt(skillNumber);
    let statNum = parseInt(statNumber);
    let rollValue = 1 + Math.floor(Math.random()*10);
    let totalValue = rollValue + skillNum + statNum;
    document.getElementById("dieValue").innerHTML = rollValue;
    document.getElementById("rawValue").innerHTML = totalValue;
  }

  function dmgRoll(n) {
    var a = Array(n);
    var sum = 0;
    for (var i = 0; i < n; i++) {
      a[i] = Math.floor(Math.random() * 6) + 1;
      sum += a[i];
    }
    document.getElementById("dieValue").innerHTML = sum;
  }
let hitCount = 0;
let critCount = 0;
  function cannonBarrage() {
    let hitArray = [];
    let critArray = [];
    let ncb = document.getElementById('noCan').value;
    let dc = document.getElementById('difficulty').value;
    let skillNumber = localStorage.getItem('explosives');
    let statNumber = getLocalValue('reflex');
    let skillNum = parseInt(skillNumber);
    let statNum = parseInt(statNumber);
    for (let i = 0; i < ncb; i++) {      
      let rollValue = 1 + Math.floor(Math.random()*10);
      let totalValue = rollValue + skillNum + statNum;
     // console.log(totalValue);
      if (totalValue >= dc) {
        hitArray.push(totalValue);
      }
      if (rollValue == 10) {
        critArray.push(rollValue);
      }
    }
    console.log(hitArray);
    console.log(critArray);

    critCount = critArray.length;
    for (let i = 0; i < critCount; i++) {
      let rollValue = 1 + Math.floor(Math.random()*10);
      while (rollValue === 10) {
        hitArray.push(rollValue);
        console.log("Crit hit is " + rollValue);
        rollValue = 1 + Math.floor(Math.random()*10);
      };
      hitArray.push(rollValue);
      console.log("Crit hit is " + rollValue);
    }
    hitCount = hitArray.length;
    console.log("hit count = " + hitCount);
    console.log(hitArray);
    document.getElementById("hitCountTotal").innerHTML = hitCount;
  }

// Enter the final hit count from the barrage as finalCount, and select targeting parameters
function barrageDamage() {
  let finalCount = parseInt(document.getElementById('hitCountTotal').innerHTML);
  console.log("hit count total is " + finalCount);
  let ammoType = document.getElementById('ammo').value;
  console.log(ammoType);
  let target = document.getElementById('target').value;
  console.log(target);
  let damageTotal = 0;
  if (target == "hull" && ammoType == "9pounder") {
    for (let i = 0; i < finalCount; i++) {
      damageRoll = (1 + Math.floor(Math.random()*6))*5;
      damageTotal += damageRoll;
    }
 
  }
  if (target == "masts" && ammoType == "9pounder") {
    for (let i = 0; i < finalCount; i++) {
      damageRoll = (1 + Math.floor(Math.random()*6));
      damageTotal += damageRoll;
    }
  }
  if (target == "hull" && ammoType == "chainShot") {
    for (let i = 0; i < finalCount; i++) {
      damageRoll = (1 + Math.floor(Math.random()*6));
      damageTotal += damageRoll;
    }
  }
  if (target == "masts" && ammoType == "chainShot") {
    for (let i = 0; i < finalCount; i++) {
      damageRoll = (1 + Math.floor(Math.random()*6))*5;
      damageTotal += damageRoll;
    }
  } 
  console.log("Damage total is " + damageTotal)
  document.getElementById("cannonDamage").innerHTML = damageTotal
}

function getDown(enemyHits) {
  let woundArray = []
  for (let i = 0; i < enemyHits; i++) {
    let woundRoll = 1 + Math.floor(Math.random()*10);
   // console.log(woundRoll);
    if (woundRoll === 1) {
      woundArray.push(woundRoll);
    }
    while (woundRoll === 10) {
      woundArray.push(woundRoll);
      woundRoll = 1 + Math.floor(Math.random()*10);
     // console.log("Crit Wound");
    }
  }
  console.log(woundArray.length)
}