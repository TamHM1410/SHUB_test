import logo from "../../../public/networking.gif";
export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[760px] w-[100%] max-md:w-[380px] mx-auto text-center">
        <div className="h-[56px] w-full flex justify-center items-center">
          <img alt="logo" src={logo} className="w-[56px] h-[56px]" />
        </div>
        <h1 className="text-[32px] font-bold p-5">
          Hoạt động tiêu biểu từ cộng đồng giáo dục
        </h1>
        <p className="text-[20px]">
          Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá
          trình giảng dạy, dạy học ứng dụng công nghệ SHub Classroom.
        </p>
      </div>
    </div>
  );
}
