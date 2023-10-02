import { Component, OnInit } from '@angular/core';
import { TableStudentsService } from 'src/app/services/table-students.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {

  constructor(private service: TableStudentsService) { }

  arrStudents = new Array<Student>()

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


  ngOnInit(): void {
    this.getStudents()
  }

  getStudents() {
    this.service.getStudents().subscribe(res => {
      this.arrStudents = res
      console.log(this.arrStudents)
    },
      err => {
        alert(`Error: ${err.statusText}`)
        console.log(err.message)
      })
  }

  addStudent() {
    var student = new Student()

    student.dni = this.dni,
    student.lastName = this.lastName,
    student.firstName = this.firstName,
    student.email = this.email,
    student.cohort = this.cohort,
    student.status = this.status,
    student.gender = this.gender,
    student.address = this.address,
    student.phone = this.phone

    console.log(student)

    if (this.validateInputsAdd()) {
      this.service.addStudent(student).subscribe(() => {
        alert('Estudiante creado con éxito')
        location.reload()
      },
        err => {
          alert(`Error: ${err.statusText}`)
          console.log(err.message)
        })
    }
  }

  modifyStudent() {
    var student = new Student()

    student.id = this.idMod
    student.dni = this.dniMod,
    student.lastName = this.lastNameMod,
    student.firstName = this.firstNameMod,
    student.email = this.emailMod,
    student.cohort = this.cohortMod,
    student.status = this.statusMod,
    student.gender = this.genderMod,
    student.address = this.addressMod,
    student.phone = this.phoneMod

    console.log(student)

    if (this.validateInputsMod()) {
      this.service.modifyStudent(student).subscribe(() => {
        alert('Estudiante modificado con éxito')
        location.reload()
      },
        err => {
          alert(`Error: ${err.statusText}`)
          console.log(err.message)
        })
    }
  }

  deleteStudent(id: number) {
    if (confirm(`¿Está seguro que quiere eliminar al estudiante ${id}?`)) {
      this.service.deleteStudent(id).subscribe(() => {
        alert('Estudiante eliminado con éxito')
        location.reload()
      },
        err => {
          alert(`Error: ${err.statusText}`)
          console.log(err.message)
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
      this.dni != null &&
      this.lastName != null &&
      this.firstName != null &&
      this.email != null &&
      this.status != null &&
      this.gender != null &&
      this.address != null &&
      this.phone != null
    ) {
      if (isNaN(this.cohort) || this.cohort == null) {
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
      this.dniMod != null &&
      this.lastNameMod != null &&
      this.firstNameMod != null &&
      this.emailMod != null &&
      this.statusMod != null &&
      this.genderMod != null &&
      this.addressMod != null &&
      this.phoneMod != null
    ) {
      if (isNaN(this.cohortMod) || this.cohortMod == null) {
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