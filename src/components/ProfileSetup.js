let ProfileSetup = () => {
  return (
    <div className="mt-[28] flex flex-col gap-[12]">
      <div className="flex w-full flex-col gap-[8]">
        <label className="font-['Inter'] text-[14px] leading-[16px] font-semibold tracking-[-0.14px] text-[#334155]">
          Date of Birth
        </label>
        <input
          type="date"
          placeholder="--/--/----"
          className="flex w-full items-center self-stretch rounded-[8px] border border-[#8B8E95] p-[12px] text-black"
        />
      </div>
      <div className="flex w-full flex-col gap-[8]">
        <label
          className="font-['Inter'] text-[14px] leading-[16px] font-semibold tracking-[-0.14px] text-[#334155]"
          htmlFor="profileImage"
        >
          Profile image
        </label>
        <input
          type="file"
          placeholder="ADD IMAGE +"
          className="flex min-h-[200] flex-1 flex-col items-center justify-center gap-2 rounded-md bg-[#7F7F800D] p-4"
        />
      </div>
    </div>
  );
};

export default ProfileSetup;
