See https://leafletjs.com/reference.html#polyline

## Properties

| Name          | Type                                                         | Default     | Description             |
|---------------|--------------------------------------------------------------|-------------|-------------------------|
| `latLngs`     | `leaflet.LatLngExpression[] \| leaflet.LatLngExpression[][]` |             | Geographical points.    | 
| `color`       | `string \| undefined`                                        | `"#3388ff"` | Stroke color.           |
| `weight`      | `number \| undefined`                                        | `3`         | Stroke width in pixels. |
| `opacity`     | `number \| undefined`                                        | `1`         | Stroke opacity.         |
| `lineCap`     | `leaflet.LineCapShape \| undefined`                          | `"round"`   | Line cap shape.         |                         
| `lineJoin`    | `leaflet.LineJoinShape \| undefined`                         | `"round"`   | Line join shape.        |
| `dashArray`   | `string \| number[] \| undefined`                            | `undefined` | Dash pattern.           | 
| `dashOffset`  | `string \| undefined`                                        | `undefined` | Dash offset.            | 
| `options`     | `leaflet.PolylineOptions`                                    | `{}`        | Options.                |
| `events`      | `string[]`                                                   | `[]`        | Events to bridge.       |

## Slots

| Name    | Description   |
|---------|---------------|
| default | Child layers. |

## Methods

| Name                              | Description                                     |
|-----------------------------------|-------------------------------------------------|
| `getPolylinw(): leaflet.Polyline` | Returns the underlying Leaflet object instance. |
