@props(['img_path','tag','tag_color','category', 'title', 'rating', 'weight', 'dis_pricing', 'pricing' ])
<div class="">

    <div class="products">

            <div class="image">
                <img src="{{asset($img_path)}}" >

                @if($tag === ' ')
                    <div class="tag" style="padding: 0;">
                        {{ $tag }}
                    </div>

                @else
                    @if($tag === 'Hot')
                        <div class="tag" style="padding: 5px 10px 5px 10px;background-color:{{$tag_color}}">
                            {{ $tag }}
                        </div>
                    @elseif($tag == 'Sale')
                        <div class="tag" style="padding: 5px 10px 5px 10px;background-color:{{$tag_color}}">
                            {{ $tag }}
                        </div>
                    @else
                        <div class="tag" style="padding: 5px 10px 5px 10px;background-color:{{$tag_color}}">
                            {{ $tag }}
                        </div>
                    @endif
                @endif

            </div>


        <div class="content">
            <div class="">
                <div class="category">{{ $category }}</div>
                <div class="title">{{ $title }}</div>
                <div class="rating">

                    @for($i=0; $i<$rating; $i++ )
                        <i class=' rating bx bxs-star'></i>
                    @endfor
                    @for ($i=0; $i<(5-$rating); $i++ )
                        <i class='unrating bx bxs-star' ></i>
                    @endfor
                        <span class="rating_num">({{ $rating}})</span>
                </div>
                <div class="description">{{ $weight }} grams</div>
            </div>
            <div class="price">
                <div class="allPrice">
                    @if($dis_pricing == 0)
                        <div class="discountPrice">${{ $pricing}}</div>
                    @else
                        <div class="discountPrice">${{ $dis_pricing }}</div>
                        <div class="sellprice"><s>${{ $pricing}}</s></div>

                    @endif
                </div>


                <div class="add_btn" >
                    <button class="btn" style="cursor: pointer;">Add +</button>
                    <input type="number" class="add_num" min="0"/>
                </div>
            </div>
        </div>
    </div>

</div>

