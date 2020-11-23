class Machine {
  constructor() {
    this.snacks = []
  }

  seeSelections() {
    return this.snacks
  }

  stock(inventory) {
    this.snacks = inventory
  }
}

module.exports = Machine