
export class BankAccount {
  constructor() {
    this._balance = 0;
    this.accountIsOpen = false
  }

  open() {
    if (this.accountIsOpen) {throw new ValueError()}
    this.accountIsOpen = true
  }

  close() {
    this.isAccountOpen()
    this._balance = 0;
    this.accountIsOpen = false;
  }

  deposit(amount) {
    this.isAccountOpen()
    if (amount < 0) {throw new ValueError()}
    this._balance += amount;
  }

  withdraw(amount) {
    this.isAccountOpen()
    // only withdraw ppositive number
    if (amount < 0) {throw new ValueError()}
    // must have enough money to withdraw desired amount
    if (amount > this._balance) {throw new ValueError()}

    this._balance -= amount;
  }

  get balance() {
    this.isAccountOpen()
    return this._balance;
  }

  isAccountOpen() {
    if (!this.accountIsOpen) {throw new ValueError()}

  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
