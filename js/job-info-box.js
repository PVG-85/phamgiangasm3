"use strict";
// khai báo các biến
const infoBox = document.querySelectorAll(".info-box");
const boxcontent = document.querySelectorAll(".box-content");
const viewMore = document.querySelectorAll(".view-more");
const textBox = document.querySelectorAll(".text-box");

for (let i = 0; i < infoBox.length; i++)
  //  hiện/ẩn nút view more
  infoBox[i].addEventListener("mouseover", function () {
    textBox[i].classList.remove("hidden");
    infoBox[i].addEventListener("mouseout", function () {
      textBox[i].classList.add("hidden");
    });
    // hiện /ẩn thông tin.
    viewMore[i].addEventListener("click", function () {
      boxcontent[i].classList.remove("hidden");
      viewMore[i].textContent = " 🔝VIEW LESS";
    });
    if (!boxcontent[i].classList.contains("hidden"))
      viewMore[i].addEventListener("click", function () {
        boxcontent[i].classList.add("hidden");
        viewMore[i].textContent = " 🔻 VIEW MORE";
      });
  });
