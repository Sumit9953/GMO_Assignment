import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { DataGrid } from '@mui/x-data-grid';


interface TodoItem {
    completed: boolean
    id: number
    title: string
    userId : number
}

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 }
  ]


function Component1 () {

  const [item , setItem] = useState<TodoItem[]>([]);

  useEffect(() => {
    getItem ()
  }, [])

  async function getItem () {
    axios
    .get<TodoItem[]>("https://jsonplaceholder.typicode.com/posts")
    .then((res) => setItem(res.data))

  }

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid   
        rows={item}
        columns={columns}

        sx={{
            
            boxShadow: 2,
            border: 2,
            backgroundColor: 'black',
            color:'textPrimary',
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}

          initialState={{
            pagination: {
              paginationModel: { pageSize: 25, page: 0 },
            },
          }}
      />
    </div>
  )
}

export default Component1