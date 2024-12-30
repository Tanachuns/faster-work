import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" h-[300px] bg-red-500 text-white">
        <div className="w-4/6  m-auto p-5 flex gap-10 justify-between">
          <div>
            <ul className=" list-none">
              <li>
                <b>หมวดหมู่งาน</b>
              </li>
              <li>
                <Link href={""}>ออกแบบกระติก</Link>
              </li>
              <li>
                <Link href={""}>เทคนิคและเทคโน</Link>
              </li>
              <li>
                <Link href={""}>การตลาดสด</Link>
              </li>
              <li>
                <Link href={""}>เทคนิคและเทคโน</Link>
              </li>
              <li>
                <Link href={""}>แปลเข้าโกลด์</Link>
              </li>
              <li>
                <Link href={""}>ภาพและเสียง</Link>
              </li>
              <li>
                <Link href={""}>ธุรกิจสีเทา</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className=" list-none">
              <li>
                <b>วิธีการใช้งาน</b>
              </li>
              <li>
                <Link href={""}>เริ่มขายงานอย่างไร</Link>
              </li>
              <li>
                <Link href={""}>สมัครเป็นฟรีแลนซ์</Link>
              </li>
              <li>
                <Link href={""}>การชำระค่าจ้าง</Link>
              </li>
              <li>
                <Link href={""}>รับประกันการจ้างงาน</Link>
              </li>
              <li>
                <Link href={""}>บล็อกความรู้</Link>
              </li>
              <li>
                <Link href={""}>คำถามที่เจอบ่อย</Link>
              </li>
              <li>
                <Link href={""}>จัดการการใช้ข้อมูล</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className=" list-none">
              <li>
                <b>วิธีการใช้งาน</b>
              </li>
              <li>
                <Link href={""}>Fasterwork</Link>
              </li>
              <li>
                <Link href={""}>Fasterwork for Gray Business</Link>
              </li>
              <li>
                <Link href={""}>Fasterwork for Business</Link>
              </li>
              <li>
                <Link href={""}>Fasterwork for Boat Noodle Soup</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className=" list-none">
              <li>
                <b>เกี่ยวกับ Fasterwork</b>
              </li>
              <li>
                <Link href={""}>สร้างเรื่อง</Link>
              </li>
              <li>
                <Link href={""}>ร่วมงานกับ Fasterwork</Link>
              </li>
              <li>
                <Link href={""}>เงื่อนไขการใช้บริการ</Link>
              </li>
              <li>
                <Link href={""}>นโยบายความเป็นส่วนตัว</Link>
              </li>
            </ul>
          </div>
          <div>
            <b>ติดต่อเรา</b>
            <p>
              <small className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                  <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                </svg>
                support@fasterwork.superultraplusplus
              </small>
              <small className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="m6.75.98-.884.883a1.25 1.25 0 1 0 1.768 0L6.75.98ZM13.25.98l-.884.883a1.25 1.25 0 1 0 1.768 0L13.25.98ZM10 .98l.884.883a1.25 1.25 0 1 1-1.768 0L10 .98ZM7.5 5.75a.75.75 0 0 0-1.5 0v.464c-1.179.304-2 1.39-2 2.622v.094c.1-.02.202-.038.306-.052A42.867 42.867 0 0 1 10 8.5c1.93 0 3.83.129 5.694.378.104.014.206.032.306.052v-.094c0-1.232-.821-2.317-2-2.622V5.75a.75.75 0 0 0-1.5 0v.318a45.645 45.645 0 0 0-1.75-.062V5.75a.75.75 0 0 0-1.5 0v.256c-.586.01-1.17.03-1.75.062V5.75ZM4.505 10.365A41.36 41.36 0 0 1 10 10c1.863 0 3.697.124 5.495.365C16.967 10.562 18 11.838 18 13.28v.693a3.72 3.72 0 0 1-1.665-.393 5.222 5.222 0 0 0-4.67 0 3.722 3.722 0 0 1-3.33 0 5.222 5.222 0 0 0-4.67 0A3.72 3.72 0 0 1 2 13.972v-.693c0-1.441 1.033-2.717 2.505-2.914ZM15.665 14.92a5.22 5.22 0 0 0 2.335.552V16.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 16.5v-1.028c.8 0 1.6-.184 2.335-.551a3.722 3.722 0 0 1 3.33 0c1.47.735 3.2.735 4.67 0a3.722 3.722 0 0 1 3.33 0Z" />
                </svg>
                Cake Messnger
              </small>
              <small>จันทร์-ศุกร์ 9.30-22.00น.</small>
              <br />
              <small>เสาร์-อาทิตย์, วันหยุดนักขัตฤกษ์ 10.00-19.00น.</small>
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className=" p-2 bg-gray-700">
        <div className="w-4/6  m-auto  text-white flex gap-2 items-center justify-between">
          <div className="flex">
            <div className="flex gap-1 border-e border-white pr-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#ffffff"
              >
                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#ffffff"
              >
                <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#ffffff"
              >
                <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#ffffff"
              >
                <path d="M7 6A7 7 0 107 20 7 7 0 107 6zM18 6.5A3 6.5 0 1018 19.5 3 6.5 0 1018 6.5zM23 8A1 5 0 1023 18 1 5 0 1023 8z"></path>
              </svg>
            </div>
            <div className="pl-2">
              <Link href={""}>Sitemaps</Link>
            </div>
          </div>
          <div>
            <p>© 2024 Fasterwork</p>
          </div>
        </div>
      </div>
    </>
  );
}
