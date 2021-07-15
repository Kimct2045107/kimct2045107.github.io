var result = prompt("年齢確認が必要なので、年齢を入力してください", 18);
if (result >= 16) {
    alert("ウェブサイトにようこそ‼"); s
} else {
    var result1 = confirm("まだ１８歳未満、責任を持って続けますか？")
    if (result1 == true) {
        alert("wellcome to my website!!")
    } else {
        stop();
    }
}

// slide
// var stt = 0;
// slide();

// function slide() {
//     var i;
//     var x = document.getElementsByClassName("slide");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     stt++;
//     if (stt > x.length) { stt = 1 }
//     x[stt - 1].style.display = "block";
//     setTimeout(slide, 1000);
// }

//out slide

// フォーの映像をクリックすると
// $(document).ready(function(){
//     var stt = 0;
//     $("img.slide").each(function(){
//         if ($(this).is(':visible')) {
//             stt = $(this).attr("stt");
//         }
//     });
//     $("#next").click(function() {
//         next = ++stt;
//         $("img.slide").hide();
//         $("img.slide").eq(next).show();
//     });
//     $("#prev").click(function() {
//         prev = --stt;
//         $("img.slide").hide();
//         $("img.slide").eq(prev).show();
//     });
// });