"use client";

import { useState, useEffect } from "react";
import { UserProps } from "@/utils/roomUtils/types";

export default function useInfo(onError: Function){
  const [data, setData] = useState<UserProps>();

  useEffect(() => {
    if(!sessionStorage || !sessionStorage.getItem("name")){
      onError()
      return;
    }

    else {
      setData({
        name: sessionStorage.getItem("name") as string,
        food: sessionStorage.getItem("food") as string,
        drink: sessionStorage.getItem("drink") as string,
      })
    }
  }, [])

  return data
}