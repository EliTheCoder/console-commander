function Map(map){
    if(map == '1'){
        ThisMap = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ];
    } else if(map == '2'){
        ThisMap = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];
    } else if(map == '3'){
        ThisMap = [
            [1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 1],
        ];
    } else if (map == '4'){
        ThisMap = [
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 1, 0, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 0, 1, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
        ];
    } else if(map == '5'){
        ThisMap = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];
    } else if(map == '6'){
        ThisMap = [
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ];
    } else if(map == '7'){
        ThisMap = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 1, 1, 1, 1],
            [1, 0, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ];
    } else if(map == '8'){
        ThisMap = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ];
    }


    var html = '';
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    html += '<table style="display: block; margin: auto auto; max-width: 500px; background-color: #f1f1f1; border: solid 2px rgba(0,0,0,0.5);">';
        html += '<tbody style="display: block; width: 100%;">';
            for(row = 0; row < ThisMap.length; row++){
                html += '<tr style="display: block; width: 100%;">';
                    for(column = 0; column < ThisMap[row].length; column++){
                        html += '<td id="' + alphabet[row] + (column + 1) + '" ' + ((ThisMap[row][column] == 0) ? 'class="impassible"' : '') + ' style="width: 72px; text-align: center; padding: 10px; border: solid 1px black;">' + alphabet[row] + (column + 1) + '</td>';
                    }
                html += '</tr>';
            }
        html += '</tbody>';
    html += '</table>';
    $('body').append(html);
}