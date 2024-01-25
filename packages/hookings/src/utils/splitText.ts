export type SplitTextOptions<T> = {
  type: "words" | "chars";
  changeArray?: (arr: T[]) => T[];
};

function splitText<T extends React.ReactNode>(
  text: string,
  render: (splitText: string, index: number) => T,
  options: SplitTextOptions<T> = {
    type: "chars",
  }
): T[] {
  const { type, changeArray } = options;

  const ts = text.split(type === "chars" ? "" : " ");

  let body: T[] = ts.map((splitText, index) => render(splitText, index));

  if (changeArray) {
    body = changeArray([...body]);
  }
  return body;
}

export { splitText };
