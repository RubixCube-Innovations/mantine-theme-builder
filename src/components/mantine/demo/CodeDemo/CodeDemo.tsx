import { DemoArea, DemoAreaProps } from "../DemoArea";
import { DemoCode, DemoCodeProps } from "../DemoCode";
import { DemoRoot } from "../DemoRoot";
import { useState } from "react";
import { Button, Flex } from "@mantine/core";

export interface CodeDemoProps extends DemoCodeProps, DemoAreaProps {}

export function CodeDemo({
  code,
  children,
  withPadding,
  centered,
  defaultExpanded = true,
  maxWidth,
  minHeight,
  dimmed,
  striped,
}: CodeDemoProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <DemoRoot>
      <DemoArea
        withPadding={withPadding}
        centered={centered}
        maxWidth={maxWidth}
        minHeight={minHeight}
        dimmed={dimmed}
        striped={striped}
      >
        {children}
      </DemoArea>

      <Flex justify={"center"} py={"md"}>
        <Button variant="light" onClick={() => setShowCode((prev) => !prev)}>
          {showCode ? "Hide Code" : "Show Code"}
        </Button>
      </Flex>

      {showCode && <DemoCode code={code} defaultExpanded={defaultExpanded} />}
    </DemoRoot>
  );
}
