'use client'
import { useEffect, useState } from "react"


function Home() {

  let [length ,setLenght] = new useState(4); 
  let [Alphabets ,setAlphabets ]  = new useState("ABCDEFGHIJKLMNOPQRSTuvWXYZ");
  let [password,SetPassword] = new useState("");
  let [includeNumber,SetincludeNumber] = new useState(false);
  let [includeSymbol,SetincludeSymbol] = new useState(false);


  const generatePassword=() =>{

    password = "";
    if(includeNumber && includeSymbol ) {
      setAlphabets(Alphabets="ABCDEFGHIJKLMNOPQRSTuvWXYZ1234567890!@#$%^&*()");
    }

    else if(includeNumber){
      setAlphabets(Alphabets="ABCDEFGHIJKLMNOPQRSTuvWXYZ1234567890")
    }
    else{
      setAlphabets(Alphabets="ABCDEFGHIJKLMNOPQRSTuvWXYZ")

    }
    for (let index = 1; index <= length; index++) {
     
      console.log(Alphabets);
       let randomNumber =  Math.floor(Math.random() * Alphabets.length) + 1;
       password += Alphabets[randomNumber];
      
    }

    SetPassword(password)

    console.log("password" ,password)
    
    

  }

  useEffect(()=>{
    generatePassword()
  },[length ,includeNumber,includeSymbol])




  return (

    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="password-generator bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Password Generator</h2>
        <div className="flex items-center mb-4">
            <input 

                value={password}
                type="text" 
                readOnly 
                className="w-full p-2 border rounded-l-md" 
            />
            <button 
                className="bg-gray-300 text-gray-700 p-2 rounded-r-md hover:bg-gray-400"
            >
                Copy
            </button>
        </div>
        <div className="controls space-y-4">
            <label className="flex items-center justify-between">
                <span>Length:</span>
                <span>{length}</span>
               
                <input 
                    type="range" 
                    min="4" 
                    max="20" 
                    className="ml-2"
                    onChange={(e)=> setLenght(  e.target.value) }
                />
         
            </label>
            <label className="flex items-center">
                <input 
                    type="checkbox" 
                    className="mr-2"
                    value={includeNumber}
                    onChange={()=> SetincludeNumber(!includeNumber)}
                />
                Include Numbers
            </label>
            <label className="flex items-center">
                <input 
                    type="checkbox" 
                    className="mr-2"
                    value={includeSymbol}
                    onChange={()=> SetincludeSymbol(!includeSymbol)}
                />
                Include Symbols
            </label>
            <button 
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                onClick={generatePassword}
            >
                Generate Password
            </button>
        </div>
    </div>
</div>

    </>
  )
}

export default Home
