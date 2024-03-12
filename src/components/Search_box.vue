<template>
    <div class="searchBoxSection d-flex align-items-center justify-center-center"
        style="border: 2px solid #BCE3C9;border-radius: 5px; width: 40%; height: 40px;">

        <ul class="allCategories  mt-3" style=" border-right: 1px solid black; padding-right: 5px;">
            <li style="list-style-type: none; ">All categories <i class='bx bxs-chevron-down'></i></li>
            <!-- <li>
              <div class="allCategoriesDropDown">
                <ul>
                  <li>a</li>
                  <li>b</li>
                </ul>
              </div>
            </li> -->
        </ul>

        <div class="searchBox d-flex align-items-center position-relative" style="width: 68%;">
            <input type="text" class=" search position-absolute "
                style="width: 100%; height: 30px; border: none; outline:none ;font-size: 13px; padding-left: 5px;"
                placeholder="Search for item">
            <i class='bx bx-search position-absolute' style="right: 10px; color: #7E7E7E;"></i>
        </div>
</div></template>