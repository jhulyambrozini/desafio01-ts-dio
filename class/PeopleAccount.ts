import { DioAccount } from './DioAccount';

export class PeopleAccount extends DioAccount {
  constructor(private doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
  }
}
