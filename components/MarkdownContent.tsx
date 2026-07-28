export function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const renderedLines: Array<
    | JSX.Element
    | { kind: "line"; index: number; trimmed: string }
    | { kind: "list"; index: number; items: string[] }
    | { kind: "table"; index: number; headers: string[]; rows: string[][] }
  > = [];

  function splitTableRow(line: string) {
    return line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());
  }

  function isTableDivider(line: string) {
    const cells = splitTableRow(line);
    return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
  }

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

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      let listIndex = index;

      while (listIndex < lines.length && lines[listIndex].trim().startsWith("- ")) {
        items.push(lines[listIndex].trim().replace("- ", ""));
        listIndex += 1;
      }

      renderedLines.push({ kind: "list", index, items });
      index = listIndex - 1;
      continue;
    }

    if (
      trimmed.startsWith("|") &&
      lines[index + 1]?.trim().startsWith("|") &&
      isTableDivider(lines[index + 1])
    ) {
      const headers = splitTableRow(trimmed);
      const rows: string[][] = [];
      let rowIndex = index + 2;

      while (rowIndex < lines.length && lines[rowIndex].trim().startsWith("|")) {
        rows.push(splitTableRow(lines[rowIndex]));
        rowIndex += 1;
      }

      renderedLines.push({ kind: "table", index, headers, rows });
      index = rowIndex - 1;
      continue;
    }

    renderedLines.push({ kind: "line", index, trimmed });
  }

  return (
    <>
      {renderedLines.map((item) => {
        if (!("kind" in item)) {
          return item;
        }

        if (item.kind === "list") {
          return (
            <ul key={item.index} className="my-4 space-y-2 pl-5 text-stone-700 sm:my-5 sm:pl-6">
              {item.items.map((listItem, listIndex) => (
                <li key={`${item.index}-${listIndex}`} className="list-disc leading-7 sm:leading-8">
                  {listItem}
                </li>
              ))}
            </ul>
          );
        }

        if (item.kind === "table") {
          return (
            <div key={item.index} className="-mx-1 my-5 overflow-x-auto pb-1 sm:mx-0">
              <table className="min-w-[40rem] border-collapse text-left text-sm leading-6 text-stone-700">
                <thead>
                  <tr>
                    {item.headers.map((header, headerIndex) => (
                      <th
                        key={`${item.index}-header-${headerIndex}`}
                        className="border-b border-stone-200 bg-cream px-3 py-2 font-semibold text-ink"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item.rows.map((row, rowIndex) => (
                    <tr key={`${item.index}-row-${rowIndex}`}>
                      {item.headers.map((_, cellIndex) => (
                        <td
                          key={`${item.index}-cell-${rowIndex}-${cellIndex}`}
                          className="border-b border-stone-100 px-3 py-2 align-top"
                        >
                          {row[cellIndex] || ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
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

        return (
          <p key={index} className="leading-7 text-stone-700 sm:leading-8">
            {trimmed}
          </p>
        );
      })}
    </>
  );
}
