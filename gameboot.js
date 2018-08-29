function setup() {

    // prepare our map ((need to implement this with p5 canvas shite))
    var html = '';
    var alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
    html += '<table style="width: 100%; text-align: center;">';
        html += '<tbody>';
            for(i = 1; i < 8; i ++){
                html += '<tr>';
                    for(ii = 1; ii < 8; ii++){
                        html += '<td class="' + alphabet[i] + ii + '">' + alphabet[i] + ii + '</td>';
                    }
                html += '</tr>';
            }
        html += '</tbody>';
    html += '</table>';
    $('body').append(html); // this is jquery, btw.
}

function draw() {
    
}

setup();