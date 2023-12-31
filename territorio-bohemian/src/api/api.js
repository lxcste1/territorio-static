import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Api() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('/db/mock.json').then((res) => setServices(res.data)).catch((err) => console.log(err));
    }, [])

    return services
}
