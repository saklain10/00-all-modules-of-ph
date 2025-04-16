import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const resultData = [
    {
        "id": 1,
        "name": "Ayaan",
        "physics": 88,
        "chemistry": 91,
        "math": 95
    },
    {
        "id": 2,
        "name": "Nishat",
        "physics": 76,
        "chemistry": 82,
        "math": 89
    },
    {
        "id": 3,
        "name": "Rafi",
        "physics": 92,
        "chemistry": 87,
        "math": 90
    },
    {
        "id": 4,
        "name": "Mou",
        "physics": 81,
        "chemistry": 79,
        "math": 84
    },
    {
        "id": 5,
        "name": "Tanvir",
        "physics": 65,
        "chemistry": 70,
        "math": 72
    },
    {
        "id": 6,
        "name": "Lamia",
        "physics": 95,
        "chemistry": 94,
        "math": 98
    },
    {
        "id": 7,
        "name": "Fahim",
        "physics": 73,
        "chemistry": 78,
        "math": 75
    },
    {
        "id": 8,
        "name": "Sadia",
        "physics": 85,
        "chemistry": 88,
        "math": 86
    },
    {
        "id": 9,
        "name": "Zidan",
        "physics": 90,
        "chemistry": 93,
        "math": 91
    },
    {
        "id": 10,
        "name": "Mehjabin",
        "physics": 68,
        "chemistry": 72,
        "math": 74
    }
]

const ResultChart = () => {
    

    return (
        <div className='m-10'>
            <h1 className='text-3xl font-bold mb-5'>Chart</h1>
            <LineChart className='border rounded-2xl p-5' width={1000} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Line dataKey={"math"} stroke = 'yellow'></Line>
                <Line dataKey={"chemistry"} stroke = 'green'></Line>
                <Line dataKey={"physics"} stroke = 'blue'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;