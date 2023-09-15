import { Component, OnInit } from '@angular/core';
import { TableStudentsService } from 'src/app/services/table-students.service';
import { Student } from 'src/app/models/student';
import { NgModel } from '@angular/forms';
import { window } from 'rxjs';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {

  addStudentForm = false
  modifyStudentForm = false

  dni: string
  lastName: string
  firstName: string
  email: string
  cohort: number
  status: string
  gender: string
  address: string
  phone: string

  idMod: number
  dniMod: string
  lastNameMod: string
  firstNameMod: string
  emailMod: string
  cohortMod: number
  statusMod: string
  genderMod: string
  addressMod: string
  phoneMod: string

  arrStudents = new Array<Student>()

  constructor(private service: TableStudentsService) { }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents() {
    this.service.getStudents().subscribe(res => {
      this.arrStudents = res
      console.log(this.arrStudents)
    })
  }

  addStudent() {
    var json = {
      dni: this.dni,
      lastName: this.lastName,
      firstName: this.firstName,
      email: this.email,
      cohort: this.cohort,
      status: this.status,
      gender: this.gender,
      address: this.address,
      phone: this.phone
    }
    console.log(json)

    if (this.validateInputsAdd()) {
      this.service.addStudent(json).subscribe(() => {
        alert('Estudiante creado con éxito')
        location.reload()
      })
    }
  }

  modifyStudent() {
    var json = {
      id: this.idMod,
      dni: this.dniMod,
      lastName: this.lastNameMod,
      firstName: this.firstNameMod,
      email: this.emailMod,
      cohort: this.cohortMod,
      status: this.statusMod,
      gender: this.genderMod,
      address: this.addressMod,
      phone: this.phoneMod
    }
    console.log(json)

    if (this.validateInputsMod()) {
      this.service.modifyStudent(json).subscribe(() => {
        alert('Estudiante modificado con éxito')
        location.reload()
      })
    }
  }

  deleteStudent(id: number) {
    if (confirm('¿Esta seguro que quiere eliminar al estudiante?')) {
      this.service.deleteStudent(id).subscribe(() => {
        alert('Estudiante eliminado con éxito')
        location.reload()
      })
    }
  }

  vewStudent(student: Student) {
    this.openPopup('mod')
    this.idMod = student.id
    this.dniMod = student.dni
    this.firstNameMod = student.firstName
    this.lastNameMod = student.lastName
    this.emailMod = student.email
    this.genderMod = student.gender
    this.cohortMod = student.cohort
    this.phoneMod = student.phone
    this.addressMod = student.address
    this.statusMod = student.status
  }

  closePopup(e: String) {
    if (e == 'add') this.addStudentForm = false
    if (e == 'mod') this.modifyStudentForm = false
  }

  openPopup(e: String) {
    if (e == 'add') this.addStudentForm = true
    if (e == 'mod') this.modifyStudentForm = true
  }

  validateInputsAdd() {
    if (
      this.dni != '' &&
      this.lastName != '' &&
      this.firstName != '' &&
      this.email != '' &&
      this.status != '' &&
      this.gender != '' &&
      this.address != '' &&
      this.phone != '' &&
      this.cohort != 0
    ) {
      if (isNaN(this.cohort)) {
      alert('Error: El campo "cohort" es de tipo numérico')
      return false
      }
      else return true
    } 

    else {
      alert('Error: Todos los campos son obligatorios')
      return false
    }
  }

  validateInputsMod() {
    if (
      this.dniMod != '' &&
      this.lastNameMod != '' &&
      this.firstNameMod != '' &&
      this.emailMod != '' &&
      this.statusMod != '' &&
      this.genderMod != '' &&
      this.addressMod != '' &&
      this.phoneMod != '' &&
      this.cohortMod != 0
    ) {
      if (isNaN(this.cohortMod)) {
      alert('Error: El campo "cohort" es de tipo numérico')
      return false
      }
      else return true
    } 

    else {
      alert('Error: Todos los campos son obligatorios')
      return false
    }
  }
}