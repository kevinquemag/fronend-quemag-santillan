import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComputerHttpService } from '../services/computer-http.service';
import { ComputerModel } from '../models/computer.model';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  selectedComputer: ComputerModel = {};
  computers: ComputerModel[] = [];
  formComputer: FormGroup;

  constructor(
    private computerHttpService: ComputerHttpService,
    private formBuilder: FormBuilder,
    public messageService: MessageService) {
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
        this.messageService.success(response);
      },
      error => {
        this.messageService.error(error);
      }
    );

  }

  getComputer(): void {
    this.computerHttpService.getOne(1).subscribe(
      response => {
        console.log(response);
        this.messageService.success(response);
      },
      error => {
        this.messageService.error(error);
      }
    );

  }
  //post al servidor
  storeComputer(computer: ComputerModel): void {
    this.computerHttpService.store(computer).subscribe(
      response => {
        this.messageService.success(response.data);
      },
      error => {
        this.messageService.error(error);
      }
    );

  }
  saveComputer(computer: ComputerModel) {
    const index = this.computers.findIndex(element => element.id === computer.id);
    if (index === -1) {
      this.computers.push(computer);
    } else {
      this.computers[index] = computer;
    }
  }

  updateComputer(computer: ComputerModel): void {
    this.computerHttpService.update(computer.id, computer).subscribe(
      response => {
        this.messageService.success(response);
      },
      error => {
        this.messageService.error(error);
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
        this.messageService.error(error);
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

  onSubmit(computer: ComputerModel) {
    if (computer.id) {
      this.updateComputer(computer);
    } else {
      this.storeComputer(computer);
    }
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

  get codeField() {
    return this.formComputer.controls['code'];
  }

  get weightField() {
    return this.formComputer.controls['weigh'];
  }

  get modelField() {
    return this.formComputer.controls['model'];
  }

}