import { cn } from '../../utils';

interface SizesProps {
  sizes: { label: string; stock: boolean }[];
}

export default function Sizes({ sizes }: SizesProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Select Size</h3>
      <div className="flex flex-wrap gap-4">
        {sizes.map((size, i) => (
          <div
            key={i}
            className={cn(
              'flex h-12 w-[calc(25%-0.75rem)] items-center justify-center rounded-xl border border-gray-200 bg-white',
              { 'cursor-not-allowed opacity-50': !size.stock },
            )}
          >
            {size.label}
          </div>
        ))}
      </div>
    </div>
  );
}
