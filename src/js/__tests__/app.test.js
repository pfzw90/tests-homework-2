import sortByHealth from '../app';


test.each([
  [[{ name: 'мечник', health: 10 }, { name: 'маг', health: 100 }, { name: 'лучник', health: 80 }], [1, 2, 0]],
  [[{ name: 'мечник', health: 100 }, { name: 'маг', health: 50 }, { name: 'лучник', health: 70 }], [0, 2, 1]],
  [[{ name: 'мечник', health: 60 }, { name: 'маг', health: 50 }, { name: 'лучник', health: 100 }], [2, 0, 1]],
])(
  ('should return correctly sorted array'),
  (characters, expected) => {
    const result = sortByHealth(characters);
    let n = 0;
    result.forEach((char) => {
      expect(char).toEqual(characters[expected[n]]);
      n += 1;
    });
  },
);
