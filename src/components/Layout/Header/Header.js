import React , {useState} from 'react';
import Background from "../../Elements/Background/Background";
import Images from "../../../assets/img/Images/Images";
import {Link} from "react-router-dom";

function Header(props) {
    const [toggle , setToggle] = useState(false);
    const [lang, setLang] = useState("AZ");
    const [select , setSelect] = useState(false);

    const changeLang = (lang) => {
        setLang(lang);
        setSelect(false);
    };

    const menulist = [
        {
            name: 'Menu 1',
            link: '/'
        },
        {
            name: 'Menu 2',
            link: '/'
        }
    ]

    const langlist = [
        {name: 'AZ'},
        {name: 'TR'},
        {name: 'EN'},
        {name: 'RU'},
    ]

    return (
        <>
            <div className="heading animated slideInDown justify-content-between align-items-center d-flex">
               <div className="mr-auto animated zoomIn align-items-center d-flex">
                   <div className="logo mr-5 h2 text-white" >LOGO</div>
                   <div className="buttons d-md-block d-none mx-3">
                       {menulist.map((m, index)=> (<button className={'btn btn-lg'} key={index}><Link className={'text-white'} to={m.link}>{m.name}</Link></button>))}
                       <button onClick={()=>{setSelect(!select)}} className={'btn btn-lg'}>{lang}</button>
                       {select &&
                           <div className="lang-buttons">
                               {
                                   langlist.map((l, i)=>(
                                     <>
                                         {lang !== l.name &&
                                             <button key={i}  onClick={() => changeLang(l.name)} className={'btn btn-lg'}><span>{l.name}</span></button>
                                         }
                                     </>
                                   ))
                               }
                           </div>
                       }
                   </div>
               </div>
                <div>
                    <button className={'btn animated zoomIn  d-md-block d-none btn-lg'}>Sign in</button>
                    <img onClick={()=>{setToggle(true)}} className={'d-md-none animated zoomIn d-block'} src={Images.toggle} alt=""/>
                </div>
            </div>

            <div className={`sidebar ${toggle ? 'show': ''}`}>
                <div className="mt-5">
                    {menulist.map((m, index)=> (<Link className={'d-block  mt-2  text-white'} to={m.link}>{m.name}</Link>))}
                </div>
            </div>

            {/*overlay on sidebar open*/}
            {toggle && <div onClick={()=>{setToggle(false)}} className="animated fadeIn overlay"></div>}
            {/*mainbackground*/}

            <Background src={Images.mainbg} height={'55vh'} />
        </>
    );
}


export default Header;
