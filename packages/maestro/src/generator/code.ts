const indent = "    ";

function code(namespace: string, props: Record<string, unknown>): string {
  const args = Object.entries(props)
    .map(([key, value]) => {
      if (typeof value !== "object") {
        return `${indent}${key}: ${JSON.stringify(value, null, 2)},`;
      }

      const jsonString = JSON.stringify(value, null, 2);
      const adjustedJsonString = jsonString
        .split("\n")
        .map((line, i) => {
          if (i === 0) {
            return line;
          }

          return `${indent}${line}`;
        })
        .join("\n");

      return `${indent}${key}: ${adjustedJsonString},`;
    })
    .join("\n");

  return `
{% include "${namespace}" with {
${args}
%}
  `;
}

export { code };
