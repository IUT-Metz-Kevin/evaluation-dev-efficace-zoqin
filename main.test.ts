import { assertEquals } from "jsr:@std/assert";


//FUNCTION
function minesweeper(champ: string) {
    let champMatrice: string[][] = []

    let tableTemporaire: string[] = []

    for (let c of champ) {
        if (c !== "\n") {
            tableTemporaire.push(c)
        } else {
            champMatrice.push(tableTemporaire)
            tableTemporaire = []
        }
    }

    champMatrice.push(tableTemporaire)

    //console.log(champMatrice)

    let matriceConversion: number[][] = []
    let tableConversionTemporaire: number[] = []

    //on parcours une matrice donc j'utilise x, y comme un plan en 2 dimension
    for (let y = 0; y < champMatrice.length; y++) {
        //console.log(champMatrice.length)
        for (let x = 0; x < champMatrice[y].length; x++) {
            //console.log(champMatrice[y].length)
            if (champMatrice[y][x] === ".") {
                //console.log(champTable[i])

                tableConversionTemporaire.push(0)
                //si il existe une ligne au dessus on teste les valeurs adjacante
                if(champMatrice[y-1]){
                    if(champMatrice[y-1][x-1] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                    if(champMatrice[y-1][x] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                    if(champMatrice[y-1][x+1] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                }
                
                if (champMatrice[y][x + 1] === "*") {
                    tableConversionTemporaire[x] += 1
                }
                
                if (champMatrice[y][x - 1] === "*") {
                    tableConversionTemporaire[x] += 1
                }

                //si il existe une ligne au dessous on teste les valeurs adjacante
                if(champMatrice[y+1]) {
                    if(champMatrice[y+1][x-1] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                    if(champMatrice[y+1][x] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                    if(champMatrice[y+1][x+1] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                }

            } else if (champMatrice[y][x] === "*") {
                tableConversionTemporaire.push(-1);
            }
        }
        matriceConversion.push(tableConversionTemporaire)
        tableConversionTemporaire = []
    }

    console.log(matriceConversion)



    let champNumero = ""

    for(let tableActuelle of matriceConversion) {
        for(let element of tableActuelle) {
            if(element === -1) {
                champNumero += "*"
            } else {
                champNumero += element.toString()
            }
        }
        champNumero += "\n"
    }

    return champNumero.slice(0, champNumero.length-1)
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