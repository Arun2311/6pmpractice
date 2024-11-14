import React, { useCallback, useMemo } from 'react'

 function HomeComp() {


    const handleadd = useMemo(()=>{

        console.log("da");
        
    },[24,3])

    const handlesub = useCallback(()=>{

        console.log("da");
        
    },[24,3])




  return (
    <div>
      <h1 className='clrchange'> HomeComp</h1>
    </div>
  )
}

export default React.memo(HomeComp)