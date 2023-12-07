import { useEffect  , useState } from "react"

function getWindowSize(){
    
    const {innerWidth , innerHeight} = window;
    return { innerWidth , innerHeight};
}

export function currentWindowSize(){
    const [windowSize  , setWindowSize] = useState(getWindowSize());

    // console.log(getWindowSize.innerHeight)
    useEffect(()=>{
        function windowResize(){
            setWindowSize(getWindowSize);
        }

        window.addEventListener('resize' ,windowResize)

        return () => {
            window.removeEventListener('resize' , windowResize)
        }

        
    },[])


    return windowSize
}