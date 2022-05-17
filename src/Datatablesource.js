export const userColumns = [
    {
        field: 'id', headerName: 'ID', width: 70
    },
    {
        field: 'user', headerName: 'User', width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: 'email', headerName: 'Email', width: 230
    },
    {
        field: 'age', headerName: 'Age', width: 100
    },
    {
        field: 'status', headerName: 'Status', width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]
export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: "  https://i.ibb.co/py2G4ZB/6458905-sd.jpg",
        status: 'Active',
        email: 'snow23@gmail.com',
        age: 23
    },
    {
        id: 2,
        username: 'Jamir',
        img: "  https://i.ibb.co/py2G4ZB/6458905-sd.jpg",
        status: 'Pending',
        email: 'jamir23@gmail.com',
        age: 25
    }, {
        id: 3,
        username: 'Rohit',
        img: "  https://i.ibb.co/py2G4ZB/6458905-sd.jpg",
        status: 'Passive',
        email: 'rohit23@gmail.com',
        age: 28
    }, {
        id: 4,
        username: 'Araf',
        img: "  https://i.ibb.co/py2G4ZB/6458905-sd.jpg",
        status: 'Active',
        email: 'araf23@gmail.com',
        age: 29
    }, {
        id: 5,
        username: 'Sajid',
        img: "  https://i.ibb.co/py2G4ZB/6458905-sd.jpg",
        status: 'Active',
        email: 'sajid23@gmail.com',
        age: 39
    },
]