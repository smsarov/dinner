type User = {
  name?: string;
  food?: string;
  drinks?: string;
};

type Status = "not ready" | "ready" | "writing" | "voting" | "done";


export type {User, Status};