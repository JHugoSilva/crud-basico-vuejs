<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    private $employee;

    public function __construct(Employee $employee)
    {
        $this->employee = $employee;
    }

    public function index() {
        $employees = $this->employee->latest()->get();
        return response()->json($employees);
    }

    public function create(Request $request) {
        $request->validate([
            'name' => ['required'],
            'position' => ['required'],
            'email' => ['required'],
        ]);

        $employee = $this->employee->create([
            'name' => $request->name,
            'position' => $request->position,
            'email' => $request->email
        ]);

        return response()->json([$employee, 200]);
    }

    public function getEmployee($id) {
       $employee = $this->employee->find($id);
       return response()->json($employee);
    }


    public function update(Request $request, $id) {
        $request->validate([
            'name' => ['required'],
            'position' => ['required'],
            'email' => ['required'],
        ]);
        $employee = $this->employee->find($id);

        $employee = $employee->update([
            'name' => $request->name,
            'position' => $request->position,
            'email' => $request->email
        ]);

        return response()->json('Atualizado com sucesso!');
    }

    public function delete($id) {
        $employee = $this->employee->find($id);
        $employee->delete();
        return response()->json('deletado com sucesso!');
    }
}
