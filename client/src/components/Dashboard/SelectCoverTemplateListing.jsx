import React from 'react';
import DashResumeCard from './ResumeCard';
import cvImg2 from "../../assets/templates/cv-template-02.png";
import cvImg3 from "../../assets/templates/cv-template-03.png";
import websiteimg from "../../assets/website-template/WEBSITE.jpg"
import SelectTempCard from './SelectTempCard';
import SelectCoverTempCard from './SelectCoverTempCard';
function SelectCoverTemplateListing({ activeTab }) {
    console.log(activeTab)
    const free = [{
       name:'NOVA COVER LETTTER',
        src: cvImg2
    },
  
    
  
  
    ]
    const premium = [{
       name:"Rizwan Cover Letter" ,
        src: cvImg3,
        amount: "4$"
    },
    {
        name:"Salik Cover Letter",
        amount: "4$",
        src: cvImg3
    },
    {
       name:"Hassan Cover Letter",
        src: cvImg3,
        amount: "4$"
    },
    {
        name:"Hamza Cover Letter",
         src: cvImg3,
         amount: "4$"
     },
     {
        name:"Nabeel Cover Letter",
         src: cvImg3,
         amount: "4$"
     },
     {
        name:"Ragheez Cover Letter",
         src: cvImg3,
         amount: "4$"
     },
     {
        name:"Ali Cover Letter",
         src: cvImg3,
         amount: "4$"
     },
   
    ]
    const my = [{
    }
    ]
    return (

        <div className='grid grid-cols-3 place-items-center' >
            {activeTab == 'free' ? free.map((data, i) => (
                <SelectCoverTempCard  data={data} key={i} />

            )

            ) : activeTab ==  "premium" ? premium.map((data, i) => (
                <SelectCoverTempCard data={data} key={i} />

            )) : activeTab ==  "my" && my.map((data, i) => (
                <SelectCoverTempCard  data={data} key={i} />

            ))
            }

        </div>



    )
}

export default SelectCoverTemplateListing