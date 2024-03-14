import { tesztFuggvenyemhez } from "./teszt.js";

/* ************* FELADATSPECIFIKÁCIÓ **************
Két pozitív egész szám lnko-ját keresi MessageChannel.  */

export function fuggvenyem(a, b) {
  if (a===0 || b===0){
    return "Egyik szám sem lehet nulla!"
  }
  if (a<0 || b<0){
    return "Mindkét számnak pozitívnak kell lennie!"
  }
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}
tesztFuggvenyemhez()

