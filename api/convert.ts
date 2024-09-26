import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { message } = req.query
  function binaryToText(binary) {
  return binary
    .split(' ')
    .map(b => String.fromCharCode(parseInt(b, 2)))
    .join('');
}

function textToBinary(text) {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
}

  if (message) {

    if (/^[01\s]+$/.test(message.trim())) {
      // It looks like binary code
      const binaryCode = message.trim();
      const convertedText = binaryToText(binaryCode);
      return res.json({
    result: convertedText,
  })
    } else {
      // It's regular text, convert to binary
      const binaryCode = textToBinary(message);
      return res.json({
    result: binaryCode,
  })
    }
  }
});
  
}
