# inline-card-group

The outline-card-group component.

## Properties

| Property              | Attribute               | Type             | Default                                          | Description                                      |
|-----------------------|-------------------------|------------------|--------------------------------------------------|--------------------------------------------------|
| `alignItems`          | `align-items`           | `string`         |                                                  | Defines how the items will be aligned vertically in each row. |
| `columns`             | `columns`               | `string`         | "4"                                              | Maximum amount of columns.                       |
| `gridColumnGap`       | `grid-column-gap`       | `string`         | "1rem"                                           | Horizontal gap between items.                    |
| `gridRowGap`          | `grid-row-gap`          | `string`         | "1rem"                                           | Vertical gap between items.                      |
| `gridTemplateColumns` | `grid-template-columns` | `string`         |                                                  | Grid Template Columns.                           |
| `gridTemplateRows`    | `grid-template-rows`    | `string`         | "1fr"                                            | Grid Template Rows.                              |
| `itemMinWidth`        | `item-min-width`        | `string`         | "320px"                                          | Minimum width of each item.                      |
| `justifyItems`        | `justify-items`         | `string`         |                                                  | Defines how the items will be aligned horizontally in each column. |
| `slots`               |                         | `SlotController` | "new SlotController(\n    this, // This, the host element.\n    false // To shift or not to shift LightDom nodes to ShadowDOM.\n  )" |                                                  |

## Slots

| Name | Description       |
|------|-------------------|
|      | The default slot. |
