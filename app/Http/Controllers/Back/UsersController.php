<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Back\AdminController;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Repositories\UsersRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UsersController extends AdminController
{
    public function __construct(UsersRepository $u_rep)
    {
        parent::__construct();

        $this->subtitle = "Авторы";

        $this->template = 'back.users.index';

        $this->repository = $u_rep;

        $this->table = 'users';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->subtitle = "Авторы";

        $this->template = 'back.users.index';

        return $this->renderOutput();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->subtitle = "Новый автор";

        $this->template = 'back.users.edit';

        return $this->renderOutput();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $result = $this->repository->create($request->except('_token', '_method'));

        if (is_array($result) && !empty($result['error'])) {
            return back()->with($result);
        }

        return redirect(route('users.index'))->with(['message' => $result]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
//     public function show($id)
    //     {
    //         dd('user - show');
    //     }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $this->subtitle = "Редактировать автора";

        $this->template = 'back.users.edit';

        return $this->renderOutput(['id' => $user->id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $user)
    {
        $result = $this->repository->update($user, $request->except('_token', '_method'));

        if (is_array($result) && !empty($result['error'])) {
            return back()->with($result);
        }

        return redirect(route('users.index'))->with(['message' => $result]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $result = $this->repository->deleteUser($user);

        if (request()->ajax()) {

            if (is_array($result) && ($result['status'] === 'success')) {
                $result = array_add($result, 'redirect', route('users.index'));
            }

            return response()->json($result);

        } else {

            if (is_array($result) && ($result['status'] !== 'success')) {
                return back()->with($result);
            }

            return redirect(route('users.index'))->with(['message' => $result]);
        }

    }

    /**
     * Update user's api_token field
     */
    public function updateApiToken(User $user)
    {
        $token = Str::random(60);
        $user->forceFill([
            'api_token' => $token,
        ])->save();
    }

}
