import { z } from "zod";

export function handleError(
  error: unknown,
  defaultError: string = "Oops! Something went wrong!"
) {
  if (error instanceof z.ZodError) {
    return {
      message: null,
      error: "Invalid inputs"
    };
  }

  if (error instanceof Error) {
    return {
      message: null,
      error: error.message
    };
  }

  if (typeof error === "string") {
    return {
      error
    };
  }

  return {
    message: null,
    error: defaultError
  };
}
