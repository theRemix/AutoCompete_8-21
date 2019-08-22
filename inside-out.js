const { stdin, stdout } = process
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
});

// [[head][tail]]
const flipReverse = line => {
  const letters = line.split('')
  const half = letters.length/2
  return [letters.slice(0,half/2+1).reverse(), letters.slice(half).reverse()]
}

const insideOut = line => {
  switch(true){
    case line.length <= 1:
      console.log(line+line)
      break
    case line.length % 2 === 0:
      console.log(flipReverse(line).map(l => l.join('')).join(''))
      break
    case line.length % 2 !== 0:
      let letters = line.split('')
      const middle = letters.splice(letters.length/2,1)
      letters.splice(letters.length/2, 0, middle[0], middle[0])
      console.log(flipReverse(letters.join('')).map(l => l.join('')).join(''))
  }
}

rl.on('line', insideOut)
