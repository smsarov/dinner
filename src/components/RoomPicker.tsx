import { redirect } from "next/navigation";
import React from "react";
import { CgCheck } from "react-icons/cg";

function RoomPicker() {
  return (
    <div className="flex flex-col items-center px-2">
      <form
        className="flex flex-row w-full items-center justify-center gap-2 text-lg *:h-10 *:border-[3px] *:border-dashed *:border-black *:rounded-lg"
        action={async (formData: FormData) => {
          const code = formData.get("code");
          redirect(`/room/?code=${code}`);
        }}
      >
        <input
          type="text"
          name="code"
          placeholder="code"
          required
          className="focus:outline-none font-mono font-extrabold bg-transparent text-center"
        />
        <button className="aspect-square flex justify-center items-center">
          <CgCheck className="stroke-2 text-xl"></CgCheck>
        </button>
      </form>
      <span className="text-center text-pretty text-xs text-gray-500">you can create a new room or join an existing one</span>
    </div>
  );
}

export { RoomPicker };
