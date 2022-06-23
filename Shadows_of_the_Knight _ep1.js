// Shadows of the Knight - Episode 1
// Given instructions about if a secret place its one 
// Way or another(up, down, left and right).
// Perform binary search
// in x and y;

var input = readline().split(' ');
let W = parseInt(input[0]);        // Width X
let H = parseInt(input[1]);        // High  Y
const N = parseInt(readline());    // Turns before game over.         
var input = readline().split(' '); // Batman's coordinates
let X0 = parseInt(input[0]);       // X start
let Y0 = parseInt(input[1]);       // Y start

// U, UR, R, D, DL, L, UL and DR
let dic = {'U': [0,-1], 'UR': [1,-1], 'R': [1,0], 'D': [0,1], 'DL': [-1,1], 'L': [-1,0], 'UL': [-1, -1], 'DR': [1,1]};

// game loop
let l1_x = 0;
let l2_x = W;
let x = X0;
let l1_y = 0;
let l2_y = H;
let y = Y0;

while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    // X
    if(dic[bombDir][0] > 0){
        let dis_x = Math.abs(x - l2_x);
        l1_x = x;
        x += dic[bombDir][0] * Math.ceil(dis_x/2);
    }else if(dic[bombDir][0] < 0){
        let dis_x = Math.abs(x - l1_x);
        l2_x = x;
        x += dic[bombDir][0] * Math.ceil(dis_x/2);
    }  

    // Y
    if(dic[bombDir][1] > 0){
        let dis_y = Math.abs(y - l2_y);
        l1_y = y;
        y += dic[bombDir][1] * Math.ceil(dis_y/2);

    }else if(dic[bombDir][1] < 0){
        let dis_y = Math.abs(y - l1_y);
        l2_y = y;
        y += dic[bombDir][1] * Math.ceil(dis_y/2);
    }  
    
    console.log(x, y);
}   