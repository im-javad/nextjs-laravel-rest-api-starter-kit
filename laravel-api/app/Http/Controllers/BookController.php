<?php

namespace App\Http\Controllers;

use App\Http\Resources\bookCollection;
use App\Http\Resources\bookResource;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();
        return new bookCollection($books);
    }

    public function store(Request $request)
    {
        // return $request->all();
        $book = Book::create($request->all());
        return response()->json('success' , 201);
    }

    public function show($id)
    {
        return (new bookResource(Book::findOrFail($id)))->response();
    }

    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);
        $book->update($request->all());
        return (new bookResource($book))->response();
    }

    public function destroy($id)
    {
        Book::destroy($id);
        return response()->json(null, 204);
    }
}