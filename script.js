//Hàm kiểm tra giá trị là 1 số nguyên > 0
function isNumberGreatZero(value) {
    if (typeof (value) == "number") {
        return true;
    }

    if (+value > 0)
        return true;

    return false;
}

//Hàm tự động tính số tiền hóa đơn bán hàng
function tinhTienHoaDonBanHang() {
    //Tìm các ô cần lấy thông tin và lấy giá trị
    let soLuong = $(".product-quantity").val();
    let donGia = $(".product-price").val();

    //Chuyển đổi các giá trị sang dạng số
    soLuong = +soLuong;
    donGia = +donGia;

    //Tính toán
    let thanhTien = soLuong * donGia;

    //Cập nhật thông tin mới
    $(".money-number").val(thanhTien);
    
    //Chuyển sang dạng text
    $(".money-text").val(numberToText(thanhTien));

}

//Đăng ký sự kiện click cho nút login
$("#button-login").click(function () {
    //Lấy giá trị của chi nhánh được chọn
    let maChiNhanh = $("#select-chi-nhanh").val();

    //Lấy mật khẩu của chi nhánh được chọn
    let matKhau = $("#input-password").val();

    //Tìm div alert success (để báo thành công)
    let divAlertSuccess = $("#alert-message-success");

    //Tìm div alert error (để báo lỗi)
    let divAlertError = $("#alert-message-error");

    //Kiểm tra chi nhánh + mật khẩu đúng, thì thông báo OK

    //Nếu chưa chọn chi nhánh nào thì báo lỗi
    if (maChiNhanh == "") {
        //Ẩn thông báo thành công
        divAlertSuccess.addClass("d-none");

        //Hiện thông báo lỗi
        divAlertError.removeClass("d-none");
        divAlertError.find("div").html("Vui lòng chọn chi nhánh để đăng nhập");
        return;
    }

    //Nếu chưa nhập mật khẩu thì báo lỗi
    if (matKhau == "") {
        //Ẩn thông báo thành công
        divAlertSuccess.addClass("d-none");

        //Hiện thông báo lỗi
        divAlertError.removeClass("d-none");
        divAlertError.find("div").html("Vui lòng nhập mật khẩu");
        return;
    }

    //Ngược lại, thì báo thành công
    //Ẩn thông báo lỗi
    divAlertError.addClass("d-none");

    //Hiện thông báo thành công
    divAlertSuccess.removeClass("d-none");
    divAlertSuccess.find("div").html("Đăng nhập thành công");

    //Chuyển đến trang chủ sau 5s
    let myTimeOut = setTimeout(function () {
        location.href = "index.html";
    }, 6000);

    //Thiết lập bộ đếm lùi
    let waitingTimes = 5;
    setInterval(function () {
        $("#waiting-times").html(`<i class="fa-sharp fa-solid fa-spinner fa-spin"></i> Đang chuyển đến trang chủ sau ${waitingTimes} s`);
        waitingTimes--;
    }, 1000);
    return;
});

//Đăng ký sự kiện gõ phím trên ô mật khẩu
$("#input-password").keypress(function (e) {
    //Nếu nhấn Enter
    if (e.keyCode == 13) {
        $("#button-login").click();

        //Ngăn chặn tự động submit
        e.preventDefault();
    }
});

$("#input-password").keyup(function (e) {
    //Nếu nhấn ESC
    if (e.keyCode == 27) {
        $("#input-password").val("");

        //Ngăn chặn tự động submit
        e.preventDefault();
    }
});

