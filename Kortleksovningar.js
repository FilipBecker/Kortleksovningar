const sviter = ["hjärter", "ruter", "klöver", "spader"];
const valorer = ["knekt", "dam", "kung", "ess"];
let kortlek = [];

sviter.forEach(s => {
    for (let v = 2; v < 15; v++) {
        if (v > 10) {
            kortlek.push([valorer[v - 11], s]);
        } else {
            kortlek.push([v, s]);
        };
    };
});

function Randomize(lek) {
    let newLek = [];
    while (lek.length > 0) {
        const num = Math.round(Math.random() * (lek.length - 1));
        newLek.push(lek[num]);
        lek.splice(num, 1);
    };
    return newLek;
};
let ranKortlek = Randomize(kortlek)

function addCard(hand) {
    hand.push(ranKortlek[0]);
    ranKortlek.splice(0, 1);
};

let spelareKort = [];
for (i = 0; i < 5; i++) {
    addCard(spelareKort);
};

console.log(spelareKort);