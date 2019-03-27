import Bowman from '../src/js/Bowman';

test('create Bowman', () => {
  const bowmen = new Bowman();
  const expected = {
    level: 1,
    _health: 100,
    _attack: 25,
    _defence: 25,
  };
  expect(bowmen).toEqual(expected);
});

test('Show Bowman', () => {
  const bowmen = new Bowman();
  const received = [bowmen.level, bowmen.health, bowmen.attack, bowmen.defence];
  const expected = [1, 100, 25, 25];
  expect(received).toEqual(expected);
});

test('Show Bowman with powerMode', () => {
  const bowmen = new Bowman();
  bowmen.powerMode = true;
  const received = [bowmen.level, bowmen.health, bowmen.attack, bowmen.defence];
  const expected = [1, 200, 50, 50];
  expect(received).toEqual(expected);
});

test('Show Object Bowman with powerMode', () => {
  const bowmen = new Bowman();
  bowmen.powerMode = true;
  const expected = {
    level: 1,
    _health: 100,
    _attack: 25,
    _defence: 25,
    _powerMode: 3,
  };
  expect(bowmen).toEqual(expected);
});

test('Show Object Bowman with powerMode after damage', () => {
  const bowmen = new Bowman();
  bowmen.powerMode = true;
  bowmen.damage();
  const expected = {
    level: 1,
    _health: 100,
    _attack: 25,
    _defence: 25,
    _powerMode: 2,
  };
  expect(bowmen).toEqual(expected);
});

test('Show Object Bowman with powerMode after 4 damage', () => {
  const bowmen = new Bowman();
  bowmen.powerMode = true;
  bowmen.damage();
  bowmen.damage();
  bowmen.damage();
  bowmen.damage();
  const expected = {
    level: 1,
    _health: 100,
    _attack: 25,
    _defence: 25,
    _powerMode: 0,
  };
  expect(bowmen).toEqual(expected);
});

test('Show Bowman with powerMode after 4 damage', () => {
  const bowmen = new Bowman();
  bowmen.powerMode = true;
  bowmen.damage();
  bowmen.damage();
  bowmen.damage();
  bowmen.damage();
  const received = [bowmen.level, bowmen.health, bowmen.attack, bowmen.defence];
  const expected = [1, 100, 25, 25];
  expect(received).toEqual(expected);
});

test('Show Bowman with powerMode after 4 damage and powerMode', () => {
  const bowmen = new Bowman();
  bowmen.powerMode = true;
  bowmen.damage();
  bowmen.damage();
  bowmen.damage();
  bowmen.damage();
  bowmen.powerMode = true;
  const received = [bowmen.level, bowmen.health, bowmen.attack, bowmen.defence];
  const expected = [1, 100, 25, 25];
  expect(received).toEqual(expected);
});
