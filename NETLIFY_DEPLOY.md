# Today Menu — Netlify deployment

## วิธี deploy

1. แตกไฟล์ ZIP แล้วนำโฟลเดอร์โปรเจกต์ขึ้น GitHub หรืออัปโหลดเข้า Netlify
2. ตั้งค่า Build command เป็น `pnpm build`
3. ตั้งค่า Publish directory เป็น `dist/public`
4. ใช้ Node.js 22
5. กด Deploy site

ไฟล์ `netlify.toml` ตั้งค่าเหล่านี้ไว้ให้แล้ว หากเชื่อมจาก Git repository สามารถใช้ค่าเริ่มต้นจากไฟล์ได้เลย

## ข้อจำกัดของ Netlify static hosting

โปรเจกต์นี้เป็น full-stack React + Express + tRPC โดยระบบค้นหาสูตรทำงานผ่าน backend ที่ `/api/trpc` ดังนั้นการอัปโหลดเฉพาะ `dist/public` ไปยัง Netlify จะทำให้หน้าเว็บและ UI แสดงได้ แต่การค้นหา/เรียกสูตรผ่าน API อาจใช้งานไม่ได้บน static hosting โดยตรง

หากต้องการให้ฟังก์ชันค้นหาทำงานครบ มี 2 ทางเลือก:

- Deploy backend Node/Express แยกบนบริการที่รองรับ Node server แล้วตั้งค่า API URL ให้ frontend
- แปลงระบบค้นหาเป็น Netlify Functions หรือ client-side search ก่อน deploy

สำหรับการนำเสนอ UI ให้ใช้ไฟล์ build ที่ Netlify สร้างจาก `netlify.toml` ได้ทันที
