import { useState } from "preact/hooks";
import { getModelCtoF } from "../utils/loadModelCtoF";

export default async function InputRange() {
  const [celsius, setCelsius] = useState(0);
  const model = await getModelCtoF();

  const handleCelsius = (e:Event) => {
    setCelsius((e.target as HTMLInputElement).valueAsNumber);
  }

  return (
    <div class={"flex flex-col gap-4"}>
      <label
      for={"celsius"}
        class="mb-4 text-xl text-left text-slate-100 dark:text-neutral-200"
        >Grados Celsius: {celsius}ºC </label>
      <input
      id={"celsius"}
      class={"w-full"}
        type="range"
        min={-200}
        max={200}
        value={celsius}
        onInput={(e) => handleCelsius(e)}
      />
      <span class={"text-sm text-slate-500"}>Desliza para cambiar los grados Celsius</span>
      <p class="text-2xl mt-6 text-left">El valor de {celsius}ºC es igual a </p>
    </div>
  );
}
