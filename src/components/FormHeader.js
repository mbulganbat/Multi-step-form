import { Inter } from "next/font/google";
import Image from "next/image";
let FormHeader = () => {
  return (
    <div className="flex flex-col items-center items-start gap-[8]">
      <Image src="/img/logo.png" alt="Logo" width={60} height={60} />
      {/* <img src="/img/logo.png" alt="Logo" className="h-[60] w-[60]" /> */}
      <h1 className="font-['Inter'] text-[24px] font-semibold tracking-[-0.78px] text-[#202124] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        Join Us! 😎
      </h1>
      <p className="text-center font-['Inter'] text-[16px] font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};

export default FormHeader;
