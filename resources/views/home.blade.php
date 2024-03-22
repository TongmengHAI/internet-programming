<x-layout>
    <x-category.index title='Featured Categories'></x-category.index>

    <div class="menu-container" style="display:flex; align-items:center; justify-content:space-between">
        @foreach ($categories as $category)
            <x-menu.index img_path='{{"storage/assets/".$category->img}}' name='{{$category->name}}' n_of_products='{{$category->n_of_product}}' bg_color='{{$category->color}}'></x-menu.index>
        @endforeach
    </div>

    <x-category.index title='Popular Products'></x-category.index>



</x-layout>
