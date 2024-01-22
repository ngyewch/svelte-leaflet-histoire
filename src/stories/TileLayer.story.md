See https://leafletjs.com/reference.html#tilelayer

## Properties

| Name      | Type                       | Default | Description       |
|-----------|----------------------------|---------|-------------------|
| `url`     | `string`                   |         | URL.              |
| `opacity` | `number`                   | `1.0`   | Opacity.          |
| `zIndex`  | `number`                   | `1`     | z-index.          |
| `options` | `leaflet.TileLayerOptions` | `{}`    | Options.          |
| `events`  | `string[]`                 | `[]`    | Events to bridge. |

## Methods

| Name                                | Description                                     |
|-------------------------------------|-------------------------------------------------|
| `getTileLayer(): leaflet.TileLayer` | Returns the underlying Leaflet object instance. |
