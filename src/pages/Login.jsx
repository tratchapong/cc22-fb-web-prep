import React from 'react'

function Login() {
  return (
    <div className="h-175 pt-20 pb-28 bg-base-200">
      <div className="p-5 mx-auto max-w-5xl min-h-135 flex justify-between">
        <div className="flex flex-col gap-4 mt-20 basis-3/5 ">
          <div className="text-5xl text-primary font-bold">Fakebook</div>
          <h2 className='text-[30px] leading-8 mt-3 w-128.5 '>
            Fakebook helps you connect and share with the people in your life.
          </h2>
          <div className="badge badge-outline badge-error">This is not real facebook</div>
        </div>
        <div className="flex flex-1">
          <div className="card bg-base-100 w-full h-87.5 shadow-xl mt-8">
            <form>
              <div className="card-body gap-3 p-4">
                <input type="text"
                  className='input input-bordered w-full'
                  placeholder='E-mail or Phone number' />
                <input type="password"
                  className='input input-bordered w-full'
                  placeholder='password' />
                <button className='btn btn-primary text-xl'>Login</button>
                <p className="text-center cursor-pointer opacity-70">
                  Forgotten password?
                </p>
                <div className="divider my-0"></div>
                <button className='btn btn-secondary text-lg text-white mx-auto'
                  type='button'>Create new account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
