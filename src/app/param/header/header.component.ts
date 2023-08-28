import {
  Component, OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';
import { ApiService } from 'src/app/server/api.service';

var timeoutId:any;

$(document).ready(function () {
  // Gắn sự kiện hover vào tất cả các phần tử có role là "myRole"
  $('[role="menuitem"]').hover(
    function () {
      // Hàm callback khi di chuột vào phần tử
      clearTimeout(timeoutId);
      $(this).addClass('is-active'); // Thêm lớp "newClass1" vào phần tử đang được hover
      const menuitem = $(this).find('[role="menu"]');
      menuitem.show();
      menuitem.addClass('js-dropdown-active');
    },
    function () {

      // Hàm callback khi di chuột ra khỏi phần tử role menu
      const self = this; // Lưu lại tham chiếu đến phần tử role menu
      timeoutId = setTimeout(function () {
        $(self).removeClass('is-active'); // Xóa lớp "is-active" khỏi phần tử role menu
        const menuitem = $(self).find('[role="menu"]'); // Giả sử thẻ menuitem là con trực tiếp của phần tử được hover
        menuitem.hide();
        menuitem.removeClass('js-dropdown-active');
      }, 200); // Thực hiện hoạt động sau 500ms
    }
  );

  $('[role="menu"]').hover(
    function () {
      // Hàm callback khi di chuột vào phần tử
      $(this).addClass('js-dropdown-active'); // Thêm lớp "newClass1" vào phần tử đang được hover
      const menuitem = $(this).find('[role="menuitem"]');
      menuitem.show();
      menuitem.addClass('is-active');
    },
    function () {
      // Hàm callback khi di chuột ra khỏi phần tử
      $(this).removeClass('js-dropdown-active'); // Xóa lớp "newClass1" khỏi phần tử đang được hover
      const menuitem = $(this).find('[role="menuitem"]'); // Giả sử thẻ menuitem là con trực tiếp của phần tử được hover
      menuitem.hide();
      menuitem.removeClass('is-active');
    }
  );
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit{

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
  }
  // Gọi hàm ready của jQuery để đảm bảo DOM đã được tải xong
}
function next() {
  throw new Error('Function not implemented.');
}
