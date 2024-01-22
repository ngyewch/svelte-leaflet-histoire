See https://leafletjs.com/reference.html#marker

## Properties

| Name           | Type                              | Default   | Description       |
|----------------|-----------------------------------|-----------|-------------------|
| `latLng`       | `leaflet.LatLngExpression`        |           | Location.         |
| `zIndexOffset` | `number`                          | `0`       | z-index offset.   |
| `icon`         | `leaflet.Icon \| leaflet.DivIcon` | (default) | Icon.             |
| `opacity`      | `number`                          | `1.0`     | Opacity.          |
| `options`      | `leaflet.MarkerOptions`           | `{}`      | Options.          |
| `events`       | `string[]`                        | `[]`      | Events to bridge. |

## Methods

| Name                          | Description                                     |
|-------------------------------|-------------------------------------------------|
| `getMarker(): leaflet.Marker` | Returns the underlying Leaflet object instance. |
