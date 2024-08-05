

const codonProteinArray = [
    { codon: ['AUG'], protein: 'Methionine' },
    { codon: ['UUU', 'UUC'], protein: 'Phenylalanine' },
    { codon: ['UUA', 'UUG'], protein: 'Leucine' },
    { codon: ['UCU', 'UCC', 'UCA', 'UCG'], protein: 'Serine' },
    { codon: ['UAU', 'UAC'], protein: 'Tyrosine' },
    { codon: ['UGU', 'UGC'], protein: 'Cysteine' },
    { codon: ['UGG'], protein: 'Tryptophan' },
    { codon: ['UAA', 'UAG', 'UGA'], protein: 'STOP' }
];

// the template into packs of three
const splitIntoCodons = (seq) => {
    const codons = [];
    for (let i = 0; i < seq.length; i += 3) {
        codons.push(seq.substring(i, i + 3));
    }
    return codons;
};

// translate codons to as
const translateCodonsToProteins = (codons) => {
    const proteins = [];

    for (const codon of codons) {
        let found = false;
        for (const entry of codonProteinArray) {

            if (entry.codon.includes(codon)) {
                found = true;
                if (entry.protein === 'STOP') {
                    return proteins;
                    break;
                }
                proteins.push(entry.protein);
            }
        };
        if (!found) {
            throw new Error(`Error: invalid codon ${codon}`);
        }
    }
    return proteins;

};


export const translation = (seq) => {
    const codons = splitIntoCodons(seq);
    if (codons.length == 0) {
        return 'there is template to translate'
    }
    const proteins = translateCodonsToProteins(codons);
    return proteins.join(',');
};

console.log(translation('AUGUUUUCUUAAAUG'));

