import elementsMap from "./elementsMap.js";

/**
 * Computes elemental balance for compatibility.
 * Returns object with Fire / Earth / Air / Water values (1–10)
 */
export default function computeElements(signA, signB) {
  if (!signA || !signB) return null;

  const elA = elementsMap[signA];
  const elB = elementsMap[signB];

  if (!elA || !elB) return null;

  const base = {
    Fire: 4,
    Earth: 4,
    Air: 4,
    Water: 4
  };

  base[elA] += 3;
  base[elB] += 3;

  if (elA === elB) {
    base[elA] += 2;
  }

  Object.keys(base).forEach((k) => {
    if (base[k] < 1) base[k] = 1;
    if (base[k] > 10) base[k] = 10;
  });

  return base;
}
