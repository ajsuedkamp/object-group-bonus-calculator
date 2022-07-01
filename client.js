const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
  

// TODO: loop over all employees 


/**
 * 
 * @param {*} employeeObj 
 * @param {*} employees 
 */
 function calculateBonus(employeeObj){
  // Store the bonus
  let bonusPercent = 0;
  console.log('Calculating bonus for', employeeObj.name);
  if (employeeObj.rating <= 2) {
     console.log('No bonus', employeeObj.name);
     bonusPercent = 0
  } else if (employeeObj.reviewRating === 3) {
     bonusPercent = 0.04;
  } else if (employeeObj.reviewRating === 4) {
    bonusPercent = 0.06;
  } else if (employeeObj.reviewRating === 5) {
    bonusPercent = 0.1;

  } if(employeeObj.employeeNumber.length === 4){
   bonusPercent += 0.05;}
  // } else if(employeeObj.annualSalary > '65000'){
  // bonusPercent -= 0.01;
  // }
  // else if (bonusPercent <= 0.13 && >= 0)[
    
   //]

  // return results
  return {
    name: employeeObj.name,
    bonusPercent: bonusPercent,
    //bonusAmount: ???,
 }
};

 console.log(calculateBonus(employees[2]));