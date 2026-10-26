import React from 'react'
import type { Route } from './+types/contact'
import { Form } from 'react-router'

export async function action({request}:Route.ActionArgs){
  const formData =  await request.formData();
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;
  const subject = formData.get('Subject') as string;
  const email = formData.get('email') as string;
  const data = {name,email,subject,message};

  const errors:Record<string,string> ={

  }
  if(!name) errors.name = 'name is required';
  if(!email) {errors.email = 'email is required';
  }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      errors.email = 'enter email is correct fromat';
  }
  if(!subject){ errors.subject = 'subject is required';
  if(!message){ errors.message = 'message is required';
    if(Object.keys(errors).length >0){
      return {errors}
    }
  }
  return {message:'Form submitted successfully :',data};

}

}
const contact = ({actionData}:Route.ComponentProps) => {
  const errors = actionData?.errors || {};
  return (
    <div className='max-w-3xl py-8 bg-gray-900 max-auto mt-12 px-6'>
        <h2 className='font-semibold text-white mb-8 text-center text-3xl'>Contact ME</h2>
        {actionData?.message ? (
          <p className='mb-6 p-4 bg-green-700 text-green-100 text-center 
          rounded-lg border border-green-500 shadow-md'>{actionData.message}</p>
        ) : null }
        <Form className='space-y-6' method='post'>
            <div>
              <label htmlFor="Name" className="font-md text-gray-200 block text-sm">Name</label>
              <input type="text" id="name" name='name' className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 mt-1 border border-gray-700" />
              {errors.name && (
                <span className='text-red-300 text-sm'>{errors.name}</span>
              )}
            </div>
            <div>
              <label htmlFor="Email" className="font-md text-gray-200 block text-sm">Email</label>
              <input type="email" id="email" name='Email' className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 mt-1 border border-gray-700" />
            {errors.email && (
                <span className='text-red-300 text-sm'>{errors.email}</span>
              )}
            </div>
            <div>
              <label htmlFor="Subject" className="font-md text-gray-200 block text-sm">Subject</label>
              <input type="text" id="Subject" name='Subject' className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 mt-1 border border-gray-700" />
               {errors.subject && (
                <span className='text-red-300 text-sm'>{errors.subject}</span>
              )}
            </div>
            <div>
              <label htmlFor="Message" className="font-md text-gray-200 block text-sm">Message</label>
              <textarea id="Message" name='Message' className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 mt-1 border border-gray-700" />
               {errors.message && (
                <span className='text-red-300 text-sm'>{errors.message}</span>
              )}
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer">Submit</button>
        </Form>

    </div>
  )
}

export default contact