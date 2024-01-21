<script lang="ts">
    import type {Hst} from '@histoire/plugin-svelte';
    import {Circle, LeafletMap, Popup, TileLayer, Tooltip} from 'svelte-leafletjs';
    import type {MapOptions} from 'leaflet';
    import {DEFAULT_TILE_LAYER_OPTIONS, DEFAULT_TILE_URL} from './common.js';

    export let Hst: Hst;

    const mapOptions: MapOptions = {
        center: [1.250111, 103.830933],
        zoom: 14,
    };
</script>

<Hst.Story group="layers">
    <LeafletMap options={mapOptions}>
        <TileLayer url={DEFAULT_TILE_URL} options={DEFAULT_TILE_LAYER_OPTIONS}/>
        <Circle latLng={[1.250111, 103.830933]} radius={1000} color="#ff0000" fillColor="#ff0000">
            <Popup>Sentosa</Popup>
            <Tooltip>Sentosa</Tooltip>
        </Circle>
    </LeafletMap>
</Hst.Story>
