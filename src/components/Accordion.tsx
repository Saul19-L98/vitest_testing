import {useState} from 'react'

interface AccordionProps{
    title:string,
    children:React.ReactNode,
}

function Accordion({title,children}:AccordionProps){
    
    const [open,setOpen] = useState(false);

    return(
        <div>
            <h3>{title}</h3>
            <div>
                <button onClick={() => setOpen(!open)}>
                    {open ? "Close" : "Open"}
                </button>
            </div>
            {open && <div>{children}</div>}
        </div>
    )
}

export default Accordion;