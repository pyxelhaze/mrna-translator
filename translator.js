
const codonProteinArray = [
    { codon: ['UUU', 'UUC'], protein: 'Phenylalanine' },
    { codon: ['UUA', 'UUG'], protein: 'Leucine' },
    { codon: ['UCU', 'UCC', 'UCA', 'UCG'], protein: 'Serine' },
    { codon: ['UAU', 'UAC'], protein: 'Tyrosine' },
    { codon: ['UGU', 'UGC'], protein: 'Cysteine' },
    { codon: ['UGG'], protein: 'Tryptophan' },
    { codon: ['UAA', 'UAG', 'UGA'], protein: 'STOP' },
    { codon: ['AAA', 'AAG'], protein: 'Lysine' },
    { codon: ['AAC', 'AAU'], protein: 'Asparagine' },
    { codon: ['ACA', 'ACC', 'ACG', 'ACU'], protein: 'Threonine' },
    { codon: ['AGA', 'AGG'], protein: 'Arginine' },
    { codon: ['AGC', 'AGU'], protein: 'Serine' },
    { codon: ['AUA', 'AUC', 'AUU'], protein: 'Isoleucine' },
    { codon: ['AUG'], protein: 'Methionine' }, // START
    { codon: ['CAA', 'CAG'], protein: 'Glutamine' },
    { codon: ['CAC', 'CAU'], protein: 'Histidine' },
    { codon: ['CCA', 'CCC', 'CCG', 'CCU'], protein: 'Proline' },
    { codon: ['CGA', 'CGC', 'CGG', 'CGU'], protein: 'Arginine' },
    { codon: ['CUA', 'CUC', 'CUG', 'CUU'], protein: 'Leucine' },
    { codon: ['GAA', 'GAG'], protein: 'Glutamic Acid' },
    { codon: ['GAC', 'GAU'], protein: 'Aspartic Acid' },
    { codon: ['GCA', 'GCC', 'GCG', 'GCU'], protein: 'Alanine' },
    { codon: ['GGA', 'GGC', 'GGG', 'GGU'], protein: 'Glycine' },
    { codon: ['GUA', 'GUC', 'GUG', 'GUU'], protein: 'Valine' },
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
    return proteins.join(', ');
};

console.log(translation('AUGGUAUUCGAUCCUCCUAGUCCUCCUCUUUUACCCUGGCAUCCGAAUUGCCAC'));

