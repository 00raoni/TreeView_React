import { useState } from 'react';

function TreeItem({ label, items }){

    const [ open, setOpen ] = useState(false)

    function toggle(){
        setOpen(!open)  
    }

    let detalhe = '';
    if ( items.length > 0)    
        detalhe =   <details>
                        <summary>{ label }</summary>                  
                    </details>            
    else    
        detalhe = label     

    return (
        <div className="item">
            <button onClick={toggle} className="buttonDisfarce">
                {detalhe}
            </button>
            <div className="list-item">
                {  open && items.map((item, i)=>(<TreeItem key={i} {...item}  />)) }
            </div>
        </div>
    )
}

export default TreeItem;