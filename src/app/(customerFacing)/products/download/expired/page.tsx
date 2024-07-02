import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Expired() {
  return (
    <>
      <h1 className="text-4xl mb-4">გადმოსაწერი ლინკი ვადაგასულია</h1>
      <Button asChild size="lg">
        <Link href="/orders">მიიღეთ ახალი ლინკი</Link>
      </Button>
    </>
  );
}
