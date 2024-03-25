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

