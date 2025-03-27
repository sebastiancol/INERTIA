<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use GrahamCampbell\ResultType\Success;
use Inertia\Inertia;
use PhpParser\Node\Stmt\TryCatch;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
       //$users = paginate(5);
        //dd($users);

        return Inertia::render('User/Userget',[
            'users'=>$users
        ]);

    }

    public function create ()
    {
        return Inertia::render('User/Usercreate');
    }

    public function edit ($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('User/Useredit',[
            'user'=>$user
        ]);
    }

    public function show(User $user)
    {
        //return Inertia::render('Ticket',  Ticket::findOrFail($id));
        if ($user!=null) {
            return Inertia::render('User/Userget',  User::findOrFail($user));
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
       
        //$validate = User::findOrFail($user->email);
        //dd($validate);
        $user->save();

        return redirect()->route('user_get')->with('success', 'Usuario creado exitosamente');
    }

   
     
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        /*$validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'file' => 'nullable|file',
        ]);

        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);*/

       
        $user = User::findOrFail($id);
        $user->update($request->all());
       
        return redirect()->route('user_get')->with('success', 'Usuario actualizado exitosamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
    
        return redirect()->route('user_get')->with('success', 'Usuario eliminado exitosamente');


        /*if($user_data ){
            /*return response()->json([
                'message'=>'success'
            ],204);
            $user_data->delete();
            return redirect()->route('user_get')->with('success', 'Usuario eliminado exitosamente');
        }else {
            return response()->json([
                'message'=>'not found'
            ],404);
        }*/
        
    }

    public function cancel()
    {
        return redirect()->route('user_get');
    }
}
