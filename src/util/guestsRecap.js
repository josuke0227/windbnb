export default function guestsRecap(adultGuests, childGuests) {
  if (adultGuests && childGuests) {
    return [`Adults: ${adultGuests}`, `Children: ${childGuests}`];
  }

  if (adultGuests && !childGuests) {
    return [`Adults: ${adultGuests}`];
  }

  if (!adultGuests && childGuests) {
    return [`Children: ${childGuests}`];
  }

  return;
}
