export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getStatus = (): boolean => {
    return this.status;
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus() && value > 0) {
      this.balance += value;
      console.log('Voce depositou');
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && value < this.balance) {
      this.balance -= value;
      console.log('Voce sacou', value);
    }
  };

  getBalance = (): void => {
    console.log('o seu saldo é de: ' + this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  };
}
