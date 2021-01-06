const express = require('express')
const router = express.Router()

// index
router.get('/', (req, res) => {
    res.send({id: '17A10010043', name: 'Vanhung'})
})

router.get('/works/:workType', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    
    listWork = [
        {
            _id: 1,
            img: 'company-logo01.jpg',
            jobname: 'Web Designer needed',
            companyname: 'Quick Studio',
            jobtype: 'parttime',
            joblocation: 'Minh Khai, HBT, Hà Nội',
            jobexpired: '20/05/2020',
            jobsalary: 10000000,
        },
        {
            _id: 2,
            img: 'company-logo02.jpg',
            jobname: 'Web Designer needed',
            companyname: 'Quick Studio',
            jobtype: 'fulltime',
            joblocation: 'Minh Khai, HBT, Hà Nội',
            jobexpired: '20/05/2020',
            jobsalary: 10000000,
        },
        {
            _id: 3,
            img: 'company-logo01.jpg',
            jobname: 'Web Designer needed',
            companyname: 'Quick Studio',
            jobtype: 'fulltime',
            joblocation: 'Minh Khai, HBT, Hà Nội',
            jobexpired: '20/05/2020',
            jobsalary: 10000000,
        },
        {
            _id: 4,
            img: 'company-logo01.jpg',
            jobname: 'Web Designer needed',
            companyname: 'Quick Studio',
            jobtype: 'parttime',
            joblocation: 'Minh Khai, HBT, Hà Nội',
            jobexpired: '20/05/2020',
            jobsalary: 10000000,
        },
        {
            _id: 5,
            img: 'company-logo01.jpg',
            jobname: 'Web Designer needed',
            companyname: 'Quick Studio',
            jobtype: 'fulltime',
            joblocation: 'Minh Khai, HBT, Hà Nội',
            jobexpired: '20/05/2020',
            jobsalary: 10000000,
        },
    ]

    return res.send(listWork)
})

module.exports = router