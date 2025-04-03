<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Post extends Model
{
    use HasFactory;

    //protected $primaryKey = 'id';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    protected $fillable = [
        'title',
        'content',
        'user_id',
    ];

}
