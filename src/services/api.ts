import { EmployeeModel } from '@types';
import { generateUUID } from '@utils';

class API {
  static instance: API;

  static getInstance() {
    if (!this.instance) this.instance = new API();
    return this.instance;
  }

  public get employees(): EmployeeModel[] {
    return JSON.parse(localStorage.getItem('employees') || '[]');
  }

  public set employees(datas: EmployeeModel[]) {
    localStorage.setItem('employees', JSON.stringify(datas));
  }

  async wait() {
    await new Promise((res) => setTimeout(res, Math.random() * 1000 + 200));
  }

  async getEmployees(): Promise<EmployeeModel[]> {
    await this.wait();
    return this.employees;
  }

  async getEmployee(id: string): Promise<EmployeeModel | null> {
    await this.wait();
    return this.employees.find((employee) => employee.id === id) || null;
  }

  async addEmployee(employee: Omit<EmployeeModel, 'id'>): Promise<boolean> {
    await this.wait();
    const employees = this.employees;
    employees.push({ ...employee, id: generateUUID() });
    this.employees = employees;
    return true;
  }

  async updateEmployee(data: Partial<EmployeeModel> & Pick<EmployeeModel, 'id'>): Promise<boolean> {
    await this.wait();
    const employees = this.employees;
    const employeeUpdate = employees.find((employee) => employee.id === data.id);
    if (!employeeUpdate) throw new Error('Employee not existed');
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof EmployeeModel];
      if (value) (employeeUpdate as any)[key] = value;
    });
    this.employees = employees;

    return true;
  }

  async deleteEmployee(id: string): Promise<boolean> {
    await this.wait();
    this.employees = this.employees.filter((employee) => employee.id !== id);
    return true;
  }
}

export const api = API.getInstance();

(window as any).api = api;
