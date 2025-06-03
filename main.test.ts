import { assertEquals } from "jsr:@std/assert";


//FUNCTION
function minesweeper(champ: string) {
    let champNumero = ""
    for(let i = 0; i < champ.length; i++) {
        if(champ[i] === ".") {
            if( (champ[i+1] === "*") || (champ[i-1] === "*") ) {
                champNumero += "1";
            } else {
                champNumero += "0";
            }
        } else if(champ[i] === "*") {
            champNumero += "*";
        } else {
            champNumero += "\n";
        }
    }

    return champNumero
}


//TEST
Deno.test("test champ vide", () => {
    let champ = "......\n......\n......";
    assertEquals(minesweeper(champ), "000000\n000000\n000000");
});

Deno.test("test une seule ligne avec une seule mine", () => {
    let champ = "...*..";
    assertEquals(minesweeper(champ), "001*10");
});