import { assertEquals } from "jsr:@std/assert";


//FUNCTION
function minesweeper(champ: string) {
    let champTable : number[][] = []
    
    
    let TableConversion : number[] = []
    
    for(let i = 0; i < champ.length; i++) {
        if(champ[i] === ".") {
            //console.log(champTable[i])

            TableConversion.push(0)

            if(champ[i+1] === "*") {
                TableConversion[i]++
            }

            if(champ[i-1] === "*") {
                TableConversion[i]++
            }

        } else if(champ[i] === "*") {
            TableConversion.push(-1);
        } else {
            TableConversion.push(-2);
        }
    }

    console.log(TableConversion)

    let champNumero = ""
    for(let element of TableConversion) {
        if(element === -1) {
            champNumero += "*"
        } else if (element === -2) {
            champNumero += "\n"
        } else {
            champNumero += element.toString()
        }
        
    }
    console.log(champNumero)
    return champNumero
}


//TEST
//champ vide
Deno.test("test champ vide", () => {
    let champ = "......\n......\n......";
    assertEquals(minesweeper(champ), "000000\n000000\n000000");
});


//Une seule ligne
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

Deno.test("test une seule ligne avec remplit de mine", () => {
    let champ = "******";
    assertEquals(minesweeper(champ), "******");
});

//deux ligne
Deno.test("test deux ligne avec une seule bombe", () => {
    let champ = "......\n...*..";
    assertEquals(minesweeper(champ), "001110\n001*10");
});

// ......
// ...*..

// 001110
// 001*10