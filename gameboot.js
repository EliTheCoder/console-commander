function setup() {

    // prepare our map ((need to implement this with p5 canvas shite))
    var html = '';
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    
    ThisMap = Map('4'); // map 1, 2, 3, 4 have been created.
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

function draw() {
    
}

setup();