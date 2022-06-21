type Gender = 'male' | 'female';

export type EmployeeModel = {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  gender: Gender;
};
