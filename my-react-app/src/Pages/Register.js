import React from 'react'
import { Form, Input,Button } from 'antd'
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoading,hideLoading } from '../Redux/alertSlice';


function Register() {

  const dispatch = useDispatch();     
  const navigate = useNavigate();

  const onFinish = async(values) => {
    try {
      dispatch(showLoading()); 
      const response = await axios.post('/api/user/register',values);

      dispatch(hideLoading());

      if(response?.data?.success){
        toast.success(response.data.message);
        toast("Redirecting to login page .... ");
        setTimeout(() => navigate("/login"), 2000);
      }
      else{
        toast.error(response.data.message);
      }
      
    } catch (error) {
      dispatch(hideLoading());
      toast.error('something went wrong');
    }
  };

  return (
    <div className='authentication h-screen  flex justify-center items-center translate-x-20 '>

      <div className='authentication-form card shadow-2xl w-[350px] p-5 drop-shadow-lg rounded '>

        <h1 className='card-tittle flex justify-evenly text-2xl font-bold'>Welcome</h1>

        <Form className=' space-y-14 ' onFinish={onFinish}>

          <Form.Item layout='vertical' label='Name:' className=' font-semibold space-y-4' name='name'>
            <Input placeholder='Name' className=' hover:border-gray-600 font-normal rounded'></Input>
          </Form.Item>

          <Form.Item layout='vertical' label='Email:' className=' font-semibold' name='email'>
            <Input placeholder='Email' className=' hover:border-gray-600 font-normal rounded '></Input>
          </Form.Item>

          <Form.Item layout='vertical' label='Password:' className=' font-semibold' name='password'>
            <Input placeholder='Password' className=' hover:border-gray-600 font-normal rounded' type='password'></Input>
          </Form.Item>

          <Button type="primary" htmlType='submit' className=' hover:border-gray-600 w-full font-[700] border-none'>Register</Button>

          <Link to='/login' className=' hover:underline my-5'>Login your account</Link>

        </Form>

      </div>

    </div>
  )
}

export default Register;
