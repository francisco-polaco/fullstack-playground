import { Box, Button, Container, CssBaseline, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [titleToCreate, setTitleToCreate] = useState();
    const [contentToCreate, setContentToCreate] = useState();
    const [createEnable, setCreateEnable] = useState(false);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        if (titleToCreate && contentToCreate) {
            setCreateEnable(true);
        } else {
            setCreateEnable(false);
        }
    }, [titleToCreate, contentToCreate]);

    function callRefresh() {
        fetch('http://localhost:8090/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => setRows(data));
    }


    useEffect(() => {
        callRefresh();
    }, []);


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Title',
            width: 150,
        },
        {
            field: 'content',
            headerName: 'Content',
            width: 150,
            editable: true,
        },
    ];


    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl">

                <Box sx={{ width: '100%', my: 2, display: 'flex' }}>
                    <TextField size='small' label="Title" variant="outlined" sx={{ mr: 1 }}
                        value={titleToCreate}
                        onChange={(ev) => {
                            const title = ev.target.value;
                            setTitleToCreate(title);
                        }}
                    />

                    <TextField size='small' label="Content" variant="outlined" sx={{ mr: 1 }}
                        value={contentToCreate}
                        onChange={(ev) => {
                            const title = ev.target.value;
                            setContentToCreate(title);
                        }} />

                    <Button size='small' label="Outlined" variant="contained" disabled={!createEnable} sx={{ mr: 1 }}
                        onClick={(ev) => {
                            fetch('http://localhost:8090/create', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    "id": "no.care",
                                    "title": titleToCreate,
                                    "content": contentToCreate,
                                })
                            })
                                .then((response) => response.json())
                                .then((data) => {
                                    setContentToCreate('');
                                    setTitleToCreate('');
                                    callRefresh();
                                });
                        }}>
                        Create note
                    </Button>
                </Box>

                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                    />
                </Box>
            </Container>
        </>
    );
}

export default App;
