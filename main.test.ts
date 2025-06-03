import { assertEquals } from "jsr:@std/assert";
function minesweeper(champ: string) {
    let champNumero = ""
    for(let c of champ) {
        if(c === ".") {
            champNumero += "0";
        } else {
            champNumero += "\n"
        }
    }
    console.log(champ)
    return champNumero
}

Deno.test("test champ vide", () => {
    let champ = "......\n......\n......";
    assertEquals(minesweeper(champ), "000000\n000000\n000000");
});

Deno.test("test une seule ligne avec une seule mine", () => {
    let champ = "...*..";
    assertEquals(minesweeper(champ), "001*10");
});