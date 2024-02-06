import { DioAccount } from './DioAccount';

export class TeacherAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  depositWithExtra = (value: number): void => {
    this.deposit(value + 10);
    console.log(`Você depositou ${value} com acressimo de R$ 10,00`);
  };
}
