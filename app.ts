import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { TeacherAccount } from './class/TeacherAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
peopleAccount.deposit(200);
peopleAccount.getBalance();

peopleAccount.withdraw(150);
console.log(peopleAccount.getStatus());
console.log(peopleAccount.getName());

peopleAccount.getBalance();

console.log(peopleAccount);

console.log('#############################');

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(300);
companyAccount.getBalance();

companyAccount.withdraw(100);
console.log(companyAccount.getStatus());
console.log(companyAccount.getName());

companyAccount.getBalance();

companyAccount.getLoan(1200);
companyAccount.getBalance();

console.log('#############################');

const teacherAccount = new TeacherAccount('Nath', 30);
teacherAccount.deposit(400);
teacherAccount.getBalance();

teacherAccount.withdraw(100);
console.log(teacherAccount.getStatus());
console.log(teacherAccount.getName());

teacherAccount.getBalance();

teacherAccount.depositWithExtra(100);
teacherAccount.getBalance();
