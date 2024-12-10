import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
interface Props {
    rate : number
}

const RateCircle = ({rate} : Props) => {
    const persen = convertNumberFormat(rate)
    const color = setColor(persen)
    return (
        <div className='bg-white rounded-full p-0.5 hover:scale-110 hover:z-10 duration-200'>
        <CircularProgress size="lg" determinate 
        value={persen}
        color= 'primary'
        >
          <Typography>{persen}%</Typography>
        </CircularProgress>
        </div>
    )
}

export default RateCircle

function convertNumberFormat(input: number): number {
    // Nhân với 10 và làm tròn
    const multiplied = input * 10;
    
    // Chuyển đổi thành chuỗi và thay dấu chấm bằng dấu phẩy
    return Math.floor(multiplied);
}

function setColor (rate : number) : string {
    if (rate > 50) {
        return "neutral"
    } else {
        return "primary"
    }
}