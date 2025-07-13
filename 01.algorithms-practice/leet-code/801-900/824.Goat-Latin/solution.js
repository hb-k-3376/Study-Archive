/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  sentence = sentence.split(' ');

  const answer = [];
  for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i];
    const firstLetter = word[0].toLowerCase();
    const suffix = 'a'.repeat(i + 1);

    word = vowels.has(firstLetter) ? word : word.slice(1) + word[0];

    answer.push(word + 'ma' + suffix);
  }

  return answer.join(' ');
};
