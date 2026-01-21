link demo: https://context-api-hazel.vercel.app/

# Demo: React Data Architecture & Context API

Dự án này là bài tập minh họa về **Kiến trúc Dữ liệu trong React**, tập trung vào việc phân chia trách nhiệm giữa các Component và sử dụng **Context API** để giải quyết vấn đề **Prop Drilling**.

## 🎯 Mục tiêu Nhiệm vụ

1.  **Phân biệt Kiến trúc:**
    * **Stateless Components (Presentational):** Chỉ chịu trách nhiệm hiển thị UI (`UserProfile`).
    * **Stateful Components (Container):** Chịu trách nhiệm quản lý Logic và State (`MainContainer`).
2.  **Container Pattern:** Tách biệt logic ra khỏi giao diện.
3.  **Context API:** Giải pháp chia sẻ dữ liệu toàn cục, tránh việc truyền props qua nhiều cấp trung gian (Prop Drilling).

## 📂 Cấu trúc Thư mục

Kiến trúc dự án được tổ chức rõ ràng theo chức năng:

```bash
src/
├── contexts/
│   └── AppContext.jsx       # Khởi tạo Context (Kho dữ liệu chung)
├── containers/
│   └── MainContainer.jsx    # Stateful Component (Provider - Quản lý State & Logic)
├── components/
│   ├── Navbar.jsx           # Intermediate Component (Trung gian - Không nhận Props)
│   └── UserProfile.jsx      # Stateless Component (Consumer - Hiển thị dữ liệu)
├── App.jsx
└── main.jsx
