# Today Menu — Netlify deployment

## วิธี deploy

1. แตกไฟล์ ZIP แล้วนำโฟลเดอร์โปรเจกต์ขึ้น GitHub หรืออัปโหลดเข้า Netlify
2. ตั้งค่า Build command เป็น `pnpm build`
3. ตั้งค่า Publish directory เป็น `dist/public`
4. ใช้ Node.js 22
5. กด Deploy site

ไฟล์ `netlify.toml` ตั้งค่าเหล่านี้ไว้ให้แล้ว หากเชื่อมจาก Git repository สามารถใช้ค่าเริ่มต้นจากไฟล์ได้เลย

## หมายเหตุ

เวอร์ชันนี้ย้ายระบบค้นหาสูตรมาใช้ `server/recipeSearch.ts` ฝั่ง client โดยตรง ทำให้หน้าเว็บ static บน Netlify แสดงสูตรและค้นหาเมนูได้โดยไม่ต้องมี Express backend หรือ `/api/trpc`

โฟลเดอร์ `server/` ยังเก็บ implementation ของ tRPC backend และ Information Retrieval ไว้สำหรับการพัฒนาต่อหรือ deploy แบบ full-stack ในอนาคต
