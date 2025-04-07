import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonRepoList = () => (
  <div className="grid md:grid-cols-2 gap-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Card key={i} className="p-4 space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-3 w-1/3" />
      </Card>
    ))}
  </div>
);
