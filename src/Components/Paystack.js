import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';

const Paystack = () => {
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
            <form onSubmit={payWithPaystack} className=" md:px-10 px-4 md:py-16 py-10  border rounded border-[#1F332B] space-y-4 outline-none text-sm" id='paymentForm'>
                <div className="flex flex-col space-y-1">
                    <label for="email" className='text-s text-[12px] font-medium'>Email Address</label>
                    <input type="email" className="bg-[#e8f0fe] px-3 py-[10px] rounded text-[12px]" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1">
                    <label for="amount" className='text-s text-[12px] font-medium'>Amount</label>
                    <input type="number" placeholder='5000' className="bg-[#e8f0fe] px-3 py-[10px] rounded text-[12px]" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1">
                    <label for="Last-name" className='text-s text-[12px] font-medium'>FirstName</label>
                    <input type="text" className="bg-[#e8f0fe] px-3 py-[10px] rounded text-[12px]" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1">
                    <label for="Last-name" className='text-s text-[12px] font-medium'>LastName</label>
                    <input type="text" className="bg-[#e8f0fe] px-3 py-[10px] rounded text-[12px]" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="flex flex-col pt-2">
                    <button type="submit" className="bg-[#1F332B] hover:bg-[#2f483e] cursor-pointer rounded-b-lg text-white px-3 py-4 ">Pay</button>
                </div>
            </form>
        </div>
    );
};

export default Paystack;