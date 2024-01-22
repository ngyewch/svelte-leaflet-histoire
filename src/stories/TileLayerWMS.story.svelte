<script lang="ts">
    import type {Hst} from '@histoire/plugin-svelte';
    import {LeafletMap, TileLayer, TileLayerWMS} from 'svelte-leafletjs';
    import type {MapOptions} from 'leaflet';
    import {DEFAULT_TILE_LAYER_OPTIONS, DEFAULT_TILE_URL} from './common.js';

    export let Hst: Hst;

    const mapOptions: MapOptions = {
        center: [37.0902, -95.7129],
        zoom: 4,
    };
    const wmsTileUrl = "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi";
    const wmsTileLayerOptions = {
        layers: 'nexrad-n0r-900913',
        format: 'image/png',
        transparent: true,
        attribution: "Weather data © 2012 IEM Nexrad",
    };
</script>

<Hst.Story group="raster-layers">
    <LeafletMap options={mapOptions}>
        <TileLayer url={DEFAULT_TILE_URL} options={DEFAULT_TILE_LAYER_OPTIONS}/>
        <TileLayerWMS url={wmsTileUrl} options={wmsTileLayerOptions}/>
    </LeafletMap>
</Hst.Story>
