export default function Signup() {
     return (
       <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
         <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg">
           <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
           <form className="space-y-4">
             {/* Full Name */}
             <div>
               <label className="block text-gray-600 text-sm md:text-base">Full Name</label>
               <input
                 type="text"
                 className="w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                 placeholder="Enter your full name"
               />
             </div>
   
             {/* Email */}
             <div>
               <label className="block text-gray-600 text-sm md:text-base">Email</label>
               <input
                 type="email"
                 className="w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                 placeholder="Enter your email"
               />
             </div>
   
             {/* Mobile Number */}
             <div>
               <label className="block text-gray-600 text-sm md:text-base">Mobile Number</label>
               <input
                 type="tel"
                 className="w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                 placeholder="Enter your mobile number"
               />
             </div>
   
             {/* Register Button */}
             <button
               type="submit"
               className="w-full bg-blue-500 text-white p-2 md:p-3 rounded-lg hover:bg-blue-600 transition"
             >
               Register
             </button>
           </form>
         </div>
       </div>
     );
   }
   