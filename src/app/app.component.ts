import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  employeeList: Employee[] = [];
  dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = ['id', 'age', 'dob', 'email', 'salary', 'address', 'imageUrl', 'firstName', 'lastName', 'contactNumber'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      (employeeData) => {
      this.employeeList = employeeData;
      this.dataSource = new MatTableDataSource(this.employeeList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}

