"use client";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
import FormHeader from "@/components/FormHeader";
import PersonalInfo from "@/components/PersonalInfo";
import Button from "@/components/Button";
import AccountSetup from "@/components/AccountSetup";
import ProfileSetup from "@/components/ProfileSetup";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const Step = [PersonalInfo, AccountSetup, ProfileSetup][currentStep];
  const handleOnClick = () => setCurrentStep(currentStep + 1);
  const handleBackClick = () => setCurrentStep(currentStep - 1);
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#F5F5F5]">
      <div className="flex min-h-163.75 w-120 flex-col justify-between rounded-[8] bg-[#FFF] p-[32px]">
        <div>
          <FormHeader />
          <Step />
          {/* <PersonalInfo /> */}
          {/* <AccountSetup /> */}
          {/* <ProfileSetup /> */}
        </div>
        <div>
          {/* <Button /> */}
          <div className="flex w-full gap-[12]">
            {currentStep > 0 && (
              <button
                onClick={handleBackClick}
                className="mt-[32px ] h-[44] w-[128] cursor-pointer items-center justify-center self-stretch rounded-[8] border border-solid border-[#000000] bg-[#FFF] p-[12px]"
              >
                <p className="font-['Inter'] text-[16px] leading-[16px] font-semibold tracking-[-0.14px] text-[#000]">
                  Back
                </p>
              </button>
            )}
            <button
              onClick={handleOnClick}
              className="mt-[32px ] h-[44] w-full cursor-pointer items-center justify-center self-stretch rounded-[8] border bg-[#000] p-[12px]"
            >
              <p className="font-['Inter'] text-[16px] leading-[16px] font-semibold tracking-[-0.14px] text-[#FFF]">
                Continue
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
