# get-tile-url

Get Google Street View tile URL.

## Installation

```bash
$ npm i mhulse/get-tile-url
```

## Usage

The `gtu` method expects one, or more, arguments and will return an array with a matching number of “tile url” strings.

```js
const gtu = require('tile-parser');
const tile = {
  id: "CAoSLEFGMVFpcE94VEpTc0ExX2hwNExZQkRsdG9MZEFwOTNjdDNYZmwyQm1yNUU3",
  key: "AF1QipOxTJSsA1_hp4LYBDltoLdAp93ct3Xfl2Bmr5E7", // image_key
  zoom: 4,
  y: 6,
  x: 13
};
console.log(gtu(tile));
// [
//   'https://lh3.ggpht.com/p/AF1QipOxTJSsA1_hp4LYBDltoLdAp93ct3Xfl2Bmr5E7=x13-y6-z4'
// ]
```

## Development

Clone this repo, then:

```bash
$ npm install
```

Run test(s):

```bash
$ npm test
```

## License

Copyright © 2019 [Michael Hulse](http://mky.io).

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
