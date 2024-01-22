## Properties

| Name      | Type                 | Default | Description                                                      |
|-----------|----------------------|---------|------------------------------------------------------------------|
| `options` | `leaflet.MapOptions` | `{}`    | Map options. See https://leafletjs.com/reference.html#map-option |
| `events`  | `string[]`           | `[]`    | Events to subscribe to.                                          |

## Methods

| Name                    | Description                                                                                                |
|-------------------------|------------------------------------------------------------------------------------------------------------|
| `getMap(): leaflet.Map` | Returns the underlying Leaflet `Map` object instance. See https://leafletjs.com/reference.html#map-factory |
