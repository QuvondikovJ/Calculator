let array=[],a=[], b=[];
let val_1,val_2,val_3,value=false, count=0, string="", sum=0;
for (let i=0; i<10; i++){
    array.push(i);
}
array[10]="+";
array[11]="-";
array[12]="*";
array[13]="/";
array[14]="=";

$("#id_0").click(function (){
    val_1=$("#id_20").html();
    if (val_1==="0"){
        $("#id_20").empty();
    }
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
        }
    }
    $("#id_20").append(array[0]);
})
$("#id_1").click(function (){
    val_1=$("#id_20").html();
    if (val_1==="0"){
        $("#id_20").empty();
    }
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
        }
    }
    $("#id_20").append(array[1]);
})
$("#id_2").click(function (){
    val_1=$("#id_20").html();
    if (val_1==="0"){
        $("#id_20").empty();
    }
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
        }
    }
    $("#id_20").append(array[2]);
})
$("#id_3").click(function (){
    val_1=$("#id_20").html();
    if (val_1==="0"){
        $("#id_20").empty();
    }
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
        }
    }
    $("#id_20").append(array[3]);
})
$("#id_4").click(function (){
    val_1=$("#id_20").html();
    if (val_1==="0"){
        $("#id_20").empty();
    }
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
        }
    }
    $("#id_20").append(array[4]);
})
$("#id_5").click(function (){
    val_1=$("#id_20").html();
    if (val_1==="0"){
        $("#id_20").empty();
    }
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
        }
    }
    $("#id_20").append(array[5]);
})
$("#id_6").click(function (){
    val_1=$("#id_20").html();
    if (val_1==="0"){
        $("#id_20").empty();
    }
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
        }
    }
    $("#id_20").append(array[6]);
})
$("#id_7").click(function (){
    val_1=$("#id_20").html();
    if (val_1==="0"){
        $("#id_20").empty();
    }
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
        }
    }
    $("#id_20").append(array[7]);
})
$("#id_8").click(function (){
    val_1=$("#id_20").html();
    if (val_1==="0"){
        $("#id_20").empty();
    }
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
        }
    }
    $("#id_20").append(array[8]);
})
$("#id_9").click(function (){
    val_1=$("#id_20").html();
    if (val_1==="0"){
        $("#id_20").empty();
    }
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
        }
    }
    $("#id_20").append(array[9]);
})
$("#id_10").click(function (){
    val_1=$("#id_20").html();
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
            $("#id_20").append(sum);
            val_1=$("#id_20").html();
        }
    }
    val_1=val_1.substring(string.length);
    if (val_1===""){
        b[count-1]=array[10];
        val_2=$("#id_20").html();
        val_2=val_2.substring(0,val_2.length-3);
        $("#id_20").empty();
        $("#id_20").append(val_2+" "+array[10]+" ");
    }else {
        a[count] = val_1;
        b[count] = array[10];
        count++;
        $("#id_20").append(" "+array[10]+" ");
        string = $("#id_20").html();
    }
})
$("#id_11").click(function (){
    val_1=$("#id_20").html();
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
            $("#id_20").append(sum);
            val_1=$("#id_20").html();
        }
    }
    val_1=val_1.substring(string.length);
    if (val_1===""){
        b[count-1]=array[11];
        val_2=$("#id_20").html();
        val_2=val_2.substring(0,val_2.length-3);
        $("#id_20").empty();
        $("#id_20").append(val_2+" "+array[11]+" ");
    }else {
        a[count] = val_1;
        b[count] = array[11];
        count++;
        $("#id_20").append(" "+array[11]+" ");
        string = $("#id_20").html();
    }
})
$("#id_12").click(function (){
    val_1=$("#id_20").html();
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
            $("#id_20").append(sum);
            val_1=$("#id_20").html();
        }
    }
    val_1=val_1.substring(string.length);
    if (val_1===""){
        b[count-1]=array[12];
        val_2=$("#id_20").html();
        val_2=val_2.substring(0,val_2.length-3);
        $("#id_20").empty();
        $("#id_20").append(val_2+" "+array[12]+" ");
    }else {
        a[count] = val_1;
        b[count] = array[12];
        count++;
        $("#id_20").append(" "+array[12]+" ");
        string = $("#id_20").html();
    }
})
$("#id_13").click(function (){
    val_1=$("#id_20").html();
    for (let i=0; i<val_1.length; i++){
        if (val_1.charAt(i)==="="){
            $("#id_20").empty();
            a=[];b=[];
            count=0;string='';
            $("#id_20").append(sum);
            val_1=$("#id_20").html();
        }
    }
    val_1=val_1.substring(string.length);
    if (val_1===""){
        b[count-1]=array[13];
        val_2=$("#id_20").html();
        val_2=val_2.substring(0,val_2.length-3);
        $("#id_20").empty();
        $("#id_20").append(val_2+" "+array[13]+" ");
    }else {
        a[count] = val_1;
        b[count] = array[13];
        count++;
        $("#id_20").append(" "+array[13]+" ");
        string = $("#id_20").html();
    }
})
$("#id_14").click(function (){
    val_1=$("#id_20").html();
    val_1=val_1.substring(string.length);
    if (val_1===""){
        val_2=$("#id_20").html();
        val_2=val_2.substring(0,val_2.length-3);
        $("#id_20").empty();
        $("#id_20").append(val_2+" "+array[14]+" " +val_2);
    }else {
        val_3 = $("#id_20").html();
        for (let i = 0; i < val_3.length; i++) {
            if (val_3.charAt(i) === "=") {
                $("#id_20").empty();
                a = [];
                b = [];
                count = 0;
                string = '';
                $("#id_20").append(sum + " " + array[14] + " " + sum);
                value = true;
            }
        }
        if (value === false) {
            a[count] = val_1;
            for (let j = 0; j < a.length; j++) {
                parseFloat(a[j]);
            }
            sum = a[0];
            for (let k = 0; k < a.length - 1; k++) {
                if (b[k] === "+") {
                    sum = parseFloat(sum) + parseFloat(a[k + 1]);
                } else if (b[k] === "-") {
                    sum = sum - a[k + 1];
                } else if (b[k] === "*") {
                    sum = sum * a[k + 1];
                } else if (b[k] === "/") {
                    sum = sum / a[k + 1];
                }
            }
            $("#id_20").append(" " + array[14] + " ");
            $("#id_20").append(sum);

        }
    }
    value=false;
})
$("#id_15").click(function (){
    $("#id_20").empty();
    string="";
    sum=0;
    a=[];b=[];
  count=0;
  $("#id_20").append("0");
})
