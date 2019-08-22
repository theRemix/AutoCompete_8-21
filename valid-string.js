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

  console.log( Object.values(results.result).find(r => r > 2) === undefined)
}


rl.on('line', validString)
