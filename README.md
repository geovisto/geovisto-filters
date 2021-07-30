# Geovisto Filters Tool
Extension of the [Geovisto core library](https://github.com/geovisto/geovisto) which provides support for data filtering.

This repository is a snapshot of Geovisto ``tools/filters`` derived from the development repository: [geovisto/geovisto-map](https://github.com/geovisto/geovisto-map).

## Usage

```js
import {
    GeovistoFiltersTool
} from 'geovisto-filters';
import 'geovisto-filters/dist/index.css';

// ,,,

// create instance of map with given props
const map = Geovisto.createMap({
  // ...
  tools?: Geovisto.createMapToolsManager([
    // instances of Geovisto tools (extensions) which will be directly used in the map
    // ...
    GeovistoFiltersTool.createTool({
      id: "geovisto-tool-filters",
      manager: GeovistoFiltersTool.createFiltersManager([
        // filter operations
        GeovistoFiltersTool.createFilterOperationEq(),
        GeovistoFiltersTool.createFilterOperationNeq(),
        GeovistoFiltersTool.createFilterOperationReg()
      ])
    }),
  ])
});

// rendering of the map
map.draw(Geovisto.getMapConfigManagerFactory().default({
  // initial settings of the map can be overriden by the map config - JSON structure providing user settings 
  // ...
  tools?: [
    // config of Geovisto tools (extensions) used in the map
    {
      "type": "geovisto-tool-filters",
      "id": "geovisto-tool-filters",
      "enabled": true,
      "filterRules": [
        {
          "domain": "domain",
          "operation": "!=",
          "pattern": "value"
        },
        // ...
      ]
    },
  ]
}));
```

## Installation

```
npm install --save geovisto-filters
```

Peer dependencies:
```
npm install --save geovisto leaflet
```

This package serves as an extension of Geovisto core using the API for Geovisto tools (extensions). Follow Geovisto core on [Github](https://github.com/geovisto/geovisto).

## Extensions

New custom filter operations can be implemented by implementing the [``IMapFilterOperation``](https://github.com/geovisto/geovisto-filters/blob/master/src/model/types/filter/IMapFilterOperation.ts) interface.

## License

[MIT](https://github.com/geovisto/geovisto-filters/blob/master/LICENSE)