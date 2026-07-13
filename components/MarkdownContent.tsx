export function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const renderedLines: Array<JSX.Element | { index: number; trimmed: string }> = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      const codeLines: string[] = [];
      let codeIndex = index + 1;

      while (codeIndex < lines.length && !lines[codeIndex].trim().startsWith("```")) {
        codeLines.push(lines[codeIndex]);
        codeIndex += 1;
      }

      renderedLines.push(
        <pre
          key={index}
          className="my-4 overflow-x-auto rounded-lg bg-ink p-3 text-xs leading-6 text-white sm:p-4 sm:text-sm"
        >
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      index = codeIndex;
      continue;
    }

    renderedLines.push({ index, trimmed });
  }

  return (
    <>
      {renderedLines.map((item) => {
        if (!("trimmed" in item)) {
          return item;
        }

        const { index, trimmed } = item;
        if (!trimmed) {
          return <div key={index} className="h-3" />;
        }

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={index}
              id={`section-${index}`}
              className="mt-7 scroll-mt-24 text-xl font-semibold text-ink sm:mt-8 sm:text-2xl"
            >
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
