const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********' : ' ',
};

function decode(expr) {
    let str = '';
    let decoder = '';
    let  lengthExpr = expr.length;
    for ( let i = 0;  i < lengthExpr; i = i + 10 ) {
        if ( lengthExpr > 0 ) {
            str = expr.slice ( 0, 10 ).replace(/00/g, '')
                                      .replace(/10/g, '.')
                                      .replace(/11/g, '-');          
            expr = expr.slice ( 10 );
        }
        decoder = decoder  + MORSE_TABLE [ str ] || ' ';
    }
    return decoder
};

module.exports = {
    decode
}