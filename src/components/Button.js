let Button = () => {
  return (
    <div className="flex w-full gap-[12]">
      <button className="mt-[32px ] h-[44] w-[128] cursor-pointer items-center justify-center self-stretch rounded-[8] border border-solid border-[#000000] bg-[#FFF] p-[12px]">
        <p className="font-['Inter'] text-[16px] leading-[16px] font-semibold tracking-[-0.14px] text-[#000]">
          Back
        </p>
      </button>
      <button className="mt-[32px ] h-[44] w-full cursor-pointer items-center justify-center self-stretch rounded-[8] border bg-[#000] p-[12px]">
        <p className="font-['Inter'] text-[16px] leading-[16px] font-semibold tracking-[-0.14px] text-[#FFF]">
          Continue 2/3
        </p>
      </button>
    </div>
    // <button className=" cursor-pointer items-center justify-center w-full self-stretch rounded-[8] bg-black h-[44] p-[12px] mt-[32px ]">
    //   <p className="font-['Inter'] text-[#FFF] text-[16px] font-semibold leading-[16px] tracking-[-0.14px]">
    //     Continue 1/3
    //   </p>
    // </button>
  );
};

export default Button;
