import moment from 'moment'

const current = new Date();
const date = `${moment().format('dddd')},${current.getMonth()+1} ${(moment().format('MMM'))}`;

 const data = {
    day1:{
        date:'Tomorrow',
        day:'16°C',
        night:'11°C',
        image: 'Heavy Cloud'
    },
    day2:{
        date:{date},
        day:'16°C',
        night:'12°C',
        image:'LightRain'
    },
    day3:{
        date:{date},
        day:'21°C',
        night:'16°C',
        image:'Snow',
    },
    day4:{
        date:{date},
        day:'19°C',
        night:'17°C',
        image:'Thunderstorm'
    },
    day5:{
        date:{date},
        day:'14°C',
        night:'11°C',
        image:'Shower'
    }
}

export default data;