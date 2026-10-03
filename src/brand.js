"use strict";

// The Standard Garden mark: four squares, two rows of two — rows in a garden,
// and the colon of `::`. Square, sharp, equal (Helvetica draws its dots that
// way), so the same shape reads as the brand everywhere it appears.
//
// The squares also carry the state of a note: filled squares are planted,
// outlined ones are not yet. Colour says the same thing again (see
// publish-status/states.js), so the signal never rests on colour alone.
//
// Geometry mirrors packages/icon/icons/stnd/*.svg (24 grid, squares of 8).
// Obsidian wants icon bodies on a 100 grid, hence the scale.

const SQUARES = [
  [3, 3], // top-left
  [13, 3], // top-right
  [3, 13], // bottom-left
  [13, 13], // bottom-right
];

function square([x, y], filled) {
  return filled
    ? `<rect x="${x}" y="${y}" width="8" height="8" fill="currentColor" stroke="none"/>`
    : `<rect x="${x + 1}" y="${y + 1}" width="6" height="6" fill="none" stroke="currentColor" stroke-width="2"/>`;
}

function icon(pattern) {
  const body = SQUARES.map((s, i) => square(s, !!pattern[i])).join("");
  return `<g transform="scale(${100 / 24})">${body}</g>`;
}

// id → which squares are filled (TL, TR, BL, BR)
const ICONS = {
  "stnd-garden": [1, 1, 1, 1], // the mark; published and in sync
  "stnd-garden-local": [0, 0, 0, 0], // only in the vault
  "stnd-garden-queued": [1, 1, 0, 0], // marked, goes at the next sync
  "stnd-garden-changed": [1, 1, 1, 0], // edited since it was published
  "stnd-garden-outdated": [0, 1, 1, 1], // the online copy is newer
  "stnd-garden-unpublished": [1, 0, 0, 1], // switched off, still live online
};

function registerBrandIcons(addIcon) {
  for (const [id, pattern] of Object.entries(ICONS)) addIcon(id, icon(pattern));
}

module.exports = { registerBrandIcons, ICONS };
