<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::controller(UserController::class)->group( function(){
    Route::get('userget',  'index')->name('user_get');
    Route::get('usercreate','create')->name('user_create');
    Route::get('useredit/{id}','edit')->name('user_edit');
    Route::post('userstore','store')->name('user_store');
    Route::post('userupdate/{id}', 'update')->name('user_update');
    Route::post('userdelete/{id}','destroy')->name('user_delete');
    Route::get('cancel','cancel')->name('cancel');
});

Route::controller(PostController::class)->group( function(){
    Route::get('postget',  'index')->name('post_get');
    Route::get('postcreate','create')->name('post_create');
    Route::post('poststore','store')->name('post_store');
    Route::post('postupdate/{id}', 'update')->name('post_update');
    Route::post('postdelete/{id}','destroy')->name('post_delete');
    Route::get('cancel','cancel')->name('cancel');
});

