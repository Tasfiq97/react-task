import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [data,setData]=useState([]);
    const [isToggle,setIsToggle]=useState("");
    const [isCompleted,setIsCompleted]=useState(false);
   const [user,setUser]=useState({ name:"",status:""});

   const handleOnChange=(e)=>{
       setUser({...user,
       [e.target.name]:e.target.value
    })
   }
   let newData=data.filter(dt=>dt.status===isToggle);
    const handleClick = (val) =>{
       if(val==="active"){
        setIsToggle("active");
     
       }
       if(val==="all"){
        setIsToggle("")
        
       }
       if(val==="completed"){
       setIsToggle("completed");
       }

    }

  let {name,status}=user;
const handleSubmit=(e)=>{
    e.preventDefault()
     setData([...data,{name,status}])
    //  console.log(user);
    setUser({name:"",status:""});
    
    // console.log(user);
}

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form  className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input autoComplete='off' name="name" value={user.name} onChange={handleOnChange} type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input autoComplete='off' name='status' value={user.status} onChange={handleOnChange}  type="text" className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button onClick={handleSubmit}  type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                        <td></td>
                        <td></td>
                        </tr>
                        </thead>
                        <tbody>
                        { isToggle==="active" ||isToggle==="completed" ?
                         newData?.map(dt=>(
                                <tr>
                                <td>{dt.name}</td>
                                <td>{dt.status}</td>
                                </tr>
                         ))
                         :
                         data?.map(dt=>(
                             <tr>
                                <td>{dt.name}</td>
                                <td>{dt.status}</td>
                            </tr>
                         ))
                         
                         
                        }
                      
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;