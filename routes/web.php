<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;

Route::post('create', [EmployeeController::class, 'create']);
Route::get('index', [EmployeeController::class, 'index']);
Route::get('edit/getEmployee/{id}', [EmployeeController::class, 'getEmployee']);
Route::put('edit/update/{id}', [EmployeeController::class, 'update']);
Route::delete('employee/delete/{id}', [EmployeeController::class, 'delete']);

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');

