<script lang="ts">
    import type {Hst} from '@histoire/plugin-svelte';
    import {LeafletMap, TileLayer} from 'svelte-leafletjs';
    import type {MapOptions} from 'leaflet';
    import {DEFAULT_TILE_LAYER_OPTIONS, DEFAULT_TILE_URL} from './common.js';

    export let Hst: Hst;

    const mapOptions: MapOptions = {
        center: [1.364917, 103.822872],
        zoom: 11,
    };
</script>

<Hst.Story group="raster-layers">
    <LeafletMap options={mapOptions}>
        <TileLayer url={DEFAULT_TILE_URL} options={DEFAULT_TILE_LAYER_OPTIONS}/>
    </LeafletMap>
</Hst.Story>
