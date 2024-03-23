<x-layout>
    <form action="/product/store" method="POST" enctype="multipart/form-data" style="width: 50vw">
        @csrf
        <fieldset style="display: flex; flex-direction:column;  gap: 20px">
            <legend><h1>Product Form</h1></legend>
            <div>
                <label for="name" class="form-label" style="width:15%; padding-right:5%">Name</label>
                <input type="text" class="form-control" id="name" name="name" style="width:80%">
            </div>
            <div style="display: flex">
                <div style="width:50%; padding-right:9%" >
                    <label for="pricing" class="form-label" style="width:20%; padding-right:13%">Price</label>
                    <input type="number" class="form-control" id="pricing" name="pricing" min="1"  >
                </div>
                <div style="width:50%">
                    <label for="promotion" class="form-label" style="width:15%; padding-right:5%">Promotion</label>
                    <input type="number" class="form-control" id="promotion" name="promotion"  >
                </div>
            </div>

            <div>
                <label class="visually-hidden" for="category" style="width:15%; padding-right:2%">Category</label>
                <select class="form-select" id="category" name="category"   style="width:25%;">
                    @foreach ( $categories as $category )
                        <option value="{{$category->id}}">{{$category->name}}</option>
                    @endforeach

                </select>
              </div>
            <div >
                <label for="image" class="form-label" style="width:15%; padding-right:5%">Image</label>
                <input type="file" class="form-control" id="image" name="image">
            </div>
            <div style="display: flex;">
                <p class="form-label" style="width:11.5%;">Description</p>
                <textarea id="description" name="description" ></textarea>
            </div>

            <div style="width:100%;display: flex; align-items:center; justify-content:end; gap:10px">
                <a href="{{route("home")}}"  style="padding:5px 8px; text-decoration: none; background-color: gray; color:white; border:none; border-radius:5px">Cancel</a>
                <button type="submit" style="padding:7px 10px; text-decoration: none; background-color: blue; color:white; border:none; border-radius:5px">Create</button>
            </div>
        </fieldset>
    </form>
</x-layout>




