See https://leafletjs.com/reference.html#imageoverlay

## Properties

| Name       | Type                             | Default | Description       |
|------------|----------------------------------|---------|-------------------|
| `imageUrl` | `string`                         |         | Image URL.        |
| `bounds`   | `leaflet.LatLngBoundsExpression` |         | Bounds.           |
| `opacity`  | `number`                         | `1.0`   | Opacity.          |
| `zIndex`   | `number`                         | `1`     | z-index.          |
| `options`  | `leaflet.ImageOverlayOptions`    | `{}`    | Options.          |
| `events`   | `string[]`                       | `[]`    | Events to bridge. |

## Methods

| Name                                      | Description                                     |
|-------------------------------------------|-------------------------------------------------|
| `getImageOverlay(): leaflet.ImageOverlay` | Returns the underlying Leaflet object instance. |
