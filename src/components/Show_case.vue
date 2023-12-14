<template>
    <div class="bannerImage d-flex justify-content-between align-items-center" >
        <div class="description p-5 d-flex flex-column gap-2">
          <div class="title">
            <h1 style="font-size: 50px; font-weight: 700; color: #253D4E;">Don’t miss amazing grocery deals</h1>
          </div>
          <div class="subtitle">
            <h3 style="font-size: 20px; font-weight: 400; color: #7E7E7E;">Sign up for the daily newsletter </h3>
          </div>
          <div class="subscribe position-relative mt-5" style="height: 50px;">
            <input type="email" class="position-absolute " style="width: 100%; height: 100%; border-radius: 30px ; padding-left: 10%;;border: none; outline: none; font-size: 12px; font-weight: 400;" placeholder="Your emaill address">
            <i class='bx bxl-telegram position-absolute' style="left: 5%; top: 50%; translate: 0 -50%; font-size: 20px; color: #7E7E7E;" ></i>
            <button class="subscribe position-absolute" style="right: 0 ;width: 150px; height: 100%;border-radius:30px;font-weight:700 ; background-color: #3BB77E; color: white; border: none;">Subscribe</button>
          </div>
        </div>
        <div class="thumbnail " style="height: 450px;">
          <img src="../assets/img/bannerImg.png" style="height: 100%;" alt="">
        </div>
      </div>
</template>