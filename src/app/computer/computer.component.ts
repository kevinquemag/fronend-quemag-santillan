import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComputerHttpService } from '../services/computer-http.service';
import { ComputerModel } from '../models/computer.model';


@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  selectedComputer: ComputerModel = {};
  computers: ComputerModel[] = [];
  formComputer: FormGroup;

  constructor(private computerHttpService: ComputerHttpService, private formBuilder: FormBuilder) {
    this.formComputer = this.newFormGroupComputer();
  }

  ngOnInit() {
    this.getComputers();
    this.getComputer();
  }

  newFormGroupComputer(): FormGroup {
    return this.formBuilder.group(
      {
        id: [null],
        brand: [null, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
        color: [null],
        code: [null],
        weight: [null],
        model: [null, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      }
    )
  }

  getComputers(): void {
    this.computerHttpService.getAll().subscribe(
      response => {
        console.log(response);
        this.computers = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  getComputer(): void {
    this.computerHttpService.getOne(1).subscribe(
      response => {
        console.log(response);
        this.selectedComputer = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  createComputer(): void {
    this.computerHttpService.create(this.selectedComputer).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

  }

  updateComputer(computer: ComputerModel): void {
    this.computerHttpService.update(computer.id, computer).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteComputer(computer: ComputerModel): void {
    this.computerHttpService.delete(computer.id).subscribe(
      response => {
        console.log(response);
        this.removeComputer(computer);
      },
      error => {
        console.log(error);
      }
    );
  }

  removeComputer(computer: ComputerModel) {
    this.computers = this.computers.filter(element => element.id !== computer.id);
  }

  selectComputer(computer: ComputerModel) {
    console.log(computer);
    this.formComputer.patchValue(computer);
  }

  onSubmit() {
    console.log('onSubmit')
  }

  get idField() {
    return this.formComputer.controls['id'];
  }

  get brandField() {
    return this.formComputer.controls['brand'];
  }

  get colorField() {
    return this.formComputer.controls['color'];
  }

}