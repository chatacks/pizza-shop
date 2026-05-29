import { Skeleton } from '@/components/ui/skeleton';

interface MetricCardSkeletonProps {
  className?: string;
}

function MetricCardSkeleton({ className }: MetricCardSkeletonProps) {
  return (
    <>
      <Skeleton className={`mt-1 h-7 w-36 ${className}`} />
      <Skeleton className="h-4 w-52" />
    </>
  );
}

export default MetricCardSkeleton;
