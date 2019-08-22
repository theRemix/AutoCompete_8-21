const { stdin, stdout } = process
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
});

let message = ''

const cipher = {
  '00': 'a',
  '01': 'b',
  '02': 'c',
  '03': 'd',
  '04': 'e',
  '05': 'f',
  '06': 'g',
  '07': 'h',
  '08': 'i',
  '09': 'j',
  '10': 'k',
  '11': 'l',
  '12': 'm',
  '13': 'n',
  '14': 'o',
  '15': 'p',
  '16': 'q',
  '17': 'r',
  '18': 's',
  '19': 't',
  '20': 'u',
  '21': 'v',
  '22': 'w',
  '23': 'x',
  '24': 'y',
  '25': 'z',
}

const decode = line => {
  const characters = line.split('')

  let isCode = false // starts with 0,1,2

  let char = characters.shift()
  let last = ''
  while(characters.length){
    if(isCode){
      message += cipher[last+char]
      isCode = false
    } else if( ['0','1','2'].includes(char) ){
      isCode = true
    }

    last = char
    char = characters.shift()
  }

  console.log(message)
}

rl.on('line', decode)
