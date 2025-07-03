import React from 'react'
import table from '../../assets/Images/Granite square side table 1.png'
import sofa from '../../assets/Images/Cloud sofa three seater + ottoman_3 1.png'
import './sideTable.css'
import { useNavigate } from 'react-router-dom'
const SideTable = () => {
    const navigate = useNavigate();
        const viewMoreBtn = () =>{
            navigate('/viewMore')
        }
  return (
    <>
    <div className='SideTables'>
        <div className='margine'>
            <div className='sidetable'>
            <div>
                <img className='table' src={table} alt="granit square table" />
            </div>
            <h3>Side Table</h3>
            <button className='Viewbtn' onClick={viewMoreBtn}>View More</button>
        </div>
        <div className='sidetable'>
            <div>
                <img className='sofa' src={sofa} alt="cloud sofa" />
            </div>
            <h3>Side Table</h3>
             <button className='Viewbtn' onClick={viewMoreBtn}>View More</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default SideTable