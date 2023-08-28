import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';

@Component({
  selector: 'app-gioithieu',
  templateUrl: './gioi-thieu.html',
  styleUrls: ['./gioi-thieu.css'],
})
export class GioiThieuComponent {
  constructor(private apiService: ApiService, private router: Router) {
  }
}
