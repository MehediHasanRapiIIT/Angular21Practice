import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-competation',
  imports: [ReactiveFormsModule],
  templateUrl: './project-competation.html',
  styleUrl: './project-competation.css',
})
export class ProjectCompetation {

  projectForm: FormGroup = new FormGroup({

    competitionId: new FormControl(0),
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    status: new FormControl(''),


  });

  http = inject(HttpClient);
  competitionList = signal<Competition[]>([]);

  constructor() {
    this.getAllCompetations();
  }

  getAllCompetations() {

    this.http.get("https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition").subscribe({
      next:(data:any)=>{
        this.competitionList.set(data);
      }
    })
  }

  saveCompetition() {
    const formValue = this.projectForm.value;
    this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/competition", formValue).subscribe({
      next: (data: any) => {
        alert("Competition saved successfully");
        this.getAllCompetations();
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    })
  }
  onEdit(item: Competition) {
    this.projectForm = new FormGroup({
      competitionId: new FormControl(item.competitionId),
      title: new FormControl(item.title),
      description: new FormControl(item.description),
      startDate: new FormControl(item.startDate),
      endDate: new FormControl(item.endDate),
      status: new FormControl(item.status),
    })
    
  }

  updateCompetition() {
    const formValue = this.projectForm.value;
    this.http.put("https://api.freeprojectapi.com/api/ProjectCompetition/update/"+formValue.competitionId, formValue).subscribe({
      next: (data: any) => {
        alert("Competition updated successfully");
        this.getAllCompetations();
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    })
  }

  onDeleteCompetition(competitionId: number) {
    const confirmDelete = confirm("Are you sure you want to delete this competition?");
    if (!confirmDelete) {
      return;
    }else{
      this.http.delete("https://api.freeprojectapi.com/api/ProjectCompetition/delete/"+competitionId).subscribe({
      next: (data: any) => {
        alert("Competition deleted successfully");        
        this.getAllCompetations();
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    })
    }
    
  }

}


export interface Competition {
  competitionId: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
}
