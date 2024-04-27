type User = {
  name: string | null;
  food: string | null;
  drinks: string | null;
};

type Status = "not ready" | "ready" | "writing" | "voting" | "done";


export type {User, Status};