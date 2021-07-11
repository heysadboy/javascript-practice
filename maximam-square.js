function maximalSquare(matrix) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0)
        return 0;
    
    var m = matrix.length;
    var n = matrix[0].length;
 
    var t = [];
    
    for (var i = 0; i < m; i++) {
        var temp = [];
        for (var j = 0; j < n; j++) {
            temp.push(0);
        }
        t.push(temp);
    }
    
    //left column
    for (var i = 0; i < m; i++) {
        t[i][0] = matrix[i][0];
    }
 
    //top row
    for (var j = 0; j < n; j++) {
        t[0][j] = matrix[0][j];
    }
 
    //cells inside
    for(var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            if (matrix[i][j] == '1') {
                var min = Math.min(t[i - 1][j], t[i - 1][j - 1]);
                min = Math.min(min,t[i][j - 1]);
                t[i][j] = min + 1;
            } else {
                t[i][j] = 0;
            }
        }
    }
 
    var max = 0;
    //get maximal length
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (t[i][j] > max) {
                max = t[i][j];
            }
        }
    }
    return max * max;
}