//Đăng ký sự kiện click cho nút btn-print-hoa-don-ban-hang
$(".btn-print-hoa-don-ban-hang").click(function () {
    //Lấy giá trị từ các ô nhập chứa vào các biến
    let soDienThoai = $(".client-mobile").val();
    let hoVaTen = $(".client-name").val();
    let diaChi = $(".client-address").val();
    let loaiSanPham = $(".product-category").val();
    let maSanPham = $(".product-id").val();
    let soLuong = $(".product-quantity").val();
    let donGia = $(".product-price").val();

    //Kiểm tra giá trị các biến đó,nếu biến rổng thì báo lỗi

    //Mặc định xem như form hợp lệ
    let isValid = true;


    //Kiểm tra số điện thoại
    if (soDienThoai == "") {
        $(".client-mobile").focus();
        $(".client-mobile").css("border", "4px solid red");
        $(".client-mobile").css("background", "yellow");
        isValid = false;
    }
    else {
        $(".client-mobile").css("border", "");
        $(".client-mobile").css("background", "");
    }

    //Kiểm tra họ và tên
    if (hoVaTen == "") {
        $(".client-name").focus();
        $(".client-name").css("border", "4px solid red");
        $(".client-name").css("background", "yellow");
        isValid = false;
    }
    else {
        $(".client-name").css("border", "");
        $(".client-name").css("background", "");
    }

    //Kiểm tra địa chỉ
    if (diaChi == "") {
        $(".client-address").focus();
        $(".client-address").css("border", "4px solid red");
        $(".client-address").css("background", "yellow");
        isValid = false;
    }
    else {
        $(".client-address").css("border", "");
        $(".client-address").css("background", "");
    }


    //Kiểm tra loại sản phẩm
    if (loaiSanPham == "") {
        $(".product-category").focus();
        $(".product-category").css("border", "4px solid red");
        $(".product-category").css("background", "yellow");
        isValid = false;
    }
    else {
        $(".client-category").css("border", "");
        $(".client-category").css("background", "");
    }

    //Kiểm tra mã sản phẩm
    if (maSanPham == "") {
        $(".product-id").focus();
        $(".product-id").css("border", "4px solid red");
        $(".product-id").css("background", "yellow");
        isValid = false;
    }
    else {
        $(".client-id").css("border", "");
        $(".client-id").css("background", "");
    }

    //Kiểm tra số Lượng
    if (soLuong == "") {
        $(".product-quantity").focus();
        $(".product-quantity").css("border", "4px solid red");
        $(".product-quantity").css("background", "yellow");
        isValid = false;
    }
    else {
        $(".client-quanlity").css("border", "");
        $(".client-quanlity").css("background", "");
    }

    //Kiểm tra đơn giá
    if (donGia == "") {
        $(".product-price").focus();
        $(".product-price").css("border", "4px solid red");
        $(".product-price").css("background", "yellow");
        isValid = false;
    }
    else {
        $(".client-price").css("border", "");
        $(".client-price").css("background", "");
    }

    //Kiểm tra số lượng và số hợp lệ
    if (!isNumberGreatZero(soLuong)) {
        $(".product-quantity").focus();
        $(".product-quantity").css("border", "4px solid red");
        $(".product-quantity").css("background", "yellow");
        isValid = false;
        alert("Vui lòng nhập số lượng là số lớn hơn số 0");
    }
    else {
        $(".client-quanlity").css("border", "");
        $(".client-quanlity").css("background", "");
    }

    //Kiểm tra đơn giá và số hợp lệ
    if (!isNumberGreatZero(donGia)) {
        $(".product-price").focus();
        $(".product-price").css("border", "4px solid red");
        $(".product-price").css("background", "yellow");
        isValid = false;
        alert("Vui lòng nhập số lượng là số lớn hơn số 0");
    }
    else {
        $(".client-price").css("border", "");
        $(".client-price").css("background", "");
    }

    //Kiểm tra các giá trị hợp lệ
    if (isValid == true) {
        alert("Tất cả thông tin và giá trị hợp lệ");
    }
    else {
        alert("Vui lòng kiểm tra thông tin, giá trị nhập hợp lệ và không để trống");
    }

    //Sau khi OK thì lưu dữ liệu và in

});

//Đăng ký sự kiện tự động tính tiền hóa đơn bán hàng khi thay đổi số lượng hoặc đơn giá
$(".product-quantity , .product-price").keyup(function () {
    tinhTienHoaDonBanHang();
});

//Đăng ký nút tắt tăng (arrow up) / giảm (arrow down) số lượng
