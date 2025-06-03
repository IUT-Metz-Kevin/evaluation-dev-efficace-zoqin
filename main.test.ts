import { assertEquals } from "jsr:@std/assert";


//FUNCTION
//FONCTION APPELE
function conversionChampVersMatrice(champ: string): string[][] {
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
    return champMatrice
}

function conversionVersMatriceNumerique(minesweeperString: string[][]): number[][] {
    let matriceNumerique: number[][] = []
    let tableConversionTemporaire: number[] = []

    //on parcours une matrice donc j'utilise x, y comme un plan en 2 dimension
    for (let y = 0; y < minesweeperString.length; y++) {
        //console.log(champMatrice.length)
        for (let x = 0; x < minesweeperString[y].length; x++) {
            //console.log(champMatrice[y].length)
            if (minesweeperString[y][x] === ".") {
                //console.log(champTable[i])

                tableConversionTemporaire.push(0)
                //si il existe une ligne au dessus on teste les valeurs adjacante
                if(minesweeperString[y-1]){
                    if(minesweeperString[y-1][x-1] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                    if(minesweeperString[y-1][x] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                    if(minesweeperString[y-1][x+1] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                }
                
                if (minesweeperString[y][x + 1] === "*") {
                    tableConversionTemporaire[x] += 1
                }
                
                if (minesweeperString[y][x - 1] === "*") {
                    tableConversionTemporaire[x] += 1
                }

                //si il existe une ligne au dessous on teste les valeurs adjacante
                if(minesweeperString[y+1]) {
                    if(minesweeperString[y+1][x-1] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                    if(minesweeperString[y+1][x] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                    if(minesweeperString[y+1][x+1] === "*") {
                        tableConversionTemporaire[x] += 1
                    }
                }

            } else if (minesweeperString[y][x] === "*") {
                tableConversionTemporaire.push(-1);
            }
        }
        matriceNumerique.push(tableConversionTemporaire)
        tableConversionTemporaire = []
    }

    //console.log(matriceNumerique)
    return matriceNumerique

}

function conversionString(minesweeperNumerique: number[][]): string {
    let champNumero = ""

    for(let tableActuelle of minesweeperNumerique) {
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

//MAIN
function minesweeper(champ: string) {

    let champMatrice = conversionChampVersMatrice(champ)

    //console.log(champMatrice)

    let matriceConversion = conversionVersMatriceNumerique(champMatrice)

    return conversionString(matriceConversion)
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

Deno.test("test deux ligne avec deux bombe", () => {
    let champ = "...*..\n...*..";
    assertEquals(minesweeper(champ), "002*20\n002*20");
});

Deno.test("test deux ligne avec trois bombe non adjacante", () => {
    let champ = ".*...*\n...*..";
    assertEquals(minesweeper(champ), "1*212*\n112*21");
});

Deno.test("test deux ligne avec une ligne remplis de bombe", () => {
    let champ = "******\n......";
    assertEquals(minesweeper(champ), "******\n233332");
});

//trois ligne
Deno.test("test trois ligne avec une bombe", () => {
    let champ = "......\n...*..\n......";
    assertEquals(minesweeper(champ), "001110\n001*10\n001110");
});

Deno.test("test trois ligne avec bombe en diagonale", () => {
    let champ = "..*...\n...*..\n....*.";
    assertEquals(minesweeper(champ), "01*210\n012*21\n0012*1");
});

Deno.test("test trois ligne avec une cellule entouré de bombe", () => {
    let champ = ".***..\n.*.*..\n.***..";
    assertEquals(minesweeper(champ), "2***20\n3*8*30\n2***20");
});

Deno.test("test trois ligne github", () => {
    let champ = ".*.**.\n....*.\n..*...";
    assertEquals(minesweeper(champ), "1*2**2\n1234*2\n01*211");
});


// .***..
// .*.*..
// .***..

// 2***20
// 3*8*30
// 2***20
