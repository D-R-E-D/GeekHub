/*LEVEL 1*/

// Simple way

while (isFree ('north')) {
    north();
}

/*LEVEL 2*/

// Simple way

do {
    east()
} while (isFree ('east'));

/*LEVEL 3*/

// Simple way

for ( i = 0; i < 7; i++) {
    south();
    east();
}

// Hard way

for ( i = 0; i < 7; i++ ) {
    south();
    if (isFree('east')) {
        east();
    }
}

/*LEVEL 4*/

// Simple way

while (isFree('south')) {
    south();
}

for ( i = 0; i < 3; i++) {
    east();
}

while (isFree('south')) {
    south();
}

east();

while (isFree('south')) {
    south();
}

for ( i = 0; i < 2; i++) {
    east();
}

south();

// Hard way

for ( i =0; i < 3; i++) {
    while (isFree('south')) {
        south();
    }
    while (isFree('east')) {
        east();
    }
    while (isFree('south')) {
        south();
    }
}

/*LEVEL 5*/

// Simple way

while (isFree('east')) {
    east();
}

for ( i = 0; i < 2; i++) {
    south();
}

for ( i = 0; i < 2; i++) {
    west();
}

while (isFree('south')) {
    south();
}

for ( i = 0; i < 2; i++) {
    west();
}

for ( i = 0; i < 3; i++) {
    north();
}

for ( i = 0; i < 2; i++) {
    west();
}

while (isFree('south')) {
    south();
}

while (isFree('east')) {
    east();
}

// Hard way

while (isFree('east')) {
    east();
    if (isFree('south')) {
        while (isFree('south')) {
            south();
        }
    }
}

while (isFree('west')) {
    west();
    if (isFree('south')) {
        while (isFree('south')) {
            south();
        }
        while (isFree('west')) {
            west();
        }
    }
}

while (isFree('north')) {
    north();
    if (isFree('west'))  {
        while (isFree('west')) {
            west();
        }
    }
}

for ( i = 0; i < 5; i++ ) {
    south();
    if (isFree('east')) {
        while (isFree('east')) {
            east();
        }
    }
}

/*LEVEL 6 */

// Simple way

while (isFree('south')) {
    south();
}

for ( i = 0; i < 2; i++) {
    east();
}

while (isFree('north')) {
    north();
}

east();

for ( i = 0; i < 2; i++) {
    north();
}

while (isFree('west') && isFree('east')) {
    east();
}

for ( i = 0; i < 4; i++) {
    south();
}

for ( i = 0; i < 2; i++) {
    west();
}

while (isFree('south')) {
    south();
}

while (isFree('east')) {
    east();
}

// Hard way

while (isFree('south')) {
    south();
    if (isFree('east')) {
        while (isFree('east')) {
            east();
        } break;
    }
}

for ( i = 0; i < 5; i++) {
    north();
    if (isFree('east')) {
        while(isFree('east')) {
            east();
            if (isFree('south')) {
                for (i = 0; i < 4; i++) {
                    south();
                }
            }
        }
    }
}

for ( i = 0; i < 2; i++ ) {
    west();
    if (isFree('south')) {
        while (isFree('south')) {
            south();
            if (isFree('east')) {
            }
        }
    }
}

for ( i = 0; i < 2; i++) {
    east();
}

/*LEVEL 7*/

// Simple way

while (isFree('south')) {
    south();
}

while (isFree('east')) {
    east();
}

while (isFree('north')) {
    north();
}

for ( i = 0; i < 2; i++) {
    east();
}

for ( i = 0; i < 2; i++) {
    south();
    east();
}

while (isFree('west') && isFree('east')) {
    west();
}

while (isFree('south')) {
    south();
}

west();

while (isFree('south')) {
    south();
}

while (isFree('east')) {
    east();
}

while (isFree('south')) {
    south();
}

east();

// Hard way

while (isFree('south')) {
    south();
}

do {
    east();
}while (isFree('east'));

while (isFree('north')) {
    north();
}

while (isFree('east') && isFree('west')) {
    east();
}

for ( i = 0; i < 2; i++) {
    south();
    east();
    if (isFree('east')) {
        east();
    }
}

for ( i = 0; i < 3; i++) {
    south();
    if (isFree('west')) {
        while (isFree('west')) {
            west();
        }
    }
}

for ( i = 0; i < 1; i++) {
    south();
    west();
    if (isFree('south')) {
        while (isFree('south')) {
            south();
        }
    }
}

while (isFree('west') && isFree('east')) {
    east();
}

for ( i = 0; i < 9; i++) {
    south();
    if (isFree('east')) {
        east();
    }
}






