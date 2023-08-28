import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  phanloai: any;
  sanpham: any;
  constructor(private apiService: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.apiService.getPhanloai().subscribe(
      data => {
        // Xử lý dữ liệu JSON trả về từ API
        this.phanloai = data;
      },
      error => {
        console.error('Lỗi khi lấy danh sách phân loại:', error);
      }
    );

    this.apiService.getAllSP().subscribe(
      data => {
        // Xử lý dữ liệu JSON trả về từ API
        this.sanpham = data;
      },
      error => {
        console.error('Lỗi khi lấy danh sách sản phẩm:', error);
      }
    );

  }

}
