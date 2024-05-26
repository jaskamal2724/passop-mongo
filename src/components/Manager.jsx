import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
// import generator from 'generate-password';
import { randomPassword } from 'secure-random-password';

const Manager = () => {
    const [showpassword, setShowPassword] = useState(true);
    const [showpassword1, setShowPassword1] = useState(true);
    const [passarray, setPassarray] = useState([]);
    const handleShowPassword = () => setShowPassword(!showpassword);
    const handleShowPassword1 = () => setShowPassword1(!showpassword1);
    const [form, setForm] = useState({ site: '', username: "", password: "" });
    const [Editid, setEditid] = useState(null);

    const getpasswords = async() => {
        let req = await  fetch("http://localhost:3000/")
        let passwords = await req.json()
       
        setPassarray((passwords));
        
        console.log(passwords)
    }

    useEffect(() => {
        getpasswords()

    }, []);

    const savepassword = async () => {

        if (!form.site || !form.username || !form.password) {
            toast('Please fill in all fields', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        toast('Saved Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
        const newPass = { ...form, id: uuidv4() };
        setPassarray([...passarray, newPass]);

        await fetch('http://localhost:3000/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPass)
        });
        console.log(passarray);
        setForm({ site: '', username: '', password: '' });
    }

    const deletepassword = async (id) => {
        toast('Deleted Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
        console.log("Deleting password with id : ", id);
        let c = confirm("Are you sure you want to delete this password?");
        if (c) {
            const filteredarrray = passarray.filter((item) => item.id !== id);
            setPassarray(filteredarrray);

           await fetch('http://localhost:3000/', {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id })
            });
        }
    }

    const editpassword = async (id) => {
        console.log("Editing password with id : ", id);
        const passwordtoedit = passarray.filter((item) => item.id === id);
        setForm({ site: passwordtoedit[0].site, username: passwordtoedit[0].username, password: passwordtoedit[0].password });
        setEditid(id);

        const filteredarrray = passarray.filter((item) => item.id !== id);
        setPassarray(filteredarrray);
        // localStorage.setItem('passwords', JSON.stringify(filteredarrray));
        let res = await fetch('http://localhost:3000/',{method:"POST",headers:{"Content-Type":"applicatio/json"},body:JSON.stringify({ ...form, id: uuidv4() })})
    }

    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        toast('Copied to Clipboard', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
    }

    const generateStrongPassword = () => {
        return randomPassword({
            length: 12,
            characters: [
                { characters: 'abcdefghijklmnopqrstuvwxyz', exactly: 1 },
                { characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', exactly: 1 },
                { characters: '0123456789', exactly: 1 },
                { characters: '!@#$%^&*()', exactly: 1 },
                { characters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()', length: 8 },
            ],
        });
    };


    const handlepassword = () => {
        const newpass = generateStrongPassword();
        setForm({ ...form, password: newpass })
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className='text-3xl'>
                            <span className='text-purple-700'> &lt;</span>
                            <span>Pass</span>
                            <span className='text-purple-700'>OP/&gt;</span>
                            <lord-icon
                                src="https://cdn.lordicon.com/kpustzzg.json"
                                trigger="hover"
                                style={{ "width": "50px", "height": "50px", }}>
                            </lord-icon>
                        </h1>
                        <p>Never Forget, Always Secure</p>
                    </div>


                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">

                        <div className="relative flex-grow w-full ">
                            <label htmlFor="full-name" className="  leading-7 text-sm text-gray-600">Web URL</label>
                            <input onChange={handlechange} value={form.site} type="email" id="full-name" name="site" className="border-2 border-blue-500 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='xyz.com' />
                        </div>

                        <div className="relative flex-grow w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Username</label>
                            <input onChange={handlechange} value={form.username} type="text" id="username" name="username" className="border-2 border-blue-500  w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='John' />
                        </div>

                        <div className="relative flex-grow w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Password</label>
                            <FontAwesomeIcon className='mx-2 text-purple-500' icon={(showpassword) ? faEye : faEyeSlash} onClick={handleShowPassword} />
                            <input onChange={handlechange} value={form.password} type={showpassword ? 'password' : 'text'} id="email" name="password" className="border-2 border-blue-500  w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                    </div>
                    <div className='container py-10 px-10 mx-0 min-w-full flex  justify-center  items-center'>

                        <button onClick={savepassword} className="btn1 text-white bg-indigo-500 border-0 py-2 px-8 mx-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">

                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover"
                                style={{ "width": "30px", "height": "30px" }}>
                            </lord-icon>
                            Save Password
                        </button>

                        <button onClick={handlepassword} className="btn1 text-white bg-indigo-500 border-0 py-2 px-8 mx-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <lord-icon
                                src="https://cdn.lordicon.com/ifsxxxte.json"
                                trigger="hover"
                                style={{ "width": "30px", "height": "30px" }}>
                            </lord-icon>
                            Generate Password
                        </button>


                    </div>

                </div>

            </section>


            <div >
                <div>
                    <h1 className='text-center ph text-purple-700'>Your Passwords</h1>
                    {passarray.length === 0 && <div>No Passwords</div>}
                </div>

                {passarray.length != 0 &&
                    <table className='mx-auto w-2/3 overflowhidden'>
                        <thead className='rounded-lg'>
                            <tr className="rounded-lg">
                                <th className='rounded-lg'> Web URL</th>
                                <th>Username</th>
                                <th>Password <FontAwesomeIcon className=' mx-1 text-purple-500' icon={(showpassword1) ? faEye : faEyeSlash} onClick={handleShowPassword1} /> </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {passarray.map((item) => {
                                return <tr key={item.id}>
                                    <td > <a href={item.site} target='_blank'>{item.site}</a>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                            trigger="hover"
                                            style={{ "width": "25px", "height": "25px", "margin": "0px 20px" }} onClick={() => copyText(item.site)}>
                                        </lord-icon>
                                    </td>

                                    <td>{item.username}
                                        <lord-icon
                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                            trigger="hover"
                                            style={{ "width": "25px", "height": "25px", "margin": "0px 20px" }} onClick={() => copyText(item.username)}>
                                        </lord-icon>
                                    </td>

                                    <td id="passwordField">{showpassword1 ? '*'.repeat(item.password.length) : item.password}


                                        <lord-icon
                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                            trigger="hover"
                                            style={{ "width": "25px", "height": "25px", "margin": "0px 20px" }} onClick={() => copyText(item.password)}>
                                        </lord-icon>

                                    </td>

                                    <td>
                                        <FontAwesomeIcon className='ac' icon={faPenToSquare} onClick={() => { editpassword(item.id) }} />
                                        <FontAwesomeIcon className='ac' icon={faTrash} onClick={() => { deletepassword(item.id) }} />

                                    </td>
                                </tr>
                            })}


                        </tbody>
                    </table>}
            </div>

        </>
    )
}

export default Manager