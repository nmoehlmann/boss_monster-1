let gold = 0

const heroes = [
  {
      name: 'ganondorf',
      type: 'Demon',
      damage: 5,
      health: 100
  },
  {
      name: 'link',
      type: 'elf',
      damage: 10,
      health: 50
  }
]



const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}

function attackBoss() {
  let heroDmg = 0
  heroes.forEach(h => heroDmg += h.damage)
  console.log(heroDmg , "hero damage total")
  boss.health -= heroDmg
  console.log(boss.health , "boss health")
  
  bossAttacks()
  drawHeroesHealth()
  bossDeath()
  drawBossHealth()
  heroDeath()
}


function drawBossHealth() {
  document.getElementById("bossHealth").innerText = boss.health
}

function bossAttacks() {
  let bossDmg = Math.floor(Math.random() * 10)
  console.log(bossDmg , "boss damage")
  heroes.forEach(h => h.health -= bossDmg)
}

function drawHeroesHealth() {
  document.getElementById("ganondorfHealth").innerText = heroes[0].health
  document.getElementById("linkHealth").innerText = heroes[1].health
}

function bossDeath() {
  if (boss.health <= 0) {
    boss.health = 0
    boss.level++
    boss.health += 100 * boss.level
    document.getElementById("bossLevel").innerText = boss.level
    document.getElementById("gold").innerText = gold += 100 * boss.level
  }
}

function healLink() {
  if(gold < 100) {
    return
  }
  else {
    heroes[0].health += 25
    gold -= 100
    document.getElementById("linkHealth").innerText = heroes[0].health
    document.getElementById("gold").innerText = gold
  }
}

function healGanondorf() {
  if(gold < 100) {
    return
  }
  else {
    heroes[1].health += 25
    gold -= 100
    document.getElementById("ganondorfHealth").innerText = heroes[1].health
    document.getElementById("gold").innerText = gold
  }
}

function heroDeath() {
  if (heroes[0].health <= 0){
  document.getElementById("ganondorfHealth").innerText = "☠"
  }
}