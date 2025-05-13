import React from 'react'

const Login = () => {
  return (
    <>
      
        {/*Sign Up Card */}

          <div className="max-w-[300px] bg-[#f1f7fe] overflow-hidden rounded-2xl text-[#010101] translate-x-[30rem] translate-y-[5rem]">

          <form className="relative flex flex-col p-8 pt-8 pb-6 gap-4 text-center">
            
              <span className="font-bold text-[1.6rem]">Login</span>
              <span className="text-base text-[#666]">Welcome back <br/>Login with your email.</span>
              
              <div className="overflow-hidden rounded-lg bg-white my-4 mb-2 w-full">
                      <input type="email" className="bg-transparent border-0 outline-none h-10 w-full border-b border-[#eee] text-[0.9rem] px-4 py-2" placeholder="Email"/>
                      <input type="password" className="bg-transparent border-0 outline-none h-10 w-full border-b border-[#eee] text-[0.9rem] px-4 py-2" placeholder="Password"/>
            
              </div>
              <button className='bg-[#0066ff] text-white border-0 rounded-full px-4 py-2.5 text-base font-semibold cursor-pointer transition-colors duration-300 hover:bg-[#005ce6]'>Sign up</button>
          </form>

          <div className="p-4 text-sm bg-[#e0ecfb] shadow-[0_-1px_0_rgba(0,0,0,0.08)]">
          <p>Don't Have an account? <a className='font-bold text-[#0066ff] transition-colors duration-300 hover:text-[#005ce6] hover:underline' href="/">Signup</a> </p>
          </div>
        
        </div>

    </>
  )
}

export default Login
