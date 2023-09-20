import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import Footer from '../Components/Footer';
import Paystack from '../Components/Paystack';
import Paypal from '../Components/Paypal';

const Form = () => {

    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    function payWithPaystack(e) {
        e.preventDefault();

        if (amount > 0 || amount !== '') {

            const paystack = new PaystackPop()
            paystack.newTransaction({
                key: 'pk_test_d92196488edd4f8e245b1cda81e7cd39b60b223b',
                email,
                amount: amount * 100,
                firstName,
                lastName,
                onSuccess(transaction) {
                    const message = `Payment Complete! Reference ${transaction.reference}`
                    alert(message)
                },
                onCancel() {
                    alert("You have Canceled the transaction")
                }
            })
        } else {
            alert("hello world")
        }

    }

    return (
        <div>
            <div className="">
                <div className="md:flex flex-col justify-center py-20 xl:py-0  ">
                    <div className="">
                        {/* <div className="xl:m-auto xl:w-[60%] md:w-[100%] md:flex gap-10 items-start space-y-5 md:space-y-0 ">
                            <div className=" w-[100%]">
                            </div>
                        </div> */}
                         <Paypal/>

                            {/* <Paystack/> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;