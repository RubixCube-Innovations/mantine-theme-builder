export const generatedShadcnCssStyles = `/* Checkbox */
.mantine-Checkbox-root {
  --checkbox-color: var(--mantine-primary-color-filled);
  --checkbox-icon-color: var(--mantine-primary-color-contrast) !important;

  .mantine-Checkbox-input {
    background-color: transparent;
    border-color: var(--checkbox-color);

    &[data-indeterminate],
    &:checked {
      background-color: var(--checkbox-color);
    }

    &:disabled {
      opacity: 0.5;

      &+.mantine-Checkbox-icon {
        opacity: 0.5;
        color: var(--checkbox-icon-color);
      }
    }
  }

  .mantine-Checkbox-label {
    &[data-disabled] {
      color: inherit;
      opacity: 0.7;
    }
  }

  &[data-variant="outline"] {
    .mantine-Checkbox-input {
      background-color: transparent;

      &+.mantine-Checkbox-icon {
        color: var(--checkbox-color);
      }
    }
  }
}

/* Checkbox Group */
.mantine-CheckboxGroup-root {
  .mantine-CheckboxGroup-error {
    margin-top: 8px;
  }
}

/* Chip */
.mantine-Chip-root {

  --chip-color: var(--mantine-primary-color-contrast);
  &[data-variant="outline"]:not([data-disabled]) {
    .mantine-Chip-label {
      background-color: transparent;
      --chip-bd: 1px solid var(--mantine-color-default-border);

      &:hover {
        background-color: var(--mantine-color-default-hover);
      }

      &:where([data-checked]) {
        --chip-icon-color: var(--chip-bg);
        --chip-bd: 1px solid var(--chip-bg);
        border: var(--chip-bd);


        &:hover {
          background-color: var(--chip-hover);
          color: var(--chip-color);
          --chip-bd: 1px solid var(--chip-bg);
          --chip-icon-color: var(--chip-color);
        }
      }

      &:where([data-disabled]) {
        --chip-icon-color: var(--mantine-color-text);
        border-color: var(--mantine-color-default-border);
        color: var(--mantine-color-text);
        opacity: 0.5;

        &:hover {
          background-color: transparent;
          color: var(--mantine-color-text);
          --chip-bd: 1px solid var(--mantine-color-default-border);
          --chip-icon-color: var(--mantine-color-text);
        }
      }
    }
  }
}

/* Input */
.mantine-Input-wrapper {
  @mixin light {
    --input-disabled-bg: alpha(var(--mantine-color-default-hover), 0.5);
    --input-disabled-color: alpha(var(--mantine-color-text), 0.5);

    &[data-variant='default'] {
      --input-bd: var(--mantine-color-default-border);
      --input-bg: transparent;
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

    &[data-variant='filled'] {
      --input-bd: transparent;
      --input-bg: var(--mantine-color-default-hover);
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

    &[data-variant='unstyled'] {
      --input-bd: transparent;
      --input-bg: transparent;
      --input-bd-focus: transparent;
    }
  }

  @mixin dark {
    --input-disabled-bg: alpha(var(--mantine-color-default-hover), 0.5);
    --input-disabled-color: alpha(var(--mantine-color-text), 0.5);

    &[data-variant='default'] {
      --input-bd: var(--mantine-color-default-border);
      --input-bg: transparent;
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

    &[data-variant='filled'] {
      --input-bd: transparent;
      --input-bg: var(--mantine-color-default-hover);
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

    &[data-variant='unstyled'] {
      --input-bd: transparent;
      --input-bg: transparent;
      --input-bd-focus: transparent;
    }
  }
}

/* Fieldset */
.mantine-Fieldset-root {

  border-color: var(--mantine-color-default-border);
  background-color: transparent;

  &[data-variant='filled'] {
    border-color: var(--mantine-color-default-border);
    background-color: alpha(var(--mantine-color-default-hover), 0.4);
  }

  &[data-variant='unstyled'] {
    border-color: transparent;
    background-color: transparent;
  }

}

/* Radio */
.mantine-Radio-root {

  .mantine-Radio-radio {
    background-color: transparent;
    border-color: var(--radio-color);

    &:checked {
      background-color: var(--radio-color);
      border-color: var(--radio-color);
    }

    &+.mantine-Radio-icon {
      color: var(--radio-icon-color);
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  &[data-variant='outline'] {
    .mantine-Radio-radio {
      background-color: transparent;
      border-color: var(--radio-color);

      &:checked:not(:disabled) {
        background-color: transparent;
        border-color: var(--radio-color);
      }

      &:disabled {
        opacity: 0.5;

        &+.mantine-Radio-icon {
          color: var(--radio-color);
          --radio-icon-opacity: 0.5;
        }
      }
    }
  }
}

/* Segmented Control */
.mantine-SegmentedControl-root {
  background-color: var(--mantine-color-secondary-outline-hover);

  .mantine-SegmentedControl-label {
    color: var(--mantine-color-dimmed);
    &[data-active] {
      color: var(--mantine-color-text);
    }
  }
}

/* Switch */


/* Slider */
.mantine-Slider-root {
  @mixin light {
  --slider-track-bg: var(--mantine-color-secondary-outline-hover); 
  }
  @mixin dark {
  --slider-track-bg: var(--mantine-color-secondary-outline-hover); 
  }
  .mantine-Slider-trackContainer{
    &[data-disabled] {
      opacity: 0.5;
    }
  }

  .mantine-Slider-label {
    background-color: var(--mantine-color-default) !important;
    color: var(--mantine-color-text);
    border: 1px solid var(--mantine-color-default-border) !important;
    top: -45px;
  }
}

/* ActionIcon */
.mantine-ActionIcon-root {
  
  &:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])) {
    border: var(--ai-bd);
    opacity: 0.5;

    @mixin where-light {
      background-color: var(--ai-bg);
      color: var(--ai-color);
    }

    @mixin where-dark {
      background-color: var(--ai-bg);
      color: var(--ai-color);
    }

    &:active {
      transform: none;
    }
  }
}

/* Button */
.mantine-Button-root {

  &:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])) {
    border: var(--button-bd);
    opacity: 0.5;

    @mixin where-light {
      color: var(--button-color);
      background-color: var(--button-bg);
    }

    @mixin where-dark {
      color: var(--button-color);
      background-color: var(--button-bg);
    }
  }
}

/* Close Button */
.mantine-CloseButton-root {
  &[data-variant="subtle"]:where(:not([data-disabled], :disabled)){
    @mixin hover {
      @mixin where-light {
        background-color: var(--mantine-color-default-hover);
      }
  
      @mixin where-dark {
        background-color: var(--mantine-color-default-hover);
      }
    }
  }
}

/* NavLink */
.mantine-NavLink-root {
  @mixin hover {
    @mixin where-light {
      background-color: var(--mantine-color-default-hover);
    }

    @mixin where-dark {
      background-color: var(--mantine-color-default-hover);
    }
  }

  &:where([data-active], [aria-current='page']) {
    background-color: var(--nl-bg);
    color: var(--nl-color);

    @mixin hover {
      background-color: var(--nl-hover);
    }

    .description {
      --description-opacity: 0.9;
      --description-color: var(--nl-color);
    }
  }
}

/* Pagination */
.mantine-Pagination-root {
  .mantine-Pagination-control {
    @mixin where-light {
      border-color: var(--mantine-color-default-border);
      background-color: var(--mantine-color-bright);
  
      @mixin hover {
        &:where(:not(:disabled, [data-disabled])) {
          background-color: var(--mantine-color-default-hover);
        }
      }
    }
  
    @mixin where-dark {
      border-color: var(--mantine-color-default-border);
      background-color: var(--mantine-color-bright);
  
      @mixin hover {
        &:where(:not(:disabled, [data-disabled])) {
          background-color: var(--mantine-color-default-hover);
        }
      }
    }
    &:where([data-active]) {
      background-color: var(--pagination-active-bg);
      border-color: var(--pagination-active-bg);
      color: var(--pagination-active-color, var(--mantine-primary-color-contrast));
  
      @mixin hover {
        background-color: rgba(from var(--pagination-active-bg) r g b / 0.9);
      }
    }
  }
}

/* Stepper */
.mantine-Stepper-root {
  .mantine-Stepper-stepIcon {
    @mixin where-light {
      background-color: var(--mantine-color-bright);
      border-color: var(--mantine-color-default-border);
      color: var(--mantine-color-text);
    }
  
    @mixin where-dark {
      background-color: var(--mantine-color-bright);
      border-color: var(--mantine-color-default-border);
      color: var(--mantine-color-text);
    }
    &:where([data-progress]) {
      border-color: var(--step-color);
    }
  
    &:where([data-completed]) {
      color: var(--stepper-icon-color, var(--mantine-color-white));
      background-color: var(--step-color);
      border-color: var(--step-color);
    }
  }
}

/* Tabs */
.mantine-Tabs-root {
  @mixin light {
    --tab-border-color: var(--mantine-color-default-border);
  }

  @mixin dark {
    --tab-border-color: var(--mantine-color-default-border);
  }

  &[data-variant='default'] {
    --tabs-list-border-width: 2px;

    @mixin light {
      --tab-hover-color: var(--mantine-color-default-hover);
    }

    @mixin dark {
      --tab-hover-color: var(--mantine-color-default-hover);
    }
  }

  &[data-variant='pills'] {
    --tabs-list-gap: calc(var(--mantine-spacing-sm) / 2);
    --tabs-text-color: var(--mantine-color-bright) !important;

    @mixin light {
      --tab-hover-color: var(--mantine-color-default-hover);
    }

    @mixin dark {
      --tab-hover-color: var(--mantine-color-default-hover);
    }
  }

}

/* Notification */
.mantine-Notification-root {
  @mixin where-light {
    background-color: var(--mantine-color-secondary-filled);
  }

  @mixin where-dark {
    background-color: var(--mantine-color-secondary-filled);
  }

  &:where([data-with-border]) {
    @mixin where-light {
      border: 1px solid var(--mantine-color-default-border);
    }

    @mixin where-dark {
      border: 1px solid var(--mantine-color-default-border);
    }
  }
}

/* Progress */
.mantine-Progress-root {
  @mixin where-light {
    background-color: var(--mantine-color-default-hover);
  }

  @mixin where-dark {
    background-color: var(--mantine-color-default-hover);
  }
}

/* Ring Progress */
.mantine-RingProgress-root {
  .mantine-RingProgress-curve {
    @mixin light {
      --rp-curve-root-color: var(--mantine-color-default-hover);
    }
  
    @mixin dark {
      --rp-curve-root-color: var(--mantine-color-default-hover);
    }
  }
}

/* SemiCircle Progress */
.mantine-SemiCircleProgress-root {
  @mixin where-light {
    --scp-empty-segment-color: var(--mantine-color-default-hover);
  }

  @mixin where-dark {
    --scp-empty-segment-color: var(--mantine-color-default-hover);
  }
}

/* Skeleton */
.mantine-Skeleton-root {
  &:where([data-visible]) {
    &::after {
      @mixin where-light {
        background-color: var(--mantine-color-default-hover);
      }

      @mixin where-dark {
        background-color: var(--mantine-color-default-hover);
      }
    }
  }
}

/* Drawer */
.mantine-Drawer-root {
  .mantine-Drawer-content {
    border-right: 1px solid var(--mantine-color-default-border);
    border-left: 1px solid var(--mantine-color-default-border);
  }
}

/* Hover Card */
.mantine-HoverCard-dropdown {
  background-color: var(--mantine-color-default);
  border-color: var(--mantine-color-default-border);
  border-radius: var(--mantine-radius-default);
}

/* Menu Dropdown */
.mantine-Menu-dropdown {
  background-color: var(--mantine-color-default);
  border-color: var(--mantine-color-default-border);

  .mantine-Menu-item {
    background-color: transparent;

    &:where([data-hovered]) {
      background-color: var(--menu-item-hover, var(--mantine-color-default-hover));
    }
  }

  .mantine-Menu-divider {
    border-color: var(--mantine-color-default-border);
  }
}

/* Modal */
.mantine-Modal-root {
  .mantine-Modal-content {
    border: 1px solid var(--mantine-color-default-border);
    border-radius: var(--mantine-radius-default);
  }
}

/* Popover Start*/
.mantine-Popover-dropdown {
  @mixin where-light {
    --popover-border-color: var(--mantine-color-default-border);
    background-color: var(--mantine-color-bright);
  }

  @mixin where-dark {
    --popover-border-color: var(--mantine-color-default-border);
    background-color: var(--mantine-color-bright);
  }
}
.mantine-Popover-arrow {
  --popover-border-color: var(--mantine-color-default-border);
}
/* Popover End */

/* Tooltip */
.mantine-Tooltip-tooltip {
  font-size: var(--mantine-font-size-xs);
  padding-top: 0;
  padding-bottom: 0;
}

/* Accordion */
.mantine-Accordion-root {
  .mantine-Accordion-control {
    color: var(--mantine-color-text);
  }

  .mantine-Accordion-item {
    --item-border-color: var(--mantine-color-default-border);
    --item-filled-color: var(--mantine-color-default-hover);
  }

    &[data-variant='default'] {
      .mantine-Accordion-control {
        &:where(:not(:disabled, [data-disabled])) {
          &:hover {
            background-color: transparent;
          }
        }
      }
      .mantine-Accordion-label {
        &:where(:not(:disabled, [data-disabled])) {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    &[data-variant='contained'], &[data-variant='filled'] {
      .mantine-Accordion-control {
        &:where(:not(:disabled, [data-disabled])) {
          &:hover {
            background-color: var(--mantine-color-default-hover);
          }
        }
      }
    }
}

/* Paper */
.mantine-Paper-root {
  &:where([data-with-border]) {
    @mixin where-light {
      border: rem(1px) solid var(--mantine-color-default-border);
    }

    @mixin where-dark {
      border: rem(1px) solid var(--mantine-color-default-border);
    }
  }
}

/* Checkbox Group */
.mantine-CheckboxGroup-root {
  .mantine-CheckboxGroup-error {
    margin-top: 8px;
  }
}

/* Chip */
.mantine-Chip-root {

  &[data-variant="filled"]:not([data-disabled]),
  &[data-variant="light"]:not([data-disabled]) {
    .mantine-Chip-label {
      background-color: var(--mantine-primary-color-light);

      &:hover {
        background-color: var(--mantine-primary-color-light-hover);
      }

      &:where([data-checked]) {
        --chip-icon-color: var(--chip-color);
        color: var(--chip-color);
        background-color: var(--chip-bg);

        &:hover {
          background-color: var(--chip-hover);
        }
      }

      &:where([data-disabled]) {
        --chip-icon-color: var(--mantine-color-text);
        background-color: var(--mantine-color-default-hover);
        color: var(--mantine-color-text);
        opacity: 0.5;

        &:hover {
          background-color: var(--mantine-color-default-hover);
        }
      }
    }
  }

  &[data-variant="outline"]:not([data-disabled]) {
    .mantine-Chip-label {
      background-color: transparent;
      --chip-bd: 1px solid var(--mantine-color-default-border);

      &:hover {
        background-color: var(--mantine-color-default-hover);
      }

      &:where([data-checked]) {
        --chip-icon-color: var(--chip-bg);
        --chip-bd: 1px solid var(--chip-bg);


        &:hover {
          background-color: var(--chip-hover);
          color: var(--chip-color);
          --chip-bd: 1px solid var(--chip-bg);
          --chip-icon-color: var(--chip-color);
        }
      }

      &:where([data-disabled]) {
        --chip-icon-color: var(--mantine-color-text);
        border-color: var(--mantine-color-default-border);
        color: var(--mantine-color-text);
        opacity: 0.5;

        &:hover {
          background-color: transparent;
          color: var(--mantine-color-text);
          --chip-bd: 1px solid var(--mantine-color-default-border);
          --chip-icon-color: var(--mantine-color-text);
        }
      }
    }
  }
}

/* Color Input */
.mantine-ColorInput-dropdown {
  background-color: var(--mantine-color-default);
  border-color: var(--mantine-color-default-border);
}

/* Input */
.mantine-Input-wrapper {
  @mixin light {
    --input-disabled-bg: alpha(var(--mantine-color-default-hover), 0.5);
    --input-disabled-color: alpha(var(--mantine-color-text), 0.5);

    &[data-variant='default'] {
      --input-bd: var(--mantine-color-default-border);
      --input-bg: transparent;
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

    &[data-variant='filled'] {
      --input-bd: transparent;
      --input-bg: var(--mantine-color-default-hover);
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

    &[data-variant='unstyled'] {
      --input-bd: transparent;
      --input-bg: transparent;
      --input-bd-focus: transparent;
    }
  }

  @mixin dark {
    --input-disabled-bg: alpha(var(--mantine-color-default-hover), 0.5);
    --input-disabled-color: alpha(var(--mantine-color-text), 0.5);

    &[data-variant='default'] {
      --input-bd: var(--mantine-color-default-border);
      --input-bg: transparent;
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

    &[data-variant='filled'] {
      --input-bd: transparent;
      --input-bg: var(--mantine-color-default-hover);
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

    &[data-variant='unstyled'] {
      --input-bd: transparent;
      --input-bg: transparent;
      --input-bd-focus: transparent;
    }
  }
}

/* Fieldset */
.mantine-Fieldset-root {

  border-color: var(--mantine-color-default-border);
  background-color: transparent;

  &[data-variant='filled'] {
    border-color: var(--mantine-color-default-border);
    background-color: alpha(var(--mantine-color-default-hover), 0.4);
  }

  &[data-variant='unstyled'] {
    border-color: transparent;
    background-color: transparent;
  }

}

/* Radio */
.mantine-Radio-root {

  .mantine-Radio-radio {
    background-color: transparent;
    border-color: var(--radio-color);

    &:checked {
      background-color: var(--radio-color);
      border-color: var(--radio-color);
    }

    &+.mantine-Radio-icon {
      color: var(--radio-icon-color);
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  &[data-variant='outline'] {
    .mantine-Radio-radio {
      background-color: transparent;
      border-color: var(--radio-color);

      &:checked:not(:disabled) {
        background-color: transparent;
        border-color: var(--radio-color);
      }

      &:disabled {
        opacity: 0.5;

        &+.mantine-Radio-icon {
          color: var(--radio-color);
          --radio-icon-opacity: 0.5;
        }
      }
    }
  }
}

/* Segmented Control */
.mantine-SegmentedControl-root {
  background-color: var(--mantine-color-secondary-outline-hover);

  .mantine-SegmentedControl-label {
    color: var(--mantine-color-dimmed);
    &[data-active] {
      color: var(--mantine-color-text);
    }
  }
}

/* Slider */
.mantine-Slider-root {
  @mixin light {
  --slider-track-bg: var(--mantine-color-secondary-outline-hover); 
  }
  @mixin dark {
  --slider-track-bg: var(--mantine-color-secondary-outline-hover); 
  }
  .mantine-Slider-trackContainer{
    &[data-disabled] {
      opacity: 0.5;
    }
  }

  .mantine-Slider-label {
    background-color: var(--mantine-color-default) !important;
    color: var(--mantine-color-text);
    border: 1px solid var(--mantine-color-default-border) !important;
    top: -45px;
  }
}

/* ActionIcon */
.mantine-ActionIcon-root {
  &:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])) {
    border: var(--ai-bd);
    opacity: 0.5;

    @mixin where-light {
      background-color: var(--ai-bg);
      color: var(--ai-color);
    }

    @mixin where-dark {
      background-color: var(--ai-bg);
      color: var(--ai-color);
    }

    &:active {
      transform: none;
    }
  }
}

/* Button */
.mantine-Button-root {

  &:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])) {
    border: var(--button-bd);
    opacity: 0.5;

    @mixin where-light {
      color: var(--button-color);
      background-color: var(--button-bg);
    }

    @mixin where-dark {
      color: var(--button-color);
      background-color: var(--button-bg);
    }
  }
}

/* Badge */
.mantine-Badge-root {
  --badge-color: var(--mantine-primary-color-contrast);
  &[data-variant="dot"] {
    background-color: var(--mantine-color-secondary-light);
    border-color: var(--mantine-color-secondary-light);
    color: var(--mantine-color-text);
  }
}

/* Card */
.mantine-Card-root {
  background-color: var(--mantine-color-default);
  
  .mantine-Card-section {
    border-color: var(--mantine-color-default-border);
  }
}

/* Timeline */
.mantine-Timeline-root {
  --item-border-color: var(--mantine-color-default-border);

  .mantine-Timeline-itemBullet {
    border-color: var(--mantine-color-default-border);

    &:where([data-with-child]) {
      background-color: var(--mantine-color-secondary-light);
    }

    &:where([data-active]) {
      border-color: var(--tli-color, var(--tl-color));
      background-color: var(--mantine-color-white);
      color: var(--tl-icon-color, var(--mantine-color-white));
  
      &:where([data-with-child]) {
        background-color: var(--tli-color, var(--tl-color));
        color: var(--tl-icon-color, var(--mantine-color-white));
      }
    }
  }

}

/* Code */
.mantine-Code-root{
  background-color: var(--code-bg, var(--mantine-color-secondary-filled));
  color: var(--mantine-color-text)
}

/* Table */
.mantine-Table-table {
  @mixin where-light {
    --table-hover-color: var(--mantine-color-default-hover);
    --table-striped-color: var(--mantine-color-default-hover);
    --table-border-color: var(--mantine-color-default-border);
  }

  @mixin where-dark {
    --table-hover-color: var(--mantine-color-default-hover);
    --table-striped-color: var(--mantine-color-default-hover);
    --table-border-color: var(--mantine-color-default-border);
  }

  &:where([data-with-table-border]) {
    border: rem(1px) solid var(var(--table-border-color), var(--mantine-color-default-border));
  }
}

/* Title */
.mantine-Title-root,
.mantine-Modal-title,
.mantine-Drawer-title {
  letter-spacing: -0.025em;
}

/* Date Picker */
.mantine-DatePicker-levelsGroup {
  .mantine-DatePicker-calendarHeader {
    --dch-control-size-xs: calc(1.25rem* var(--mantine-scale));
    --dch-control-size-sm: calc(1.75rem* var(--mantine-scale));
    --dch-control-size-md: calc(2.25rem* var(--mantine-scale));
    --dch-control-size-lg: calc(2.5rem* var(--mantine-scale));
    --dch-control-size-xl: calc(2.75rem* var(--mantine-scale));

    max-width: none;
    gap: var(--mantine-spacing-xs);

    .mantine-DatePicker-calendarHeaderControl {
      border: 1px solid var(--mantine-color-default-border);
      border-radius: var(--mantine-radius-default);

      &:hover {
        background-color: var(--mantine-color-default-hover) !important;
      }
    }

    .mantine-DatePicker-calendarHeaderLevel {
      &:hover {
        background-color: var(--mantine-color-default-hover) !important;
      }

      font-size: var(--mantine-font-size-sm);
    }
  }

  .mantine-DatePicker-month {
    border-collapse: separate;
    border-spacing: 0 5px;

    .mantine-DatePicker-weekdaysRow {
      .mantine-DatePicker-weekday {
        font-size: var(--mantine-font-size-xs);
      }
    }

    .mantine-DatePicker-monthRow {
      margin-top: var(--mantine-spacing-xs);
      margin-bottom: var(--mantine-spacing-xs);

      .mantine-DatePicker-day {

        --day-size-xs: calc(1.5rem* var(--mantine-scale));
        --day-size-sm: calc(2rem* var(--mantine-scale));
        --day-size-md: calc(2.5rem* var(--mantine-scale));
        --day-size-lg: calc(3rem* var(--mantine-scale));
        --day-size-xl: calc(3.5rem* var(--mantine-scale));

        font-size: calc(var(--day-size)/2.28);

        &:hover:where(:not([data-static], [data-disabled], [data-selected], [data-in-range])) {
          background-color: var(--mantine-color-default-hover) !important;
          border-radius: var(--mantine-radius-default);

          &[data-in-range] {
            border-radius: 0;
          }
        }

        &:where([data-selected]):hover:where(:not([data-disabled], [data-static])) {
          background-color: var(--mantine-primary-color-filled-hover);
          border-radius: var(--mantine-radius-default);
        }

        &[data-weekend] {
          color: var(--mantine-color-text);
        }

        &[data-last-in-range],
        &[data-first-in-range] {
          border-radius: var(--mantine-radius-default);
        }

      }
    }
  }

  .mantine-DatePicker-monthsList {
    .mantine-DatePicker-monthsListControl {
      --dpc-size-xs: calc(1.5rem* var(--mantine-scale));
      --dpc-size-sm: calc(1.96rem* var(--mantine-scale));
      --dpc-size-md: calc(2.5rem* var(--mantine-scale));
      --dpc-size-lg: calc(3rem* var(--mantine-scale));
      --dpc-size-xl: calc(3.5rem* var(--mantine-scale));

      &:hover:where(:not([data-disabled], :disabled)) {
        background-color: var(--mantine-color-default-hover) !important;
      }
    }
  }

  .mantine-DatePicker-yearsList {
    .mantine-DatePicker-yearsListControl {
      --dpc-size-xs: calc(1.5rem* var(--mantine-scale));
      --dpc-size-sm: calc(1.96rem* var(--mantine-scale));
      --dpc-size-md: calc(2.5rem* var(--mantine-scale));
      --dpc-size-lg: calc(3rem* var(--mantine-scale));
      --dpc-size-xl: calc(3.5rem* var(--mantine-scale));

      &:hover:where(:not([data-disabled], :disabled)) {
        background-color: var(--mantine-color-default-hover) !important;
      }
    }
  }
}

/* Divider */
.mantine-Divider-root {
  @mixin where-light {
    --divider-color: var(--mantine-color-default-border);
  }

  @mixin where-dark {
    --divider-color: var(--mantine-color-default-border);
  }
}

/* Spotlight */
.mantine-Spotlight-root {

  .mantine-Spotlight-content {
    border: 1px solid var(--mantine-color-default-border);
  }

  .mantine-Spotlight-actionsList {
    border-color: var(--mantine-color-default-border);
  }

  .mantine-Spotlight-action {
    &:where(:not([data-selected])) {
      @mixin hover {
        background-color: var(--mantine-color-default-hover);
      }
    }
  }

  .mantine-Spotlight-footer {
    border-color: var(--mantine-color-default-border);
  }
}
`;