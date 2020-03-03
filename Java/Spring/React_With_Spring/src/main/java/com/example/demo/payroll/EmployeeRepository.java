package com.example.demo.payroll;

import org.springframework.data.repository.CrudRepository;

//Spring Rest Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
