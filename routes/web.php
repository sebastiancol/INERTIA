<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Auth;

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

/*Route::get('/', function () {
    return inertia('User/Userget');
    return view('welcome');
});*/

Route::inertia('/','login');


//Route::middleware(['auth:sanctum'])->group(function () {

    Route::controller(UserController::class)->group( function(){
        Route::get('userget',  'index')->name('user_get');
        Route::get('usercreate','create')->name('user_create');
        Route::get('useredit/{id}','edit')->name('user_edit');
        Route::post('userstore','store')->name('user_store');
        Route::put('userupdate/{id}', 'update')->name('user_update');
        Route::delete('userdelete/{id}','destroy')->name('user_delete');
        Route::get('canceluser','cancel')->name('cancel_user');
    });

//});


//Route::middleware(['active'])->group(function () {

    Route::controller(PostController::class)->group( function(){
        Route::get('postget',  'index')->name('post_get');
        Route::get('postcreate','create')->name('post_create');
        Route::get('postedit/{id}','edit')->name('post_edit');
        Route::post('poststore','store')->name('post_store');
        Route::put('postupdate/{id}', 'update')->name('post_update');
        Route::delete('postdelete/{id}','destroy')->name('post_delete');
        Route::get('cancelpost','cancel')->name('cancel_post');
    });
    

//});




Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');




