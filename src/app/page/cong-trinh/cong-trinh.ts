import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';

@Component({
  selector: 'app-congtrinh',
  templateUrl: './cong-trinh.html'
})
export class CongTrinhComponent {
  constructor(private apiService: ApiService, private router: Router) {
  }
}
