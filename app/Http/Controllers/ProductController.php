<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use App\Models\Product;

class ProductController extends Controller
{
    //
    public function addProduct(Request $request){


        $imagws = [];

        foreach($request->get('product_image') as $imgs){
            $imagws[] = $imgs['name'];
        }

        $data = [
            'product_name' => $request->get('product_name'),
            'price_price' => $request->get('price_price'),
            'product_description' => $request->get('product_description'),
            'product_image' => json_encode($imagws),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]; 
        
        if(DB::table('products')->insert($data)){
            return 1;
        }
    }


    public function updateproduct(Request $request){
        $imagws = [];

        foreach($request->get('product_image') as $imgs){
            $imagws[] = $imgs['name'];
        }

        $data = [
            'product_name' => $request->get('product_name'),
            'price_price' => $request->get('price_price'),
            'product_description' => $request->get('product_description'),
            'product_image' => json_encode($imagws),
            'updated_at' => date('Y-m-d H:i:s')
        ]; 
        


        if(DB::table('products')->where('id', $request->get('id'))->update($data)){
           return 1;
        }
    }

    public function getAllProduct() {
        $product = DB::table('products')->get();
        $data = [];
        foreach($product as $prod) {
            $prdat = [
                'id' => $prod->id,
                'product_image' => $prod->product_image,
                'product_name' => $prod->product_name,
                'price_price' => $prod->price_price,
            ];

            $data[] = $prdat;
        }
        return response()->json($data);
    }

    public function getsingleproduct($productid) {

        $product = DB::table('products')->where('id', $productid)->get()->first();
        return response()->json($product);

    }

    public function deleteproduct($productid) {

        $product = DB::table('products')->where('id', $productid)->delete();
        return response()->json($product);

    }

    public function uploadfile(Request $request) {
        
        $file = $request->file('file');
        $image_name = $file->getClientOriginalName();
        $destinationPath = public_path('images');
        if ($file->move($destinationPath, $image_name)) {
            return response()->json(['imageUrl' => $image_name]);
        }
    }
}
