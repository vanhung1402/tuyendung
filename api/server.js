const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 3080

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../vue-app')))

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/works/:cate/:page', (req, res) => {
    let mapWorkTitle = {
        "outstanding": 'Công việc nổi bật',
        "newest": 'Công việc mới nhất',
        "latest": 'Công việc mới nhất',
    }

    titleWork = mapWorkTitle[req.params.cate];
    console.log(req.params.cate)

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
            img: 'company-logo03.jpg',
            jobname: 'Web Designer needed',
            companyname: 'Quick Studio',
            jobtype: 'fulltime',
            joblocation: 'Minh Khai, HBT, Hà Nội',
            jobexpired: '20/05/2020',
            jobsalary: 10000000,
        },
        {
            _id: 4,
            img: 'company-logo04.jpg',
            jobname: 'Web Designer needed',
            companyname: 'Quick Studio',
            jobtype: 'parttime',
            joblocation: 'Minh Khai, HBT, Hà Nội',
            jobexpired: '20/05/2020',
            jobsalary: 10000000,
        },
        {
            _id: 5,
            img: 'company-logo05.jpg',
            jobname: 'Web Designer needed',
            companyname: 'Quick Studio',
            jobtype: 'fulltime',
            joblocation: 'Minh Khai, HBT, Hà Nội',
            jobexpired: '20/05/2020',
            jobsalary: 10000000,
        },
    ]

    return res.send({listWork, titleWork})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))