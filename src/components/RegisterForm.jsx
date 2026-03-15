import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/validations/schema'
import axios from 'axios'
import { useEffect } from 'react'

function RegisterForm({ closeModal }) {
  const { formState, register, handleSubmit, reset } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
    defaultValues: { firstName: "", lastName: "", identity: "", password: "", confirmPassword: "" },
  })
  const { errors, isValid, isSubmitting, isSubmitted } = formState
  useEffect(() => {
    reset()
  }, [closeModal])

  const onSubmit = async data => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const resp = await axios.post('http://localhost:8899/api/auth/register', data)
      alert(JSON.stringify(resp.data, null, 2))
      document.getElementById('register-form').close()
    } catch (err) {
      console.dir(err)
      const errMsg = err.response?.data.message || err.message
      alert(JSON.stringify(errMsg, null, 2))
    }
  }
  return (
    <>
      <div className="text-3xl text-center opacity-70">Create a new account
        { isSubmitting && <span className="loading loading-spinner text-info mx-2"></span> }
      </div>
      <div className="divider opacity-60"></div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <fieldset disabled={isSubmitting} className='flex flex-col gap-5 p-4 pt-3'>
          <div className="flex gap-2">
            <div className='w-full'>
              <input type="text"
                {...register('firstName')}
                placeholder='First name'
                className='input input-bordered w-full' />
              <p className="text-sm text-error">{errors.firstName?.message}</p>
            </div>
            <div className="w-full">
              <input type="text"
                {...register('lastName')}
                placeholder='Last name'
                className='input input-bordered w-full' />
              <p className="text-sm text-error">{errors.lastName?.message}</p>
            </div>
          </div>
          <div className="w-full">
            <input type="text"
              {...register('identity')}
              placeholder='Email or Phone number'
              className='input input-bordered w-full' />
            <p className="text-sm text-error">{errors.identity?.message}</p>
          </div>
          <div className="w-full">
            <input type="password"
              {...register('password')}
              placeholder='New password'
              className='input input-bordered w-full' />
            <p className="text-sm text-error">{errors.password?.message}</p>
          </div>
          <div className="w-full">
            <input type="password"
              {...register('confirmPassword')}
              placeholder='Confirm password'
              className='input input-bordered w-full' />
            <p className="text-sm text-error">{errors.confirmPassword?.message}</p>
          </div>
          <button className='btn btn-secondary text-xl text-white' >Sign up</button>
        </fieldset>
      </form>
      {/* <div className="border">
        <pre className="text-error text-xs">{JSON.stringify(errors, (k, v) => k === 'ref' ? undefined : v, 2)}</pre>
      </div> */}
    </>
  )
}

export default RegisterForm
