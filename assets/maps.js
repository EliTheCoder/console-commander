function Map(map){
    switch(map){
        case 1:
            var ThisMap = [
                [2, 2, 1, 1, 1, 3, 3],
                [2, 2, 1, 1, 1, 3, 3],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [4, 4, 1, 1, 1, 5, 5],
                [4, 4, 1, 1, 1, 5, 5],
            ];
            break;
        case 2:
            var ThisMap = [
                [2, 2, 1, 1, 1, 3, 3],
                [2, 2, 0, 0, 0, 3, 3],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [4, 4, 0, 0, 0, 5, 5],
                [4, 4, 1, 1, 1, 5, 5],
            ];
            break;
        case 3:
            var ThisMap = [
                [1, 1, 1, 0, 1, 1, 1],
                [1, 2, 1, 0, 1, 3, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [0, 0, 1, 1, 1, 0, 0],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 4, 1, 0, 1, 5, 1],
                [1, 1, 1, 0, 1, 1, 1],
            ];
            break;
        case 4:
            var ThisMap = [
                [2, 2, 0, 0, 0, 3, 3],
                [2, 2, 1, 0, 1, 3, 3],
                [0, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 0, 0],
                [0, 1, 1, 1, 1, 1, 0],
                [4, 4, 1, 0, 1, 5, 5],
                [4, 4, 0, 0, 0, 5, 5],
            ];
            break;
        case 5:
            var ThisMap = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 2, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 0],
                [0, 2, 1, 1, 1, 2, 0],
                [0, 0, 0, 0, 0, 0, 0],
            ];
            break;
        case 6:
            var ThisMap = [
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 1, 0, 0, 1],
                [1, 3, 0, 1, 0, 4, 1],
                [1, 1, 1, 1, 1, 1, 1],
            ];
            break;
        case 7:
            var ThisMap = [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 2, 0, 1, 1, 1, 1],
                [1, 0, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 1],
                [1, 1, 1, 1, 0, 3, 1],
                [1, 1, 1, 1, 1, 1, 1],
            ];
            break;
        case 8:
            var ThisMap = [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 2, 1, 1, 1],
                [1, 0, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 1, 0, 1],
                [1, 1, 1, 3, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
            ];
        break;
    }

    var html = '';
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    html += '<table style="display: block; margin: auto auto; max-width: 500px; background-color: #f1f1f1; border: solid 2px rgba(0,0,0,0.5);">';
        html += '<tbody style="display: block; width: 100%;">';
            for(row = 0; row < ThisMap.length; row++){
                html += '<tr style="display: block; width: 100%;">';
                    for(column = 0; column < ThisMap[row].length; column++){
                        html += '<td id="' + alphabet[row] + (column + 1) + '" ' +
                            ((ThisMap[row][column] == 0) ? 'class="impassible"' : '')  +
                            ((ThisMap[row][column] == 2) ? 'class="player1"' : '') +
                            ((ThisMap[row][column] == 3) ? 'class="player2"' : '') +
                            ((ThisMap[row][column] == 4) ? 'class="player3"' : '') +
                            ((ThisMap[row][column] == 5) ? 'class="player4"' : '') + ' style="width: 72px; text-align: center; padding: 10px; border: solid 1px black;">' + alphabet[row] + (column + 1) + '</td>';
                    }
                html += '</tr>';
            }
        html += '</tbody>';
    html += '</table>';
    $('body').append(html);
}