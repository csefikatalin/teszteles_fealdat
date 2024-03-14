import { fuggvenyem } from "./main.js";
export function tesztFuggvenyemhez() {
  {/* 1. teszteset */
    let a = 25;
    let b = 15;
    let vart = 5;
 /*    console.log(
      `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a, b)}`
    ); */
    console.assert(
        vart === fuggvenyem(a, b),
         "%o",
          `a=${a}, b=${b}, lnko=${vart} `,
           "A várt eredmény nem stimmel!"
      );
  }
  {/* 2. teszteset */
    let a = -25;
    let b = 5;
    let vart = "Mindkét számnak pozitívnak kell lennie!";
/*     console.log(
      `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a, b)}`
    ); */
    console.assert(
        vart === fuggvenyem(a, b),
         "%o",
          `a=${a}, b=${b}, lnko=${vart} `,
           "A várt eredmény nem stimmel!"
      );
  }
    {/* 3. teszteset */
    let a = 11;
    let b = 52;
    let vart = 1;
   /*  console.log(
      `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a, b)}`
    ); */
    console.assert(
        vart === fuggvenyem(a, b),
         "%o",
          `a=${a}, b=${b}, lnko=${vart} `,
           "A várt eredmény nem stimmel!"
      );
  }
    {/* 4. teszteset */
    let a = 1;
    let b = 52;
    let vart = 1;
   /*  console.log(
      `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a, b)}`
    ); */
    console.assert(
        vart === fuggvenyem(a, b),
         "%o",
          `a=${a}, b=${b}, lnko=${vart} `,
           "A várt eredmény nem stimmel!"
      );
  }
    {/*5. teszteset */
    let a = 53;
    let b = 1;
    let vart = 1;
   /*  console.log(
      `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a, b)}`
    ); */
    console.assert(
        vart === fuggvenyem(a, b),
         "%o",
          `a=${a}, b=${b}, lnko=${vart} `,
           "A várt eredmény nem stimmel!"
      );
  }
    {/* 6. teszteset */
    let a = 0;
    let b = 52;
    let vart = "Egyik szám sem lehet nulla!";
   /*  console.log(
      `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a, b)}`
    ); */
    console.assert(
        vart === fuggvenyem(a, b),
         "%o",
          `a=${a}, b=${b}, lnko=${vart} `,
           "A várt eredmény nem stimmel!"
      );
  }
   {/* 6. teszteset */
   let a = 24;
   let b = 16;
   let vart = 8;
  /*  console.log(
     `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a, b)}`
   ); */
   console.assert(
       vart === fuggvenyem(a, b),
        "%o",
         `a=${a}, b=${b}, lnko=${vart} `,
          "A várt eredmény nem stimmel!"
     );
 }
}
