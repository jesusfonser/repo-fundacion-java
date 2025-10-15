const a = [3,1,2];

//a.sort(); //El método sort() es mutable. El resultado es: [1, 2, 2]

const b = a.slice(0, 2); //El método slice() no es mutable. b da [3, 1]

const c = b.toReversed(); //El método toReversed() no es mutable. c da [1, 3]

const d = a.with(0, 99); //El método with() no es mutable. d da [99, 1, 2]
