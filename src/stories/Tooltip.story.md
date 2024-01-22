See https://leafletjs.com/reference.html#tooltip

## Properties

| Name      | Type                     | Default | Description       |
|-----------|--------------------------|---------|-------------------|
| `options` | `leaflet.TooltipOptions` | `{}`    | Options.          |
| `events`  | `string[]`               | `[]`    | Events to bridge. |

## Slots

| Name    | Description   |
|---------|---------------|
| default | Child layers. |

## Methods

| Name                            | Description                                     |
|---------------------------------|-------------------------------------------------|
| `getTooltip(): leaflet.Tooltip` | Returns the underlying Leaflet object instance. |
