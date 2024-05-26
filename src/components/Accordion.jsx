import React, { useEffect, useState } from 'react'
import { Collapse } from 'antd';
import citiesCultureTips from '../data/cultures';

const Accordion = ({pointsOfInterest,events,travelInfo,cityName}) => {
    const [cityTips, setcityTips] = useState([])
const items = [
{
  key: '1',
  label: 'Points Of Interest',
  children: <div className='flex gap-4 items-center'>
    {pointsOfInterest.map((item,index)=>(<div className='text-Mred' key={`points-${index}`} item>
        {item}
        </div>))}
  </div>,
},
{
  key: '2',
  label: 'Events',
  children: <div className='flex gap-4 items-center'>
  {events.map((item,index)=>(<div className='text-Mred' key={`events-${index}`} item>
      {item}
      </div>))}
</div>,
},
{
  key: '3',
  label: 'travel Infos',
  children:<div className='flex flex-col gap-5'>
   <div className='flex gap-4 items-center'><span className='w-[20%]'> transportation </span>:
  {travelInfo.transportation.map((item,index)=>(<div className='text-Mred' key={`travel-${index}`} item>
      {item}
      </div>))}
</div>
<div className='flex gap-4 items-center'> <span className='w-[20%]'> accommodation </span>:
{travelInfo.accommodation.map((item,index)=>(<div className='text-Mred' key={`travel-${index}`} item>
    {item}
    </div>))}
</div>
<div className='flex gap-4 items-center'> <span className='w-[20%]'> restaurants </span> :
  {travelInfo.restaurants.map((item,index)=>(<div className='text-Mred' key={`travel-${index}`} item>
      {item}
      </div>))}
</div>
</div>

},{
    key: '4',
    label: 'Culture Tips',
    children:<div className='flex flex-col gap-5'>
     <div className='flex flex-col text-Mred gap-4'>
    {cityTips.map((item,index)=>(<div key={index}>{item}</div>))}
  </div>
  </div>
  ,
  },
];

useEffect(()=>{
console.log(citiesCultureTips);
const cityCultureTips = citiesCultureTips.find(city => city.name === cityName);
const mappedList =  cityCultureTips.culturalTips.map(tip => tip)
console.log(mappedList)
if(mappedList) setcityTips(mappedList)
},[])
  return (
    <div className='w-full '>
        <Collapse accordion items={items} className='text-2xl bg-white  border border-4 border-Mred'/>
    </div>
  )
}

export default Accordion

