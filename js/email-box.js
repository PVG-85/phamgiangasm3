"use strict";

//  Khai báo các biến DOM cần thiết
const emailBox = document.getElementById("email-box"),
  submitButton = document.getElementById("submit"),
  emailBoxDiv = document.getElementById("enter-email-box"),
  personalInfoDiv = document.querySelector(".personal-info"),
  wrongEmailNofication = document.querySelector(".wrong-email");

// Hàm kiểm tra email người dùng nhập đúng hay sai
const checkmail = function () {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(emailBox.value)) {
    return true;
  } else {
    return false;
  }
};

// Hàm ẩn mục submit email và hiển thị mục thông tin cá nhân
submitButton.addEventListener("click", function () {
  if (checkmail(emailBox.value)) {
    emailBoxDiv.classList.add("hidden");
    personalInfoDiv.classList.remove("hidden");
  } else {
    wrongEmailNofication.classList.remove("hidden");
  }
});
