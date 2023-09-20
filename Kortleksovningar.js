const sviter = ["hjärter", "ruter", "klöver", "spader"];
const valorer = ["knekt", "dam", "kung", "ess"];
const kortlek = [];

sviter.forEach(s => {
    for (let v = 2; v < 15; v++) {
        if (v > 10) {
            kortlek.push([valorer[v - 11], s]);
        } else {
            kortlek.push([v, s]);
        };
    };
});

console.log(kortlek);