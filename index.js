
function findMatching(array,neno) {
    return array.filter(hakuna => hakuna.toLowerCase().includes(neno.toLowerCase())).sort();
}

function fuzzyMatch(array, word) {
    return array.filter(firstLetter => firstLetter.startsWith(word));
}

function matchName (array,namesy) {
    return array.filter(jina => jina.name ===namesy);
}