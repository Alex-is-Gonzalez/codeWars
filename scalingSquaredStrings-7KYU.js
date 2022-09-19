function scale(strng, k, n) {
    // your code
 return strng.replace(/./g, `$&`.repeat(k)).replace(/.+/g, `$&\n`.repeat(n).trim());
}