var symbol = [];
symbol[0]=' ### #  ### # ###  # ### ';
symbol[1]='  #   ##    #    #   ### ';
symbol[2]='####     # ### #    #####';
symbol[3]='####     #  ##     ##### ';
symbol[4]='#   ##   # ####    #    #';
symbol[5]='######    ####     ##### ';
symbol[6]=' #####    #### #   # ### ';
symbol[7]='#####    #   #    #    # ';
symbol[8]=' ### #   # ### #   # ### ';
symbol[9]=' ### #   # ####    # ### ';
var colon ='            #         #  ';



let createTable = function(){
    let table = document.getElementById('table');
    for (let i = 0; i < 5; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 48; j++) {
            let cell = document.createElement('td')
            cell.setAttribute('id','id_'+ i +'_'+ j);
            cell.setAttribute("style","width:1em;height:1em;");
            cell.style.backgroundColor = "black"
            row.appendChild(cell);
        }
       table.appendChild(row);  
    }
    /* console.log(table); */
}

let drawChar = function(data, x){
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (data[i*5 + j] == " ") {
                document.getElementById('id_'+ i +'_'+ (j+x)).style.backgroundColor = "black";
            }else{
                document.getElementById('id_'+ i +'_'+ (j+x)).style.backgroundColor = "yellow";
            }
            
        }
        
    }
}

let stopped = false;

let displayTime = function(){
    if (stopped) return;
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    drawChar(symbol[hours.toString().split('')[0]], 0 );
    drawChar(symbol[hours.toString().split('')[1]], 6 );
    drawChar(colon, 11);
    drawChar(symbol[minutes.toString().split('')[0]], 17 );
    drawChar(symbol[minutes.toString().split('')[1]], 24 );
    drawChar(colon, 30);
    drawChar(symbol[seconds.toString().split('')[0]], 36 );
    drawChar(symbol[seconds.toString().split('')[1]], 42);
   
}

let whenReloading = function(){
    createTable();
    setInterval(displayTime, 1000);
    document.getElementById('stop').addEventListener('click',function () {
        stopped = !stopped;
        console.log(stopped);
    })
}

window.onload = whenReloading();

