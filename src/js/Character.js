/* eslint-disable no-underscore-dangle */
export default class Character {
  constructor() {
    this.level = 1;
    this.health = 100;
  }

  get attack() {
    return this.powerMode ? this._attack * 2 : this._attack;
  }

  set attack(value) {
    this._attack = value;
  }

  get defence() {
    return this.powerMode ? this._defence * 2 : this._defence;
  }

  set defence(value) {
    this._defence = value;
  }

  get health() {
    return this.powerMode ? this._health * 2 : this._health;
  }

  set health(value) {
    this._health = value;
  }

  get powerMode() {
    return !this._powerMode ? 0 : this._powerMode;
  }

  set powerMode(value) {
    if (value === true && this._powerMode === undefined) this._powerMode = 3;
  }

  damage() {
    // Логика нанесения урона
    if (this.powerMode > 0) this._powerMode -= 1;
  }
}
