/// Logical operator code/function to evaluate the greatest of 4 integers/numbers ///

    function logicalOperator(){
        var a = 5;
        var b = 7;
        var c = 3;
        if (a>b && a>c){ // check to see if var a, is greatest //
            console.log(a)
        }else if (b>a && b>c){ // check to see if var b, is greatest //
            console.log(b)
        }else{            // check to see if var c, is greatest //
            console.log(c)
        }
    };
    logicalOperator();