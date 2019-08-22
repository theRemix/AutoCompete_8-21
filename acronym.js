const { stdin, stdout } = process
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
});

rl.on('line', line =>
  console.log(line.split('').filter(a => a.match(/[A-Z]/)).join(''))
)

