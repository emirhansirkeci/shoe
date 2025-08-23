interface TypesProps {
  types: { img: string }[];
}

export default function Types({ types }: TypesProps) {
  return (
    <div className="flex gap-4">
      {types.map((type, index) => (
        <div
          key={index}
          className="flex h-24 w-24 items-center justify-center rounded-3xl border-2"
        >
          <img src={type.img} className="w-20" />
        </div>
      ))}
    </div>
  );
}
