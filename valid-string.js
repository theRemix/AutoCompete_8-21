const { stdin, stdout } = process
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
});


const validString = line => {
  const results = line.split('').reduce(({result, prev}, letter) =>
    result.hasOwnProperty(letter) && prev === letter ?
      {
        result : {
          ...result,
          [letter]: result[letter]+1
        },
        prev: letter
      } :
      {
        result: {
          ...result,
          [letter]: 1
        },
        prev: letter
      }
  ,{ result: {}, prev: '' })

  if( Object.values(results.result).find(r => r > 2) ) {
    console.log(false)
    process.exit(0)
  }
}


rl.on('line', validString)

rl.on('close', () => console.log(true))
