<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use GrahamCampbell\ResultType\Success;
use Inertia\Inertia;
use PhpParser\Node\Stmt\TryCatch;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        //dd($users);

        return Inertia::render('User/Userget',[
            'users'=>$users
        ]);

    }

    public function create ()
    {
        return Inertia::render('User/Usercreate');
    }

    public function show(User $user)
    {
        //return Inertia::render('Ticket',  Ticket::findOrFail($id));
        if ($user!=null) {
            return Inertia::render('User/Useredit',  User::findOrFail($user));
        }else{
            return response()->json([404 => 'Witout register']);
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, User $user)
    {
        
        $user = new User([
            'name' => $request->input('name'),
            'email' => $request->input('email'),            
            'password' => $request->input('password'),            
        ]);

        $user->save();
       

        /*$validate = User::findOrFail($user);

        if(!$validate){
            $user=Success()
        }else{
        }*/

        return redirect('userget')->with('success', 'Usuario creado exitosamente');

    }

   
     
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'file' => 'nullable|file',
        ]);

        $filePath = $request->file('file')?->store('uploads', 'public');

        $user->update(array_merge($validated, [
            'file_path' => $filePath,
        ]));

        return redirect()->route('post_get');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('user_get');
    }
}
