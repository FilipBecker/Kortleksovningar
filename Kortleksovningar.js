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
let ranKortlek = Randomize(kortlek);

function addCard(hand) {
    hand.push(ranKortlek[0]);
    ranKortlek.splice(0, 1);
};

let spelareKort = [];
let datorKort = [];
for (i = 0; i < 5; i++) {
    addCard(spelareKort);
    addCard(datorKort);
};

function IsCardIn(hand) {
    let result = false;
    hand.forEach((kort) => {
        if (kort[0] == "kung" && kort[1] == "hjärter") {
            result = true;
        };
    });
    return result;
};

function compareEss(hand1, hand2) {
    let ess1 = hand1.filter(kort => kort[0] == "ess");
    let ess2 = hand2.filter(kort => kort[0] == "ess");
    if (ess1.length > ess2.length) {
        console.log("Spelaren har fler ess.");
    } else if (ess2.length > ess1.length) {
        console.log("datorn har fler ess.");
    } else {
        console.log("båda har lika många ess.");
    };
};

compareEss(spelareKort, datorKort);