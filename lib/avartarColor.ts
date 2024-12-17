function getContrastYIQ(hexcolor : string) {
    // Chuyển đổi mã màu hexa sang RGB
    const r = parseInt(hexcolor.slice(1, 3), 16);
    const g = parseInt(hexcolor.slice(3, 5), 16);
    const b = parseInt(hexcolor.slice(5, 7), 16);
    
    // Tính độ sáng
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Trả về màu chữ trắng hoặc đen dựa trên độ sáng
    return (yiq >= 128) ? '#000000' : '#FFFFFF'; // Đen cho nền sáng, trắng cho nền tối
}

export function stringToBackgroundColor(string : string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

function toUpperCaseFirstLetter(string : string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function stringToTextColor(string : string) {
    const backgroundColor = stringToBackgroundColor(string);
    return getContrastYIQ(backgroundColor);
}
  
  export function stringAvatar(name: string, cur? : boolean) {
    let initials;

    if (name.split(' ').length > 1) {
        initials = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`; // Tên và họ
    } else {
        initials = `${name.split(' ')[0][0]}`; // Chỉ tên
    }
    if (cur && cur) {
        return {
            sx: {
                bgcolor: stringToBackgroundColor(name),
                color: stringToTextColor(name),
                fontWeight: 'bold',
                height: 160,
                width : 160,
                fontSize: 80
              },
            children: toUpperCaseFirstLetter(initials), 
        }
    }
    return {
      sx: {
        bgcolor: stringToBackgroundColor(name),
        color: stringToTextColor(name),
        fontWeight: 'bold'
      },
      children: toUpperCaseFirstLetter(initials),
    };
  }