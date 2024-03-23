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
<style>
    .products{
        width: 100%;
        height: 50vh;
        border: 1px solid #BCE3C9;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    .products .image{
        display: flex;
        align-items: end ;
        justify-content: center;
        position: relative;
        height: 35%;
        padding-top: 10px;

    }
    .products .image img{
        width: 70%;
        height: 100%;
        border-radius: 10px 10px 0 0;
        object-fit: contain;
    }
    .products .image .tag{

        font-size: 14px;
        font-weight: 400;
        color: white;
        border-radius: 0px 30px 30px 0px;
        position: absolute;
        left: 0;
        top: 20%;
        translate: 0 -50%;

    }
    .products .content{
        padding: 19px;
    }
    .products .content .title{
        color: #253D4E;
        font-size: 14px;
        font-weight: 700;
    }
    .products .content .price{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .products .content .price .allPrice{
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .products .content .category{
        font-size: 14px;
        font-weight: 400;
        color: #7E7E7E;
    }
    .products .content .rating{
        display: flex;
        align-items: center;
        justify-content: start;
    }
    .products .content .rating .rating{
        color: #FDC040;
    }
    .products .content .rating .unrating{
        color: #CDCDCD;
    }
    .products .content .rating .rating_num{
        padding-left: 10px ;
        color: #7E7E7E;
    }
    .products .content .description,.sellprice{
        font-size: 12px;
        font-weight: 400;
        color: #7E7E7E;
    }
    .products .content .discountPrice{
        font-size: 20px;
        font-weight: 700;
        color: #3BB77E;
    }
    .products .content .add_btn{
        display: flex;
        align-items: center;

    }
    .products .content .add_btn .add_num{
        width: 67px;
        height: 29px;
        border-radius: 5px;
        color: #3BB77E;
        text-align: center;
        font-size: 14px;
        border: 1px solid #3BB77E;
        display: none;

    }
    .products .content .add_btn .btn{
        width: 67px;
        height: 29px;
        border-radius: 5px;
        background-color: #DEF9EC;
        border: none;
        color: #3BB77E;
        font-size: 14px;
        font-weight: 700;
    }


</style>
<script>
    $(document).ready(function() {
        $(".add_btn button").click(function() {
            $(this).hide();
            $(this).siblings(".add_num").show();

            $(this).siblings(".add_num").attr("min", 0);
        });

        $(".add_num").change(function() {
            var value = $(this).val();

            if (value == 0) {
                $(this).hide();
                $(this).siblings(".btn").show();
            }


        });
    });


</script>
