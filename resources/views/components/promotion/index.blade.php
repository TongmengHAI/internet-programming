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


<style>
    .promotion{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 280px;
        border-radius: 10px;
    }
    .promotion .content{
        width: 50%;
        padding: 10% 0 10% 10%;
        font-weight: 600;
        font-size: 20px;

    }

    .promotion .image{
        height: 100%;
        width: 50%;
        display: flex;
        align-items:flex-end;
        justify-content: center;
    }
    .promotion img{
        width: 100%;
        object-fit: cover;
        border-radius: 0 0 10px 0;
    }
    .promotion .button{
        padding:5px 8px;
        padding-bottom: 8px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-weight: 500;
        transition: 0.3s;

    }
    .promotion .button:hover{
        opacity: 0.7;
        transform: scale(0.97);
        transition: 0.3s;

    }
</style>
