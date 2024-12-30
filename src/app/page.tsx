import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero CTA */}
      <div className=" h-[500px] bg-gradient-to-r from-rose-400 to-red-500 text-center flex justify-center items-center font-semibold">
        <div className="w-1/3">
          <h1 className=" text-2xl text-white">เรามีฟรีแลนซ์มือฉมังด้าน...</h1>

          <div className="w-fit text-center m-auto">
            <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl text-white pr-3">
              ความเร็ว
            </p>
          </div>
          <h1 className=" text-2xl text-white">
            เปลี่ยนไอเดียของคุณให้เป็นความจริงที่
            <s className=" underline">เร็วกว่า</s>
          </h1>
          <form className=" mt-5 font-normal" action="">
            <div className="flex rounded-full w-2/3 p-2 pl-5 bg-white justify-between m-auto ">
              <input
                type="text"
                className="outline-none w-full"
                placeholder="คำค้นหาฟรีแลนซ์..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </form>
        </div>
      </div>
      {/* Hero CTA */}

      {/* Menu🔥 */}

      <div className=" w-4/6 m-auto bg-white rounded-lg p-4 relative top-[-40] shadow-xl flex justify-around items-center">
        <a href="">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14 m-auto  hover:pb-2 transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>

            <p className=" text-xl">เทรนด์มาไง</p>
          </div>
        </a>
        <a href="">
          {" "}
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14 m-auto  hover:pb-2 transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
              />
            </svg>

            <p className=" text-xl">ออกแบบกราฟแท่ง</p>
          </div>
        </a>

        <a href="">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14 m-auto  hover:pb-2 transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>

            <p className=" text-2xl">ออกแบบวิศวะแบ</p>
          </div>
        </a>
        <a href="">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14 m-auto  hover:pb-2 transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>

            <p className=" text-2xl">ธุรกิจสีเทา</p>
          </div>
        </a>
        <a href="">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14 m-auto  hover:pb-2 transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>

            <p className=" text-2xl">แปลโค้งๆ</p>
          </div>
        </a>
      </div>

      {/* contents */}
      <div className="w-4/6  m-auto p-5 ">
        <div className="font-semibold">
          <p className="text-2xl">ทำไมถึงต้องใช้ Fasterwork?</p>
          <p className="text-4xl text-red-400">
            เพราะเราเปลี่ยนไอเดียของคุณให้เป็นความจริงได้
            <s className=" underline">เร็วกว่า</s> ด้วยฟรีแลนซ์มือฉมัง
          </p>
        </div>
        <div className=" flex gap-2 justify-around items-center mt-5 p-5">
          <div className=" p-2 w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
            <p className="text-xl font-semibold"> ฟรีแลนซ์ความเร็วอันดับ 1</p>
            <p>ลดขั้นตอนการคัดเลือก และยืนยันตัวตน เพื่อความเร็วที่ยิ่งกว่า</p>
          </div>
          <div className=" p-2 w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>

            <p className="text-xl  font-semibold"> อิสระการจ้างงาน</p>
            <p>
              คุณสามารถจัดการวิธีการชำระเงินแบบต่างๆ
              โดยทางเราจะไม่มีส่วนเกี่ยวข้องและรับผิดชอบใดๆ
            </p>
          </div>{" "}
          <div className=" p-2 w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />
            </svg>

            <p className="text-xl  font-semibold">ครบทุกงานที่ต้องการ</p>
            <p>
              พบกับกองทัพฟรีแลนซ์คุณภาพ พร้อมตอบโจทย์ทุกธุรกิจ
              ครอบคลุมทุกสีที่เลือกสรรค์
            </p>
          </div>
        </div>
      </div>

      <div className="w-4/6  m-auto p-5 flex justify-between">
        <div>
          <div className="font-semibold">
            <p className="text-4xl text-red-400">
              เริ่มจ้างงานฟรีแลนซ์ง่ายๆ กับ Fasterwork
            </p>
          </div>
          <div className=" p-2 ">
            <p className="text-xl  font-semibold flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              แค่ทักแชทก็บรีฟงานฟรีแลนซ์ได้แล้ว
            </p>
            <p>ไม่ต้องพิจารณา ไม่ต้องอธิบาย ไม่ต้องตรวจสอบ เพราะเรา Faster🔥</p>
          </div>
        </div>

        <div className=" border shadow-lg rounded-lg">
          <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/hB7CDrVnNCs?si=xe7cEZ34kTIyXbh6"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
