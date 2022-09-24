# inline-alert

The Inline Alert component

## Properties

| Property        | Attribute        | Type                                          | Default |
|-----------------|------------------|-----------------------------------------------|---------|
| `alertSize`     | `alert-size`     | `"small" \| "large"`                          | "large" |
| `alertType`     | `alert-type`     | `"info" \| "warning" \| "error" \| "success"` | "info"  |
| `isInteractive` | `is-interactive` | `boolean`                                     | false   |

## Slots

| Name      | Description              |
|-----------|--------------------------|
| `default` | The alert contents.      |
| `header`  | The header in the alert. |

## CSS Custom Properties

| Property                 | Description                                      |
|--------------------------|--------------------------------------------------|
| `--inline-alert-error`   | background: The background color for the error alert. |
| `--inline-alert-info`    | background: The background color for the info alert. |
| `--inline-alert-success` | background: The background color for the success alert. |
| `--inline-alert-warning` | background: The background color for the warning alert. |
