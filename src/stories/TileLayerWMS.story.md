See https://leafletjs.com/reference.html#tilelayer-wms

## Properties

| Name      | Type                 | Default | Description       |
|-----------|----------------------|---------|-------------------|
| `url`     | `string`             |         | URL.              |
| `opacity` | `number`             | `1.0`   | Opacity.          |
| `zIndex`  | `number`             | `1`     | z-index.          |
| `options` | `leaflet.WMSOptions` | `{}`    | Options.          |
| `events`  | `string[]`           | `[]`    | Events to bridge. |

## Methods

| Name                                    | Description                                     |
|-----------------------------------------|-------------------------------------------------|
| `getTileLayer(): leaflet.TileLayer.WMS` | Returns the underlying Leaflet object instance. |
