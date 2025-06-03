import { assertEquals } from "jsr:@std/assert";


//FUNCTION
function minesweeper(champ: string) {
    let champTable : number[] = []
    for(let i = 0; i < champ.length; i++) {
        if(champ[i] === ".") {
            console.log(champTable[i])

            champTable.push(0)

            if(champ[i+1] === "*") {
                champTable[i]++
            }

            if(champ[i-1] === "*") {
                champTable[i]++
            }

        } else if(champ[i] === "*") {
            champTable.push(-1);
        } else {
            champTable.push(-2);
        }
    }

    console.log(champTable)

    let champNumero = ""
    for(let element of champTable) {
        if(element === -1) {
            champNumero += "*"
        } else if (element === -2) {
            champNumero += "\n"
        } else {
            champNumero += element.toString()
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

Deno.test("test une seule ligne avec deux mine", () => {
    let champ = "..**..";
    assertEquals(minesweeper(champ), "01**10");
});

Deno.test("test une seule ligne avec deux mine non côte à côte", () => {
    let champ = "..*.*.";
    assertEquals(minesweeper(champ), "01*2*1");
});

Deno.test("test une seule ligne avec trois mine non côte à côte", () => {
    let champ = "*.*.*.";
    assertEquals(minesweeper(champ), "*2*2*1");
});