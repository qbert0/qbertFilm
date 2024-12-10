'use client'
import Slider from '@mui/material/Slider';
import { TiTimes } from 'react-icons/ti';

interface Props {
    proge : number
    name : string
    setProge : (proge : number) => void
}

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 30,
        label: '30',
    },
    {
        value: 40,
        label: '40',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 60,
        label: '60',
    },
    {
        value: 70,
        label: '70',
    },
    {
        value: 80,
        label: '80',
    },
    {
        value: 90,
        label: '90',
    },
    {
        value: 100,
        label: '100',
    },

  ];


const VibeProgress = ({proge, name, setProge} : Props) => {
    
    function valueLabelFormat(value: number) {
        const units = ['Dumpster File', 'Absolute Trash', 'Garbage', 'Truly Bad', 'Not Good', 'Passable', "It's Alright", 'Pretty Decent', 'Really Good', 'Greatness', 'Champion'];
      
        let unitIndex = value/10;
        setProge(value)
        return `${units[unitIndex]}`;
    }
    return (
        <div className='w-full py-1'>
            <div className="flex flex-col">
                <div className=' text-2xl font-bold text-black'>Rating</div>
                <div className="text-base text-black/60">What did you think of {name}</div>
            </div>
            <div className='px-4 py-3 text-green-400'>
                <Slider
                    className='w-full h-1/2'
                    aria-label="Temperature"
                    defaultValue={proge}
                    valueLabelDisplay="auto"
                    shiftStep={0}
                    step={10}
                    size='medium'
                    marks={marks}
                    min={0}
                    max={100}
                    color={'primary'}
                    valueLabelFormat={valueLabelFormat}
                />
            </div>
            
        </div>
    )
}

export default VibeProgress