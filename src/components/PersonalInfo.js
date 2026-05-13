let PersonalInfo = () => {
  return (
    <div className="mt-[28] flex flex-col gap-[12]">
      <div className="flex w-full flex-col gap-[8]">
        <label
          className="font-['Inter'] text-[14px] leading-[16px] font-semibold tracking-[-0.14px] text-[#334155]"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          type="text"
          placeholder="First Name"
          className="flex w-full items-center self-stretch rounded-[8px] border border-[#8B8E95] p-[12px] text-black"
        />
      </div>
      <div className="flex w-full flex-col gap-[8]">
        <label
          className="font-['Inter'] text-[14px] leading-[16px] font-semibold tracking-[-0.14px] text-[#334155]"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          type="text"
          placeholder="Last  Name"
          className="flex w-full items-center self-stretch rounded-[8px] border border-[#8B8E95] p-[12px] text-black"
        />
      </div>
      <div className="flex w-full flex-col gap-[8]">
        <label
          className="font-['Inter'] text-[14px] leading-[16px] font-semibold tracking-[-0.14px] text-[#334155]"
          htmlFor="userName"
        >
          UserName
        </label>
        <input
          type="text"
          placeholder="UserName"
          className="flex w-full items-center self-stretch rounded-[8px] border border-[#8B8E95] p-[12px] text-black"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
