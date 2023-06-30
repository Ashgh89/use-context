import { useContext } from "react";
import { MyContext } from "./ParentComponent";


const AnotherGrandChild = () => {
    // 3. consumer 
    const sth = useContext(MyContext)
    return ( <div>
            <p>i am another grand child</p>
            {sth}
    </div> );
}
 
export default AnotherGrandChild;