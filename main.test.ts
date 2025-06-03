import { assertEquals } from "jsr:@std/assert";
function minesweeper(champ: string) {
    return champ
}

Deno.test("test champ vide", () => {
    let champ = "......\n......\n......";
    assertEquals(minesweeper(champ), "000000\n000000\n000000");
});