const letters = ["a", "á", "à", "ã", "â", "e", "é", "è", "ê", "i", "í", "ì", "î", "o", "ó", "ò", "õ", "ô", "u", "ú", "ù", "û"];

function howMany(entry) {
	let qntd = 0;
	const word = entry.toLowerCase();

	for (const letter of word) {
		if (letters.includes(letter)) {
			qntd++;
		}
	}

	console.log(`A palavra "${entry}" tem ${qntd} vogais.`);
}

howMany("Olá Mundo");
