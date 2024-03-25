@props(['img_path','title', 'btn_color','bg_color'])

<div class="promotion" style="background-color:{{$bg_color}}">
    <div class="content">
        <div class="title">{{ $title }}</div>
        <button class="button" style="background-color:{{$btn_color}}; color: white;">
            <span  style="margin-right: 2px; font-size: 15px;">Shop now</span>
            <i class="fa-solid fa-arrow-right" style="font-size: 12px;"></i>
        </button>
    </div>
    <div class="image"><img src="{{asset($img_path)}}" alt="{{$img_path}}"></div>
</div>


