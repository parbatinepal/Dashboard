import React from 'react'
import MainHeading from './Mainheading';
import {BanknotesIcon} from "@heroicons/react/24/outline"

const Transactions = [
  {
    id:"1", 
    receiver:"Person 1",
     amount:"$2000.00",
      status:"Success", 
      date:"Aug 12 2023",
    },
    {
      id:"2", 
      receiver:"Person 2",
       amount:"$3000.00",
        status:"failed", 
        date:"Aug 13 2023",
      },
      {
        id:"3", 
        receiver:"Person 3",
         amount:"$4000.00",
          status:"Processing", 
          date:"Aug 14 2023",
        },
        {
          id:"4", 
          receiver:"Person 4",
           amount:"$200.00",
            status:"failed", 
            date:"Aug 15 2023",
          },
          {
            id:"5", 
            receiver:"Person 5",
             amount:"$1500.00",
              status:"Success", 
              date:"Aug 9 2023",
            },
  ];

const Activity = () => {
  return (
    <div>
     <MainHeading title="Recent Activity"/>
     <div className="mt-4 w-full border rounded-md border-gray-200 bg-white">
      <table className="table-auto flex flex-col divide-y-2">
        <thead className="px-6 py-4 bg-indigo-50">
          <tr className="text-gray-900 font-medium grid grid-cols-5">
            <td className="col-span-2" >Transaction</td>
            <td className=" grid justify-items-end ">Amount</td>
            <td className=" grid justify-items-center">Status</td>
            <td className=" grid justify-items-end ">Date</td>
          </tr>
        </thead>
        <tbody className="flex flex-col divide-y-2">
          {Transactions.map(transaction => (
          <tr key={transaction.id} className="px-6 py-4 flex  text-sm font-light text-slate-600 grid grid-cols-5">
             <td className="text-slate-600 col-span-2 flex space-x-4 items-center">
              <div className="w-6 h-4 flex item-center">
                <BanknotesIcon/>
              </div>
              <span> payment to{transaction.receiver}</span>
              </td>
             <td className="grid justify-items-end ">
              <sapn className="text-gray-800 font-semibold">
                {transaction.amount}<span className="text-slate-600 font-light">USD</span></sapn></td>
             <td className="grid justify-items-center">
             <span className={`${
              transaction.status === "Success"
               ? "text-green-800 bg-green-200 "
               : "text-gray-800 bg-gray-200 "
             } ${
              transaction.status === "processing" &&
               "text-yellow-800 bg-yellow-200"
               }rounded-lg px-2 py-px text-xs capitalize`}>
               {transaction.status}
                </span>
               </td>
             <td className=" grid justify-items-end ">{transaction.date}</td>
          </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  )
}

export default Activity