See https://leafletjs.com/reference.html#geojson

## Properties

| Name      | Type                                 | Default     | Description       |
|-----------|--------------------------------------|-------------|-------------------|
| `data`    | `geojson.GeoJsonObject \| undefined` | `undefined` | GeoJSON data.     |
| `options` | `leaflet.GeoJSONOptions`             | `{}`        | Options.          |
| `events`  | `string[]`                           | `[]`        | Events to bridge. |

## Slots

| Name    | Description                                            |
|---------|--------------------------------------------------------|
| default | DivIcon contents. `options.html` has higher precedent. |

## Methods

| Name                            | Description                                     |
|---------------------------------|-------------------------------------------------|
| `getGeoJSON(): leaflet.GeoJSON` | Returns the underlying Leaflet object instance. |
