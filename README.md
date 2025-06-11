# Bài 2: CRUD Contact

Hướng dẫn này sẽ hướng dẫn bạn cách tạo giao diện cho phép hiển thị, thêm, sửa, xóa danh bạ (contact) với các thông tin cơ bản như tên, địa chỉ, số điện thoại, email, website và thông tin ngân hàng.

## Mục Lục

1. [Yêu Cầu](#yêu-cầu)
2. [Cài Đặt Dự Án](#cài-đặt-dự-án)
3. [Cấu Hình JSON Server](#cấu-hình-json-server)
4. [Chạy Dự Án](#chạy-dự-án)
5. [Kết Luận](#kết-luận)

## Yêu Cầu

Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt những thứ sau trên máy tính của mình:

- Node.js (v12 trở lên)
- npm (Trình quản lý gói Node)
- JSON Server

## Cài Đặt Dự Án

1. **Clone Kho Lưu Trữ**:
   ```bash
   git [clone https://github.com/yourusername/your-repo.git](https://github.com/nguyenphamducanh366/Test-2.git)
   cd Test2_CRUD
   ```

2. **Cài Đặt Các Gói Phụ Thuộc**:
   ```bash
   npm install
   ```


## Cấu Hình JSON Server

1. **Cài Đặt JSON Server**:
   ```bash
   npm install -g json-server
   ```

2. **Chạy JSON Server**:
   - Mở một terminal mới và chạy lệnh sau để khởi động JSON Server:
     ```bash
     json-server --watch db.json --port 3000
     ```

## Chạy Dự Án

1. **Chạy Ứng Dụng**:
   - Mở một terminal mới và chạy lệnh sau để khởi động ứng dụng React:
     ```bash
     npm run dev
     ```

2. **Truy Cập Ứng Dụng**:
   - Mở trình duyệt và truy cập vào `[http://localhost:3000](http://localhost:5173/)` để xem ứng dụng.

## Kết Luận

Bằng cách làm theo hướng dẫn này, bạn đã thiết lập một ứng dụng CRUD cho phép hiển thị, thêm, sửa và xóa danh bạ với các thông tin cơ bản. Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ để được hỗ trợ!
