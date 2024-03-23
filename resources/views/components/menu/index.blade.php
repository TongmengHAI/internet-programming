@props(['img_path','name', 'n_of_products','bg_color'])

<div class="menu" style="background-color:{{$bg_color}}">
    <div class="image" >
        {{-- <img src="{{asset('storage/assets/apple.png')}}" alt="" /> --}}
        <img src="{{asset($img_path)}}" alt="{{$img_path}}" />
    </div>
    <div class="content">
        <div class="name">{{$name}}</div>
        <div class="num_item">{{$n_of_products}} items</div>

    </div>

</div>
<style>
    .menu{
        width: 120px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 5px 0;
        border: 1px solid white;

    }
    .menu:hover{
        border: 1px solid green;
        cursor: pointer;
    }
    .menu .image{
        height: 70%;

    }
    .menu img{
        width: 95%;
        object-fit: cover;
    }
    .menu .content{
        height: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    .menu .content .name{
        font-weight: bold;
        font-size: 14px;
    }
    .menu .content .num_item{
        font-size: 12px;
        color: #B6B6B6;
    }

</style>
