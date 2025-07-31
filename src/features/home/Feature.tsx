interface Props {
  headline: string;
  subText: string;
  imageSrc: string;
  reverse?: boolean;
}

function Feature({ headline, subText, imageSrc, reverse = false }: Props) {
  return (
    <article
      className={`${reverse ? "flex-row-reverse" : "flex-row"} flex w-full max-w-[1140px] justify-between px-10`}
    >
      <div
        className={`${reverse ? "text-left" : "text-right"} flex w-full max-w-[calc(50%-40px)] flex-col justify-center gap-5`}
      >
        <h2 className="text-3xl font-bold">{headline}</h2>
        <p className="text-xl whitespace-pre-wrap text-gray-700">{subText}</p>
      </div>

      <img
        className="h-auto w-full max-w-[calc(50%-40px)] rounded-2xl border border-gray-100 shadow-lg"
        src={imageSrc}
        role="presentation"
      />
    </article>
  );
}

export default Feature;
