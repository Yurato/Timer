$(function () {
    $('#decreaseQuantity').click(function (e) {
        e.preventDefault();
        var stat = $('#numberUpDown').text();
        var num = parseInt(stat, 10);
        num--;
        if (num < 0) {
            alert('더이상 줄일수 없습니다.');
            num = 0;
        }
        $('#numberUpDown').text(num);
    });
    $('#increaseQuantity').click(function (e) {
        e.preventDefault();
        var stat = $('#numberUpDown').text();
        var num = parseInt(stat, 10);
        num++;

        if (num > 9) {
            alert('더이상 늘릴수 없습니다.');
            num = 9;
        }
        $('#numberUpDown').text(num);
    });
});
