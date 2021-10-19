const NumberOfTiles =(L , B, tL, tb, ntb ,nofloors, nobuilding) => {
    const NumberOfTilesPerfloor= (L * B) / (tL * tb);
    const NumberOfTilesperbuilding =NumberOfTilesPerfloor *nofloors; 
    const NumberOfTiles = NumberOfTilesperbuilding * nobuilding;
    const NumberOfBoxes = NumberOfTiles / ntb;
    return NumberOfBoxes;
};

console.log(Math.ceil(NumberOfTiles(30, 40, 2, 2, 20, 4, 25 )));