See https://leafletjs.com/reference.html#rectangle

## Properties

| Name          | Type                                 | Default     | Description             |
|---------------|--------------------------------------|-------------|-------------------------|
| `latLngs`     | `leaflet.LatLngBoundsExpression`     |             | Geographical points.    | 
| `color`       | `string \| undefined`                | `"#3388ff"` | Stroke color.           |
| `weight`      | `number \| undefined`                | `3`         | Stroke width in pixels. |
| `opacity`     | `number \| undefined`                | `1`         | Stroke opacity.         |
| `lineCap`     | `leaflet.LineCapShape \| undefined`  | `"round"`   | Line cap shape.         |                         
| `lineJoin`    | `leaflet.LineJoinShape \| undefined` | `"round"`   | Line join shape.        |
| `dashArray`   | `string \| number[] \| undefined`    | `undefined` | Dash pattern.           | 
| `dashOffset`  | `string \| undefined`                | `undefined` | Dash offset.            | 
| `fill`        | `boolean \| undefined`               | `true`      | Fill flag.              |
| `fillColor`   | `string \| undefined`                | `"#3388ff"` | Fill color.             | 
| `fillOpacity` | `number \| undefined`                | `0.2`       | Fill opacity.           |
| `fillRule`    | `leaflet.FillRule \| undefined`      | `"evenodd"` | Fill rule.              |
| `options`     | `leaflet.RectangleOptions`           | `{}`        | Options.                |
| `events`      | `string[]`                           | `[]`        | Events to bridge.       |

## Slots

| Name    | Description   |
|---------|---------------|
| default | Child layers. |

## Methods

| Name                                | Description                                     |
|-------------------------------------|-------------------------------------------------|
| `getRectangle(): leaflet.Rectangle` | Returns the underlying Leaflet object instance. |
