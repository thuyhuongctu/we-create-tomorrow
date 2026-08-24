import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  // Đường dẫn tương đối: bản dựng chạy được khi mở trực tiếp từ đĩa CD/USB
  // (giao thức file://) hoặc khi lưu trữ ở một đường dẫn con (ví dụ GitHub
  // Pages dạng project site: user.github.io/ten-repo/), không bắt buộc phải
  // có máy chủ web đặt ở gốc tên miền.
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
