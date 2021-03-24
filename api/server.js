const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 3080

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/works/:cate/:page', (req, res) => {
    let mapWorkTitle = {
        "outstanding": 'Công việc nổi bật',
        "newest": 'Công việc mới nhất',
        "latest": 'Công việc mới nhất',
    }

    titleWork = mapWorkTitle[req.params.cate];
    console.log(req.params.cate)

    listWork = listWork = [
        {
            _id: 1,
            img: 'company-logo01.jpg',
            jobname: 'Nhân viên Sale',
            companyname: 'LOCIFA',
            jobtype: 'parttime',
            joblocation: '86 Lê Trọng Tấn, Khương Mai, Thanh Xuân, Hà Nội',
            jobexpired: '20/02/2021',
            jobsalary: 10000000,
        },
        {
            _id: 2,
            img: 'company-logo02.jpg',
            jobname: 'Nhân viên Marketing',
            companyname: 'LOCIFA',
            jobtype: 'fulltime',
            joblocation: '86 Lê Trọng Tấn, Khương Mai, Thanh Xuân, Hà Nội',
            jobexpired: '11/02/2021',
            jobsalary: 8000000,
        },
        {
            _id: 3,
            img: 'company-logo01.jpg',
            jobname: 'Nhân viên Kế toán',
            companyname: 'LOCIFA',
            jobtype: 'fulltime',
            joblocation: '86 Lê Trọng Tấn, Khương Mai, Thanh Xuân, Hà Nội',
            jobexpired: '22/02/2021',
            jobsalary: 7500000,
        },
        {
            _id: 4,
            img: 'company-logo01.jpg',
            jobname: 'Nhân viên CSKH',
            companyname: 'LOCIFA',
            jobtype: 'parttime',
            joblocation: '86 Lê Trọng Tấn, Khương Mai, Thanh Xuân, Hà Nội',
            jobexpired: '15/02/2021',
            jobsalary: 6000000,
        },
        {
            _id: 5,
            img: 'company-logo01.jpg',
            jobname: 'Nhân viên HR',
            companyname: 'LOCIFA',
            jobtype: 'fulltime',
            joblocation: '86 Lê Trọng Tấn, Khương Mai, Thanh Xuân, Hà Nội',
            jobexpired: '30/02/2021',
            jobsalary: 12000000,
        },
    ]

    return res.send({listWork, titleWork})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))