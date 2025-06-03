import { assertEquals } from "jsr:@std/assert";
function minesweeper(champ: string) {
    for(let c of champ) {
        console.log(c)
        c = "0";
        console.log(c)
    }
    console.log(champ)
    return champ
}

Deno.test("test champ vide", () => {
    let champ = "......\n......\n......";
    assertEquals(minesweeper(champ), "000000\n000000\n000000");
});