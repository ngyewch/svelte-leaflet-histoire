<script lang="ts">
    import type {Hst} from '@histoire/plugin-svelte';
    import {Icon, LeafletMap, Marker, TileLayer} from 'svelte-leafletjs';
    import {type BaseIconOptions, type MapOptions} from 'leaflet';
    import {DEFAULT_TILE_LAYER_OPTIONS, DEFAULT_TILE_URL} from './common.js';

    export let Hst: Hst;

    const mapOptions: MapOptions = {
        center: [1.364917, 103.822872],
        zoom: 11,
    };
    const iconOptions: BaseIconOptions = {
        iconSize: [41, 41],
        iconAnchor: [20, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
    };
</script>

<Hst.Story group="basic-types">
    <LeafletMap options={mapOptions}>
        <TileLayer url={DEFAULT_TILE_URL} options={DEFAULT_TILE_LAYER_OPTIONS}/>
        <Marker latLng={[1.282375, 103.864273]}/>
        <Marker latLng={[1.359167, 103.989441]}>
            <Icon iconUrl="icons/airport.svg" options={iconOptions}/>
        </Marker>
    </LeafletMap>
</Hst.Story>
