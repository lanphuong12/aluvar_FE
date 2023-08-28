import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';

@Component({
  selector: 'app-phan-loai',
  templateUrl: './phan-loai.component.html',
  styleUrls: ['./phan-loai.component.css']
})


export class PhanLoaiComponent implements OnInit{
  phanloaiId = '';
  phanloaiName = '';
  sanpham: any;
  phanloai: any;
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.phanloaiId = params['idPL'];
      this.apiService.getPLbyIDPL(this.phanloaiId).subscribe(
        data => {
          // Xử lý dữ liệu JSON trả về từ API
          this.phanloai = data;
          this.phanloaiName = this.phanloai.name
        },
        error => {
          console.error('Lỗi khi lấy danh sách phân loại:', error);
        }
      );
    });
    this.route.params.subscribe((params) => {
      this.phanloaiId = params['idPL'];
      this.apiService.getSPbyIDPL(this.phanloaiId).subscribe(
        data => {
          // Xử lý dữ liệu JSON trả về từ API
          this.sanpham = data;
        },
        error => {
          console.error('Lỗi khi lấy danh sách phân loại:', error);
        }
      );
    });
  }

}
