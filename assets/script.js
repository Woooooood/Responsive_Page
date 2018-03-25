window.onload = function () {
    var images = document.querySelector('.images-portfolio');
    var showAll = document.querySelector(".all-btn");
    var showPanoramas = document.querySelector(".panoramas-btn");
    var showPortrait = document.querySelector(".portrait-btn");
    var showMacro = document.querySelector(".macro-btn");
    var showJournal = document.querySelector(".journal-btn");

    var panoramas = document.querySelector('.panoramas');
    var portrait = document.querySelector('.portrait');
    var macro = document.querySelector('.macro');
    var journal = document.querySelector('.journal');

    showAll.onclick = function () {
        document.querySelector('#all1').style.display = "block";
        document.querySelector('#all2').style.display = "block";
        document.querySelector('#all3').style.display = "block";
        document.querySelector('#all4').style.display = "block";
        document.querySelector('#all5').style.display = "block";
        document.querySelector('#all6').style.display = "block";
        document.querySelector('#all7').style.display = "block";
        document.querySelector('#all8').style.display = "block";
    }

    showPanoramas.onclick = function () {
        document.querySelector('#all1').style.display = "block";
        document.querySelector('#all2').style.display = "block";
        document.querySelector('#all3').style.display = "block";
        document.querySelector('#all4').style.display = "block";
        document.querySelector('#all5').style.display = "block";
        document.querySelector('#all6').style.display = "block";
        document.querySelector('#all7').style.display = "block";
        document.querySelector('#all8').style.display = "block";
        document.querySelector('.macro1').style.display = "none";
        document.querySelector('.macro2').style.display = "none";
        document.querySelector('.portrait1').style.display = "none";
        document.querySelector('.portrait2').style.display = "none";
        document.querySelector('.journal1').style.display = "none";
        document.querySelector('.journal2').style.display = "none";
    }

    showPortrait.onclick = function () {
        document.querySelector('#all1').style.display = "block";
        document.querySelector('#all2').style.display = "block";
        document.querySelector('#all3').style.display = "block";
        document.querySelector('#all4').style.display = "block";
        document.querySelector('#all5').style.display = "block";
        document.querySelector('#all6').style.display = "block";
        document.querySelector('#all7').style.display = "block";
        document.querySelector('#all8').style.display = "block";
        document.querySelector('.macro1').style.display = "none";
        document.querySelector('.macro2').style.display = "none";
        document.querySelector('.panoramas1').style.display = "none";
        document.querySelector('.panoramas2').style.display = "none";
        document.querySelector('.journal1').style.display = "none";
        document.querySelector('.journal2').style.display = "none";
    }

    showMacro.onclick = function () {
        document.querySelector('#all1').style.display = "block";
        document.querySelector('#all2').style.display = "block";
        document.querySelector('#all3').style.display = "block";
        document.querySelector('#all4').style.display = "block";
        document.querySelector('#all5').style.display = "block";
        document.querySelector('#all6').style.display = "block";
        document.querySelector('#all7').style.display = "block";
        document.querySelector('#all8').style.display = "block";
        document.querySelector('.portrait1').style.display = "none";
        document.querySelector('.portrait2').style.display = "none";
        document.querySelector('.panoramas1').style.display = "none";
        document.querySelector('.panoramas2').style.display = "none";
        document.querySelector('.journal1').style.display = "none";
        document.querySelector('.journal2').style.display = "none";
    }

    showJournal.onclick = function () {
        document.querySelector('#all1').style.display = "block";
        document.querySelector('#all2').style.display = "block";
        document.querySelector('#all3').style.display = "block";
        document.querySelector('#all4').style.display = "block";
        document.querySelector('#all5').style.display = "block";
        document.querySelector('#all6').style.display = "block";
        document.querySelector('#all7').style.display = "block";
        document.querySelector('#all8').style.display = "block";
        document.querySelector('.portrait1').style.display = "none";
        document.querySelector('.portrait2').style.display = "none";
        document.querySelector('.panoramas1').style.display = "none";
        document.querySelector('.panoramas2').style.display = "none";
        document.querySelector('.macro1').style.display = "none";
        document.querySelector('.macro2').style.display = "none";
    }

}