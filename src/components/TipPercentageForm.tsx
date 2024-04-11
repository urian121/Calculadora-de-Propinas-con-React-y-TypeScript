import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: "tip-0",
    value: 0,
    label: "0%",
  },
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        <div className="flex flex-col-auto gap-2">
          {tipOptions.map((tipOption) => (
            <label
              key={tipOption.id}
              htmlFor={tipOption.id}
              className="flex items-center">
              {tipOption.label}
              <input
                id={tipOption.id}
                type="radio"
                name="tip"
                value={tipOption.value}
                onChange={(e) => setTip(+e.target.value)}
                checked={tipOption.value === tip}
              />
            </label>
          ))}
        </div>
      </form>
    </div>
  );
}
