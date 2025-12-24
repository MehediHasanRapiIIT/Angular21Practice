import { Component, inject } from '@angular/core';
import { NgIf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-batch-master',
  imports: [FormsModule],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster {
  newBatchObj: Batch = new Batch(0, '', new Date());
  http = inject(HttpClient);
  batchList: Batch[] = [];
  
  constructor() {
    this.getAllBatches();
  }

  getAllBatches() {
    this.http.get("https://api.freeprojectapi.com/api/FeesTracking/batches").subscribe({
      next:(result:any)=>{
       this.batchList = result;
      }
    })
  }
  onSaveBatch() {
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/FeesTracking/batches", this.newBatchObj).subscribe({
      next:(result:any)=>{
        debugger;
        alert("Batch saved successfully");
      },
      error:(error:any)=>{
        debugger;
        alert(error.error.message);
      }
    })
    
  }
  onClearBatch() {
    this.newBatchObj = new Batch(0, '', new Date());
  }
}

class Batch {
  batchId: number;
  batchName: string;
  createdDate: Date ;

  constructor(batchId: number, batchName: string, createdDate: Date) {
    this.batchId = batchId;
    this.batchName = batchName;
    this.createdDate = createdDate;
  }
}
