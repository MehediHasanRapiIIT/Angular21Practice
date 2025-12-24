import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  http = inject(HttpClient);

  getAllBatches() {
    return this.http.get("https://api.freeprojectapi.com/api/FeesTracking/batches");
  }

  saveBatch(batchObj: any) {
    return this.http.post("https://api.freeprojectapi.com/api/FeesTracking/batches", batchObj);
  }
  
}
