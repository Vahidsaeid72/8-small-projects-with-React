import './SendMassage.css'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendMassage = () => {

const sendEmail = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_1d0zvia','template_dh0pa5l', e.target, '5cjiZIsknd9GU55Eq')
	.then((response) => {
        if(response.status === 200){
            toast.success("پیام با موفقیت ارسال شد",{position : "bottom-left",closeOnClick : true});
        }
	   },(err) => {
        toast.error("خطا در ارسال پیام",{position : "bottom-left",closeOnClick : true});
       }
       )
}


    return ( 
    <div className="bg-primary w-100 vh-100 d-flex align-items-center justify-content-center">
        <div className='myform text-center rounded-3'>
            <h4 className='text-center m-4'>ارسال پیام به مدیریت</h4>
            <form onSubmit={sendEmail}>
            <input name='name' className='myInput' placeholder='نام شما' type="text" />
            <input name='email' className='myInput' placeholder='ایمیل شما' type="email" />
            <textarea name='message'  className='myInput' placeholder='پیام شما' rows="3" cols="40"/>
            <button className='btn btn-success w-75 m-4' type='submit'>ارسال پیام</button>
            </form>
        </div>
        <ToastContainer />
    </div> 
    );
}
 
export default SendMassage;