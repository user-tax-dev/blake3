/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
export function blake3Hash(input: Uint8Array): Uint8Array;
/**
*/
export class Blake3 {
  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} input
*/
  update(input: Uint8Array): void;
/**
* @returns {Uint8Array}
*/
  finalize(): Uint8Array;
}
