<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
       
        
        $post = Post::with('user:id,name')->latest()->get();
        //dd($post);
        return Inertia::render('Post/PostGet', [
            //'posts' => Post::all(),
            'post'=> $post
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Post/PostCreate');
    }

    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $post = Post::findOrFail($id);
        return Inertia::render('Post/PostEdit', [
            'post' => $post
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Post $post)
    {
        
        $validated = $request->validate([
            'title' => 'required|string|max:100',
            'content' => 'required|string|max:100',            
        ]);
      
        $user = auth()->user(); 

        $post = new Post([
            'title' => $request->input('title'),
            'content' => $request->input('content'),  
            //'title' => $validated['title'],
            //'content' => $validated['content'],
            'user_id'=> $user->id         
        ]);
             
        $post->save($validated);

        return redirect()->route('post_get')->with('message', "$post->id creado exitosamente");
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            
        ]);
             
        $post = Post::findOrFail($id);
        $post->update($validated);
        return redirect()->route('post_get')->with('message', "$post->id actualizado exitosamente");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();
        return redirect()->route('post_get')->with('message', "$post->id  eliminado exitosamente");
    }

    public function cancel()
    {
        return redirect()->route('post_get');
    }
}
