import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class LoanPaymentsShowController extends Controller {
  @alias('model') loanPayment;

  properties = [{
    name: 'ID',
    propertyName: 'id',
  }, {
    name: 'Date',
    propertyName: 'date',
  }, {
    name: 'Principal Amount',
    propertyName: 'principalAmountStr',
  }, {
    name: 'Interest Amount',
    propertyName: 'interestAmountStr',
  }, {
    linkParam: 'loan.id',
    linkTo: 'loans.show',
    name: 'Loan',
    propertyName: 'loan.name',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }];
}
