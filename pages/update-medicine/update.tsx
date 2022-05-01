import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '@mui/material/Alert';


const updateMedicine = ({medData} : any)  => {

    const [name, setName] = useState<string>(medData.medicine_name);
    const [mrp, setMrp] = useState<string>(medData.mrp);
    const [alternative, setAlternative] = useState<string>(medData.alternative_medicines);
    const [uses, setUses] = useState<string>(medData.uses);
    const [prescription, setPresciption] = useState<string>(medData.prescription);
    const [sellType, setSellType] = useState<string>(medData.type_of_sell);
    const [howToUse, setHowToUse] = useState<string>(medData.how_to_use);
    const [chemicalClass, setChemicalClass] = useState<string>(medData.chemical_class);
    const [manufracturer, setManufracturers] = useState<string>(medData.manufacturer);
    const [salt, setSalt] = useState<string>(medData.salt);
    const [therapeutic, setTherapeutic] = useState<string>(medData.therapeutic_class);
    const [sideEffects, setSideEffects] = useState<string>(medData.side_effects);
    const [habitForming, setHabitForming] = useState<string>(medData.habit_forming);
    const [actionClass, setActionClass] = useState<string>(medData.action_class);
    const [password, setPassword] = useState<string>('');
    const [success, setSuccess] = useState<boolean | undefined>(false);
    const [fail, setFail] = useState<boolean>(false);

    console.log(medData.medicine_name);
    

    const updateMedData = async() => {
        if(password === main_password){
            const res = await fetch("https://8g34ra4qq2.execute-api.ap-south-1.amazonaws.com/dev/med", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "medicine_name": name,
                    "mrp" : mrp,
                    "alternative_medicines" : alternative,
                    "uses" : uses,
                    "prescription" : prescription,
                    "type_of_sell" : sellType,
                    "how_to_use" : howToUse,
                    "chemical_class" : chemicalClass,
                    "manufacturer" : manufracturer,
                    "salt" : salt,
                    "therapeutic_class" : therapeutic,
                    "side_effects" : sideEffects,
                    "habit_forming" : habitForming,
                    "action_class" : actionClass
                }),
            })
            const makeSetSuccessFalse = () => {
                setSuccess(false);
            }
            setSuccess(true);
            const timeOut = setTimeout(makeSetSuccessFalse, 5000)
        }else{
            const makeSetFailFalse = () => {
                setFail(false);
            }
            setFail(true);
            const timeOut = setTimeout(makeSetFailFalse, 5000)
            return  {"error" : "Authentication failed"}
        }
    }

    const main_password = "sayan@2003"
      
    return (
        <>
            <Navbar />
            <div className="mt-16">
                <div className="w-10/12 mx-auto">
                    <p>Name</p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setName(e.target.value)} value={name}/>
                    <p>MRP (Maximum Retail Price)</p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setMrp(e.target.value)} value={mrp}/>
                    <p>Alternative Medicines <span className="text-xs">(use comma ',' to seperate usese and make sure to add a comma at the end)</span></p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setAlternative(e.target.value)} value={alternative+','}/>
                    <p>Uses <span className="text-xs">(use comma ',' to seperate usese and make sure to add a comma at the end)</span></p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setUses(e.target.value)} value={uses+','}/>
                    <p>Prescription</p>
                    <select className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setPresciption(e.target.value)} value={prescription}>
                        <option value="">Select an option</option>
                        <option value="Prescription required">Required</option>
                        <option value="Prescription not required">Not Required</option>
                    </select>
                    <p>Type of Sell</p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setSellType(e.target.value)} value={sellType}/>
                    <p>How to Use</p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setHowToUse(e.target.value)} value={howToUse}/>
                    <p>Chemical Classes</p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setChemicalClass(e.target.value)} value={chemicalClass}/>
                    <p>Manufracturer</p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setManufracturers(e.target.value)}value={manufracturer}/>
                    <p>Salt</p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setSalt(e.target.value)} value={salt}/>
                    <p>Therapeutic Class</p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setTherapeutic(e.target.value)} value={therapeutic}/>
                    <p>Side Effects <span className="text-xs">(use comma ',' to seperate usese and make sure to add a comma at the end)</span></p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setSideEffects(e.target.value)} value={sideEffects+','}/>
                    <p>Habit Forming</p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setHabitForming(e.target.value)} value={habitForming}/>
                    <p>Action Class</p>
                    <input type="text" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setActionClass(e.target.value)} value={actionClass}/>
                    <p>Password</p>
                    <input type="password" className="w-full px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <div className="flex">
                <button className="mt-8 bg-purple-400 px-6 py-2 mb-20 rounded-lg text-white hover:bg-purple-500 transition-all" onClick={()=> {updateMedData()}}>Save</button>                
                </div>
                {success ? (
                          <Alert variant="filled" severity="success">
                          Medicine Successfully Updated
                        </Alert>
                ) : (null)}

                {fail ? (
                          <Alert variant="filled" severity="error">
                          Authentication error.
                        </Alert>
                ) : (null)}
                </div>
            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context : any) {
    const { query } = context;
    const{ medName } = query; 
    console.log(medName)
    const res = await fetch(`https://8g34ra4qq2.execute-api.ap-south-1.amazonaws.com/dev/med/${medName}?user_id=1234`);
    const data = await res.json(); 
    
    return {
      props: {medData : data}, // will be passed to the page component as props
    }
  }

export default updateMedicine