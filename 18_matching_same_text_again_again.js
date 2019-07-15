var Regex_Pattern = /([a-z])(\w)(\s)(\W)(\d)(\D)([A-Z])([a-zA-Z])(a|e|i|o|u|A|E|I|O|U)(\S)\1\2\3\4\5\6\7\8\9\10/; //Do not delete '/'. Replace __________ with your regex.

function processData(Test_String) {
    //Enter your code here

    console.log(!!Test_String.match(Regex_Pattern));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
