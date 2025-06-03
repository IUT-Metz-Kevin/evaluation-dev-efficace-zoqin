import { assertEquals } from "jsr:@std/assert";
function minesweeper(champ: string) {
    let champNumero = ""
    for(let c of champ) {
        console.log(c)
        champNumero += "0";
        console.log(c)
    }
    console.log(champ)
    return champNumero
}

Deno.test("test champ vide", () => {
    let champ = "......\n......\n......";
    assertEquals(minesweeper(champ), "000000\n000000\n000000");
});