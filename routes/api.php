<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/addnewproduct', 'App\Http\Controllers\ProductController@addProduct');
Route::post('/updateproduct', 'App\Http\Controllers\ProductController@updateproduct');
Route::post('/uploadfile', 'App\Http\Controllers\ProductController@uploadfile');
Route::get('/getAllProduct', 'App\Http\Controllers\ProductController@getAllProduct');
Route::get('/getsingleproduct/{productid}', 'App\Http\Controllers\ProductController@getsingleproduct');
Route::get('/deleteproduct/{productid}', 'App\Http\Controllers\ProductController@deleteproduct');