// function hide() {
//     $(".contact").css("display", "none");
//     $(".coppyright").css("padding-top", "112px");
// }

// $(".sub-menu").mouseover(hide);

function appear() {
    $(".contact").css("display", "block");
    $(".coppyright").css("padding-top", "0px");
}

$(".sub-menu").mouseleave(appear);


function showMoreDialog() {
    setTimeout(function () {
        $(".more-dialog").toggle("active");
    }, 0.900);
}

$("#more-dialog").click(showMoreDialog);

$(".dialog-close").click(showMoreDialog);

function showOderDialog() {
    setTimeout(function () {
        $(".oder-dialog").toggle("active");
        $(".more-dialog").css("display", "none");
    }, 0.900);
}

$(".oder").click(showOderDialog);
$("#oder-dialog").click(showOderDialog);



function showTime() {
    $(".box-sp").css("display", "block");
    $(".time").prepend($('.time2'));
    $(".box-sp").prepend($('.time1'));
    $(".box-sp").css("display", "none");
}

$(".time1").click(showTime);


function showEvent1() {
    $(".eight-march").css("display", "block");
    $(".party").css("display", "none");
    $(".valentine").css("display", "none");


    setTimeout(function () {
        $(".event-dialog").toggle("active");
        $(".more-dialog").css("display", "none");

    }, 0.900);
}

function showEvent2() {

    $(".party").css("display", "block");

    $(".eight-march").css("display", "none");

    $(".valentine").css("display", "none");



    setTimeout(function () {
        $(".event-dialog").toggle("active");
        $(".more-dialog").css("display", "none");
    }, 0.900);
}

function showEvent3() {
    $(".valentine").css("display", "block");

    $(".party").css("display", "none");

    $(".eight-march").css("display", "none");



    setTimeout(function () {
        $(".event-dialog").toggle("active");
        $(".more-dialog").css("display", "none");
    }, 0.900);
}
$("#event1").click(showEvent1);
$("#close-event1").click(showEvent1);


$("#event2").click(showEvent2);
$("#close-event2").click(showEvent2);


$("#event3").click(showEvent3);
$("#close-event3").click(showEvent3);

function anonyMous() {
    $(".more-dialog").css("display", "none");
}

$("#fix-bar").click(anonyMous);





function checkInputInformation() {

    var count = 0;

    var hoVaTen = $("#hovaten").val();

    if (hoVaTen == "") {
        alert("H??? v?? T??n kh??ng ???????c ????? tr???ng");
        return false;
    }

    var soDienThoai = $("#sodienthoai").val();

    var myDictionary = soDienThoai.split("");


    if (soDienThoai == "") {
        alert("S??? ??i???n tho???i kh??ng ???????c ????? tr???ng");
        return false;
    }

    if (myDictionary.length != 10) {
        alert("S??? ??i???n tho???i kh??ng h???p l???");
    }

    if (myDictionary.length == 10) {
        if (myDictionary[0] != "0") {
            alert("S??? ??i???n tho???i h??ng h???p l???");
            return false;
        }

        else {
            if (myDictionary[1] === "3") {
                if (myDictionary[2] == "1") {
                    alert("S??? ??i???n tho???i kh??ng h???p l???")
                    return false;
                }

                else {
                    count++;
                }
            }

            if (myDictionary[1] === "9") {
                if (myDictionary[2] == "5") {
                    alert("S??? ??i???n tho???i kh??ng h???p l???");
                }

                else {
                    count++;
                }

            }

            if (myDictionary[1] === "8") {
                if (myDictionary[2] == "7") {
                    alert("S??? ??i???n tho???i kh??ng h???p l???")
                }

                else {
                    count++;
                }
            }

            if (myDictionary[1] == "7") {
                var check = 0;
                if ((myDictionary[2] == "0") || (myDictionary[2] == "6") || (myDictionary[2] == "7") || (myDictionary[2] == "8") || (myDictionary[2] == "9")) {
                    check++;
                    count++;
                }

                if (check == 0) {
                    alert("S??? ??i???n tho???i kh??ng h???p l???");
                }
            }

            if (myDictionary[1] == "5") {
                var check = 0;
                if ((myDictionary[2] == "6") || (myDictionary[2] == "8") || (myDictionary[2] == "9")) {
                    check++;
                    count++;
                }

                if (check == 0) {
                    alert("S??? ??i???n tho???i kh??ng h???p l???");
                }
            }
        }

    }



    var thoiGian = $("#thoigian").val();

    if (thoiGian == "") {
        alert("Th???i gian kh??ng h???p l???");
    }

    var soBan = Number($("#soban").val());
    if (soBan <= 0) {
        alert("S??? b??n kh??ng h???p l???");
    }


    if (hoVaTen != "") {
        if ((soDienThoai != "") && (count != 0)) {
            if (soBan > 0) {
                if (thoiGian != "") {

                    alert("?????t b??n th??nh c??ng");
                    setTimeout(function () {
                        $(".oder-dialog").css("display", "none");

                        $("#hovaten").val("");

                        $("#sodienthoai").val("");

                        $("#thoigian").val("");

                        $("#soban").val("")

                        $(".box-sp").css("display", "block");
                        $(".time").prepend($('.time1'));
                        $(".box-sp").prepend($('.time2'));
                        $(".box-sp").css("display", "none");


                    }, 1000);

                    console.log(" Name : " + (hoVaTen));
                    console.log(" SDT : " + (soDienThoai));
                    console.log(" Time : " + (thoiGian));
                    console.log(" Number of table : " + (soBan));
                    if($("#loinhan").val() == "")
                    {
                        console.log(" Message : Null ");
                    }

                    else
                    {
                        console.log(" Message : " + ($("#loinhan").val()));

                    }




                }
            }
        }
    }

}

$(".submit").click(checkInputInformation);



