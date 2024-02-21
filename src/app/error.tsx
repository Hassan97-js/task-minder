"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

type TProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

function Error({ error, reset }: TProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-7 first-letter:uppercase text-center">
        Something went wrong!
      </h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}

export default Error;
