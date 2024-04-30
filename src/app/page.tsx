"use client";
import { RoomPicker } from "@/components/RoomPicker";
import { redirect } from "next/navigation";
import useInfo from "@/hooks/useInfoProvided";

export default function Home() {

  useInfo(() => redirect('/chat'));

  return (
    <main className="flex flex-col items-center h-full w-full justify-center">
      <RoomPicker></RoomPicker>
    </main>
  );
}
