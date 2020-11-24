// import React from 'react';

// export default function guestsRecap(props) {

// }

export default function guestsRecap(adultGuests, childGuests) {
  if (adultGuests && childGuests) {
    return [`Adults: ${adultGuests}`, `Children: ${childGuests}`];
  }

  if (adultGuests && !childGuests) {
    return [`Adults: ${adultGuests}`];
  }

  if (!adultGuests && childGuests) {
    return [`children: ${childGuests}`];
  }

  return ["Add Guests"];
}

// export default function guestsRecap() {
//   guestsRecap = (props) => {
//     const { adultGuests, childGuests } = props;

//     if (adultGuests && childGuests) {
//       return `Adults: ${adultGuests}, Children: ${childGuests}`;
//     }

//     if (adultGuests && !childGuests) {
//       return `Adults: ${adultGuests}`;
//     }

//     if (!adultGuests && childGuests) {
//       return `children: ${childGuests}`;
//     }

//     return "Add Guests";
//   };
// }
