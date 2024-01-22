See https://leafletjs.com/reference.html#map

## Properties

| Name      | Type                 | Default | Description       |
|-----------|----------------------|---------|-------------------|
| `options` | `leaflet.MapOptions` | `{}`    | Options.          |
| `events`  | `string[]`           | `[]`    | Events to bridge. |

## Slots

| Name    | Description   |
|---------|---------------|
| default | Child layers. |

## Methods

| Name                    | Description                                     |
|-------------------------|-------------------------------------------------|
| `getMap(): leaflet.Map` | Returns the underlying Leaflet object instance. |
