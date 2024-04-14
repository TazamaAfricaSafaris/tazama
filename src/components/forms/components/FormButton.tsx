import React, { useRef } from "react";
import { UseFormRegister, FieldValues, UseFormSetValue } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { PlanMyTripType } from "../all-forms/plan-my-trip/AllQuestions";

interface Props {
  children: React.ReactNode;

  name: any;
  value: string;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setValue: UseFormSetValue<PlanMyTripType>;
}

export default function FormButton({
  children,
  name,
  value,
  currentPage,
  setCurrentPage,
  setValue,
}: Props) {
  return (
    <button
      className="w-[300px] rounded-md border-[1px] border-gray-400 bg-[#D9CEC1] py-3 text-xl hover:bg-lighter"
      onClick={() => {
        setValue(name, value);
        setCurrentPage(currentPage + 1);
      }}
      type="button"
    >
      {children}
    </button>
  );
}
