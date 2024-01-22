## Properties

See https://leafletjs.com/reference.html#circlemarker

| Name          | Type                                 | Default     | Description             |
|---------------|--------------------------------------|-------------|-------------------------|
| `latLngs`     | `leaflet.LatLngExpression`           |             | Geographical points.    | 
| `radius`      | `number`                             | 10          | Radius.                 |
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
| `options`     | `leaflet.CircleOptions`              | `{}`        | Circle options.         |

## Methods

| Name                          | Description                                                                                              |
|-------------------------------|----------------------------------------------------------------------------------------------------------|
| `getCircle(): leaflet.Circle` | Returns the underlying Leaflet `Circle` object instance. See https://leafletjs.com/reference.html#circle |