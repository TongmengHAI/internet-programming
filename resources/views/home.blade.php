<x-layout>
    {{-- category: featured --}}
    <x-category.index title='Featured Categories'></x-category.index>

    {{-- menu --}}
    <div class="menu-container" style="display:flex; align-items:center; justify-content:space-between">
        @foreach ($categories as $category)
            <x-menu.index img_path='{{"storage/assets/".$category->img}}' name='{{$category->name}}' n_of_products='{{$category->n_of_product}}' bg_color='{{$category->color}}'></x-menu.index>
        @endforeach
    </div>

    {{-- category: popular products  --}}
    <x-category.index title='Popular Products'></x-category.index>

    {{-- promotion --}}
    <div class="promotion_container" style="display: grid; grid-template-columns: repeat(3,1fr); gap: 24px;">
        @foreach ($promotions as $promotion)

            <x-promotion.index title='{{$promotion->title}}' bg_color='{{$promotion->bg_color}}'  btn_color='{{$promotion->btn_color}}' img_path='storage/assets/{{$promotion->image}}' > </x-promotion.index>
        @endforeach

    </div>

    <div class="product_container" style="display: grid; grid-template-columns: repeat(5,1fr); gap: 24px; margin-top:50px">
        @foreach ($products as $product)

            <x-product-card.index title='{{$product->name}}' category='{{$product->category->name}}' rating='{{$product->rating}}' weight='{{$product->weight}}' dis_pricing='{{$product->discount_pricing}}' pricing='{{$product->pricing}}' tag='{{$product->specail_offer}}'  tag_color='{{$product->tag_color}}' img_path='storage/assets/{{$product->image}}' > </x-product-card.index>
        @endforeach

    </div>

</x-layout>
