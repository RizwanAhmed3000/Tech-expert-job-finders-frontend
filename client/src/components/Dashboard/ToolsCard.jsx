import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';

const ToolsCard = ({heading, para}) => {
    return (
        <div className='wrapper px-[2rem] py-[3rem] bg-white min-w-[284px] w-[30%] rounded-[5px] flex gap-5 drop-shadow-md mb-[1rem]'>
            <div className="icon">
                <DescriptionIcon className='text-theme-red' style={{fontSize: "30px"}}/>
            </div>
            <div className="textCon flex flex-col gap-3">
                <h1 className="heading font-bold text-[1.6rem]">
                    {heading} 
                </h1>
                <p className='text-[1.2rem]'>
                    {para}
                </p>
                <button className='bg-theme-red py-[0.5rem] px-[1rem] text-white rounded-[3px] w-fit text-[1.1rem]'>
                    Click Here
                </button>
            </div>
        </div>
    )
}

export default ToolsCard