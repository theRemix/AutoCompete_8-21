const { stdin, stdout } = process
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
});

const clues = {
  suspects: [],
  weapons: [],
  rooms: [],
}

const format = clues => [
  clues.suspects[0],
  `in the ${clues.rooms[0]}`,
  `with the ${clues.weapons[0]}`,
]

const removeClue = clue => {
  clues.suspects = clues.suspects.filter(s => s !== clue)
  clues.weapons = clues.weapons.filter(s => s !== clue)
  clues.rooms = clues.rooms.filter(s => s !== clue)
}

const parseLines = line => {
  switch(true){
    case line.startsWith('Suspects'):
      line.split('Suspects:').pop().split(',').forEach(s => clues.suspects.push(s))
      break
    case line.startsWith('Weapons'):
      line.split('Weapons:').pop().split(',').forEach(s => clues.weapons.push(s))
      break
    case line.startsWith('Rooms'):
      line.split('Rooms:').pop().split(',').forEach(s => clues.rooms.push(s))
      break
    case line.startsWith('not'):
      line.split('not the ').length > 1 ?
        removeClue(line.split('not the ').pop()) :
      line.split('not ').length > 1 ?
        removeClue(line.split('not ').pop()) : null
      break
  }
}

rl.on('line', parseLines)

rl.on('close', () => console.log(format(clues).join('\n')))
