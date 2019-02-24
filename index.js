function getTileUrl(data) {

  let result;

  if (
    Object.entries(data).length
    &&
    data.id
    &&
    data.key
    &&
    data.x
    &&
    data.y
    &&
    data.zoom
  ) {

    if (data.id == data.key) {

      result = 'https://geo3.ggpht.com/cbk?';

      // Google pano URL:
      result += [
        `panoid=${data.id}`,
        'output=tile',
        `x=${data.x}`,
        `y=${data.y}`,
        `zoom=${data.zoom}`,
        // These seem to be optional:
        'nbt',
        'fover=2',
        'authuser=0',
        'cb_client=maps_sv.tactile',
        // Date.now(), // Cache buster needed?
      ].join('&');

      // Example:
      // https://geo3.ggpht.com/cbk?panoid=GfKM6re4ip7n04i3JqqRsQ&output=tile&x=1&y=2&zoom=4
      // Note that `geo3` is probably load balancer.
      // At time of writing this code, there are three
      // servers: `geo1`, `geo2` and `geo3`.

      // `output` can be `tile` or `thumbnail`.
      // If `thumbnail`, you can add these additional params:
      // &w=408&h=200&yaw=319
      // Example: https://geo3.ggpht.com/cbk?panoid=Q7zDcjpG6gZNMlttJ2RlrQ&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=200&yaw=197

    } else {

      // User pano URL:
      result = `https://lh3.ggpht.com/p/${data.key}=`;

      result += [
        // Width defaults to 512x512:
        // `w${data.width}`,
        // `h${data.height}`,
        `x${data.x}`,
        `y${data.y}`,
        `z${data.zoom}`,
        // Cache buster needed?
      ].join('-');

      // Example:
      // https://lh3.ggpht.com/p/AF1QipMb6MhQ0P7phg5qUmL13M1WcNb7h7Iq8ctOD1dh=w512-h512-x3-y1-z4
      // The part after `p/` and before the `=` is the user’s panoram `image_key`.
      // You can inspect images in network panel by visiting a user’s site; for example:
      // https://www.google.com/maps/contrib/109452535899975655719/photos

    }

  }

  return result;

}

module.exports = (...data) => {

  const results = [];

  if (data.length) {

    results.push(
      ...data.map(getTileUrl).filter(obj => typeof obj != 'undefined')
    );

  } else {

    throw(`Bad data: ${data}`)

  }

  return results;

};
