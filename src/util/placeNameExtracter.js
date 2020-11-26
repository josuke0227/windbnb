export default function placeNameExtracter(places) {
  let extractedPlaces = [];
  let hashMap = new Map();

  for (let i = 0; i < places.length; i++) {
    const current = places[i];
    if (!hashMap.has(current.city)) {
      hashMap.set(current.city, true);
      extractedPlaces.push(current);
    } else {
      continue;
    }
  }

  return extractedPlaces;
}
