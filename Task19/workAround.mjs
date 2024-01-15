import Employee, { calculateBonus, calculateTax, getBenefits, getCadre, reimbursementEligibility } from './employee.mjs';

function getEmployeeInformation(inputSalary) {
    Employee.salary = inputSalary;
    console.log('Cadre: ' + getCadre());
    console.log('Tax: ' + calculateTax());
    console.log('Benefits: ' + getBenefits());
    console.log('Bonus: ' + calculateBonus());
    console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
  }
  
  getEmployeeInformation(10000);
  getEmployeeInformation(50000);
  getEmployeeInformation(100000);

