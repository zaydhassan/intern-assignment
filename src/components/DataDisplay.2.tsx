import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from './DataDisplay';


export const DataDisplay = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                // Transform data to match DataGrid expectations
                const transformedData = data.map(post => ({
                    id: post.id,
                    title: post.title,
                    body: post.body
                }));
                setPosts(transformedData);
            });
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={posts}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection />
        </div>
    );
};
