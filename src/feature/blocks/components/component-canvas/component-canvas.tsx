import cx from "clsx";
import { useState } from "react";
import { CodeHighlightTabs } from "@mantinex/shiki";
import { MantineThemeProvider, Box } from "@mantine/core";
import { getCodeFileIcon } from "@mantinex/dev-icons";
import * as UiComponents from "../../lib";
import { UiComponent } from "../../data/types";
import { ComponentPreview } from "../component-preview/component-preview";
import { CanvasHeader } from "./canvas-header";

import classes from "./component-canvas.module.css";

export function ComponentCanvas(props: UiComponent & { zIndex: number }) {
  const [state, setState] = useState("preview");
  const [primaryColor, setPrimaryColor] = useState("blue");
  const Component: any = UiComponents[props.component as keyof typeof UiComponents];

  return (
    <div className={classes.canvas}>
      <CanvasHeader
        {...props}
        state={state}
        primaryColor={primaryColor}
        onStateChange={setState}
        onPrimaryColorChange={setPrimaryColor}
      />

      <div
        className={cx(classes.body, {
          [classes.bodyWithCode]: state === "code",
          [classes.bodyRaw]: !props.attributes.canvas.center,
        })}
      >
        {state === "preview" ? (
          <Box
            mod={{ dimmed: props.attributes.dimmed }}
            className={classes.preview}
            style={{ zIndex: props.zIndex }}
            bg={"var(--mantine-color-body)"}
          >
            <ComponentPreview canvas={props.attributes.canvas}>
              <MantineThemeProvider inherit theme={{ primaryColor }}>
                <Component {...props.attributes.props} />
              </MantineThemeProvider>
            </ComponentPreview>
          </Box>
        ) : (
          <Box pos="relative">
            <CodeHighlightTabs code={props.code as any} getFileIcon={getCodeFileIcon} />
          </Box>
        )}
      </div>
    </div>
  );
}
