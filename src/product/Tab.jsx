import React, { useState } from 'react'

function Tab() {
  const [tab, setTab] = useState(0)

  return (
    <>
      <section>
        <div onClick={()=>setTab(0)}>ss</div>
        <div onClick={()=>setTab(1)}>dd</div>
        <div onClick={()=>setTab(2)}>ff</div>
      </section>
      <section>
        <TabContents tab={tab}/>
        {/* {
          tab === 0 && <div>tab1</div>
        }
        {
          tab === 1 && <div>tab2</div>
        }
        {
          tab === 2 && <div>tab3</div>
        } */}
      </section>
    </>
  )
  
}
const TabContents = ({tab}) => {
  if(tab === 0){
    return (<div>tab1</div>)
  }else if(tab === 1){
    return <div>tab2</div>
  }else if(tab === 2){
    return <div>tab3</div>
  }
}

export default Tab