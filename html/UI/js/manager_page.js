$(function () {

    $(".sub_menu").hide();
    // 서브메뉴 모두 가림(세팅)

    $(".sub_menu").siblings("a").append('<span class="menu_down"></span>');
    // 서브메뉴의 형제관계에 있는 a태그의 하위요소로 span태그를 추가한다.
    // (서브메뉴를 가지고 있는 a태그 옆에 작은 삼각형 달기)

    $(".main_menu>li>a").click(function () {

        $(".sub_menu").slideUp();
        // 해당 서브메뉴가 열렸을 때 다른 서브메뉴를 접으면서 표현 하고싶을 때
        // 해당 서브메뉴가 열리는 구문 앞에 넣어야 함!

        $(this).next(".sub_menu").slideToggle();
        // 클릭한 a태그의 다음 요소인 서브메뉴를 펼치거나 접는다


        $(this).find("span").toggleClass("menu_up");
        // 클릭한 a태그의 하위요소인 span태그(삼각형)에 menu_up 클래스를 붙였다 뗐다 함
        // toggleClass는 클래스를 상태에 따라 추가/삭제(삼각형 위>아래 방향 변경)

        return false;

    });

    $("#check_all").change(function () {

        $('.check_item').prop('checked', $(this).prop('checked'));

    });

    // $(".add_btn").click(function(){


    //     var newRow = '<tr>' +
    //       '<td><input type="checkbox" class="check_item"></td>' +
    //       '<th scope="row">' + '</th>' +
    //       '<td></td>' + '<td></td>' + '<td></td>' + '<td></td>' +
    //       '<td></td>' + '<td></td>' + '<td></td>' + '<td></td>' + '<td></td>'
    //       '</tr>';
    //     $('.table tbody').append(newRow);

    // });

    $(".del_tr").click(function () {
        $('.check_item:checked').closest('tr').remove();
    });

    // $("#save_btn").click(function () {

    //     alert("등록되었습니다");
    //     alert($("#auto").val());
    //     alert($("#country_name").val());
    //     alert($("#country_name_ko").val());
    //     alert($("#country_code_two").val());
    //     alert($("#use").val());
    //     alert($("#explanation").val());
    //     alert($("#country_name_en").val());
    //     alert($("#country_code_three").val());
    //     alert($("#order").val());

    //     console.log($("#auto").val());
    //     console.log($("#country_name").val());
    //     console.log($("#country_name_ko").val());
    //     console.log($("#country_code_two").val());
    //     console.log($("#use").val());
    //     console.log($("#explanation").val());
    //     console.log($("#country_name_en").val());
    //     console.log($("#country_code_three").val());
    //     console.log($("#order").val());


    // });

    $("#reset").click(function () {

        $('input[type="text"]').val('');
        $('textarea').val('');
    });


    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    $( ".datepicker" ).datepicker({dateFormat: "yy년mm월dd일"});

});