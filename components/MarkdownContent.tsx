export function MarkdownContent({ content }: { content: string }) {
  return (
    <>
      {content.split("\n").map((line, index) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return <div key={index} className="h-3" />;
        }

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={index} className="mt-7 text-xl font-semibold text-ink sm:mt-8 sm:text-2xl">
              {trimmed.replace("## ", "")}
            </h2>
          );
        }

        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={index} className="mt-6 text-lg font-semibold text-ink">
              {trimmed.replace("### ", "")}
            </h3>
          );
        }

        if (trimmed.startsWith("- ")) {
          return (
            <li key={index} className="ml-5 list-disc leading-7 text-stone-700 sm:ml-6 sm:leading-8">
              {trimmed.replace("- ", "")}
            </li>
          );
        }

        return (
          <p key={index} className="leading-7 text-stone-700 sm:leading-8">
            {trimmed}
          </p>
        );
      })}
    </>
  );
}
