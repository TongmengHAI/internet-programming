<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;


class CheckRole extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
{
    if ($request->user() && $request->user()->role != $role) {
        return response('Unauthorized.', 401);
    }

    return $next($request);
}

}
