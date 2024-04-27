"use client";
import { RoomPicker } from "@/components/RoomPicker";
import { redirect } from "next/navigation";

export default function Home() {

  if(!sessionStorage.getItem('name')) redirect('/chat');

  return (
    <main className="flex flex-col items-center h-full w-full justify-center">
      <RoomPicker></RoomPicker>
    </main>
  );
}
