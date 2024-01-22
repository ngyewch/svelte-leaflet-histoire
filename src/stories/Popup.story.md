See https://leafletjs.com/reference.html#popup

## Properties

| Name      | Type                   | Default | Description       |
|-----------|------------------------|---------|-------------------|
| `options` | `leaflet.PopupOptions` | `{}`    | Options.          |
| `events`  | `string[]`             | `[]`    | Events to bridge. |

## Slots

| Name    | Description   |
|---------|---------------|
| default | Child layers. |

## Methods

| Name                        | Description                                     |
|-----------------------------|-------------------------------------------------|
| `getPopup(): leaflet.Popup` | Returns the underlying Leaflet object instance. |
