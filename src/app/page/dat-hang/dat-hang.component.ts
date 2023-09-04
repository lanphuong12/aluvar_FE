import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';
import * as mailgun from 'mailgun-js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dat-hang',
  templateUrl: './dat-hang.component.html',
  styleUrls: ['./dat-hang.component.css'],
})
export class DatHangComponent implements OnInit {
  productId = '';
  productName = '';
  sanpham: any;

  hoten: string = '';
  dienthoai: string = '';
  diachi: string = '';
  email: string = '';
  content: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private toastr: ToastrService
  )
  {
    this.toastr.toastrConfig.positionClass = 'toast-top-right'; // Thiết lập vị trí hiển thị thông báo
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['idSP'];
      this.apiService.getSPbyIDSP(this.productId).subscribe(
        (data) => {
          // Xử lý dữ liệu JSON trả về từ API
          this.sanpham = data;
          this.productName = this.sanpham.name;
        },
        (error) => {
          console.error('Lỗi khi lấy sanpham: ', error);
        }
      );
    });
  }
  onBtnSendClick() {
    if (!(!this.hoten && !this.dienthoai && !this.diachi && !this.email)) {
      const apiKey = '9192f36b548709f3d944dda2618ff007-2cc48b29-b13170fb';
      const domain = 'sandbox87ac8503f9424b5f922c19ed0754e155.mailgun.org';
      const url = `https://api.mailgun.net/v3/${domain}/messages`;
      const from =
        'mailgun@sandbox87ac8503f9424b5f922c19ed0754e155.mailgun.org';
      const to = 'phuong.dao.dev@gmail.com';
      const subject = 'Đặt hàng ' + this.productId + ' - ' + this.productName;
      const html =
        '<h1>THÔNG TIN ĐẶT HÀNG</h1> <h4>Họ tên: ' +
        this.hoten +
        ' </h4> <h4>Điện thoại: ' +
        this.dienthoai +
        '</h4><h4>Email: ' +
        this.email +
        '</h4> <h4>Địa chỉ: ' +
        this.diachi +
        '</h4><h4>Nội dung yêu cầu: ' +
        this.content +
        '</h4>';

      // Định dạng dữ liệu gửi đi
      const data = new FormData();
      data.append('from', from);
      data.append('to', to);
      data.append('subject', subject);
      data.append('html', html);

      // Khởi tạo header với thông tin xác thực
      const headers = new HttpHeaders({
        Authorization: `Basic ${btoa(`api:${apiKey}`)}`,
      });

      // Gửi yêu cầu POST tới API của Mailgun
      this.http.post(url, data, { headers }).subscribe(
        () => {
          // Hiển thị thông báo thành công
          this.toastr.success(
            'Chúng tôi sẽ liên hệ bạn trong vòng 24h!',
            'Gửi thông tin đặt hàng thành công'
          );
          this.router.navigate(['/']);
        },
        (error) => {
          this.toastr.error('Đã xảy ra lỗi, vui lòng thử lại', 'Không thành công!');
        }
      );
    } else {
      this.toastr.error(
        'Vui lòng điền thông tin để chúng tôi có thể liên hệ bạn',
        'Không thành công!'
      );
    }
  }
}
