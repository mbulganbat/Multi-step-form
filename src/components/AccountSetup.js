let AccountSetup = () => {
  return (
    <div className="mt-[28] flex flex-col gap-[12]">
      <div className="flex w-full flex-col gap-[8]">
        <label className="font-['Inter'] text-[14px] leading-[16px] font-semibold tracking-[-0.14px] text-[#334155]">
          Email Address
        </label>
        <input
          type="text"
          placeholder="Email Address"
          className="flex w-full items-center self-stretch rounded-[8px] border border-[#8B8E95] p-[12px] text-black"
        />
      </div>
      <div className="flex w-full flex-col gap-[8]">
        <label
          className="font-['Inter'] text-[14px] leading-[16px] font-semibold tracking-[-0.14px] text-[#334155]"
          htmlFor="phone"
        >
          Phone Number
        </label>
        <input
          type="text"
          placeholder="Phone Number"
          className="flex w-full items-center self-stretch rounded-[8px] border border-[#8B8E95] p-[12px] text-black"
        />
      </div>
      <div className="flex w-full flex-col gap-[8]">
        <label
          className="font-['Inter'] text-[14px] leading-[16px] font-semibold tracking-[-0.14px] text-[#334155]"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Placeholder"
          className="flex w-full items-center self-stretch rounded-[8px] border border-[#8B8E95] p-[12px] text-black"
        />
      </div>
      <div className="flex w-full flex-col gap-[8]">
        <label
          className="font-['Inter'] text-[14px] leading-[16px] font-semibold tracking-[-0.14px] text-[#334155]"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Placeholder"
          className="flex w-full items-center self-stretch rounded-[8px] border border-[#8B8E95] p-[12px] text-black"
        />
      </div>
    </div>
  );
};

export default AccountSetup;
