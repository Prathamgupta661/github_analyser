import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonChart = () => (
  <div className="mt-6 p-4 border rounded bg-white shadow-sm">
    <Skeleton className="h-5 w-1/2 mb-4" />
    <Skeleton className="h-64 w-full" />
  </div>
);
