import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"

import { PieChart, Pie, Cell,} from "recharts"
import VideosAndSubscribers from '../VideosAndSubscribers'
import './index.css'


const data = [
    {
      id: 1,
      admin_name: "Sandeep",
      no_of_videos: 4000,
      subscribers: 10000,
    },
    {
      id: 2,
      admin_name: "Madhu",
      no_of_videos: 1500,
      subscribers: 50000,
    },
    {
      id: 3,
      admin_name: "Rahul",
      no_of_videos: 5000,
      subscribers: 30000,
    },
    {
      id: 4,
      admin_name: "Ayaansh",
      no_of_videos: 3000,
      subscribers: 40000,
    },
  ]

const Home = () => {

    const DataFormatter = (number) => {
        if (number > 1000) {
          return `${(number / 1000).toString()}k`
        }
        return number.toString()
    }

    return (
        <div className="data-container">
            <h1 className="channel-heading">Channel Analytics</h1>
            <div>
                <h1 className="bar-chart-heading">Bar Chart</h1>
                <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    data={data}
                    margin={{
                    top: 5,
                    }}
                >
                    <XAxis
                    dataKey="admin_name"
                    tick={{
                        stroke: "gray",
                        strokeWidth: 1,
                    }}
                    />
                    <YAxis
                    tickFormatter={DataFormatter}
                    tick={{
                        stroke: "gray",
                        strokeWidth: 0,
                    }}
                    />
                    <Legend
                    wrapperStyle={{
                        padding: 30,
                    }}
                    />
                    <Bar dataKey="subscribers" name="subscribers" fill="#1f77b4" barSize="20%" />
                    <Bar dataKey="no_of_videos" name="no_of_videos" fill="#fd7f0e" barSize="20%" />
                </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="pie-chart-container">
                <h1 className="bar-chart-heading">Pie Chart</h1>
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                        cx="70%"
                        cy="40%"
                        data={data}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="40%"
                        outerRadius="70%"
                        dataKey="subscribers"
                        >
                        <Cell name="Sandeep" fill="#e89b18" />
                        <Cell name="Madhu" fill="#b3d23f" />
                        <Cell name="Rahul" fill="#a44c9e" />
                        <Cell name="Ayaansh" fill="#3a6fd3" />
                        </Pie>
                        <Legend
                        iconType="circle"
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            {data.map((eachItem) => (
                <VideosAndSubscribers key={eachItem.id} details={eachItem}/>
            ))}
        </div>
    )
}

export default Home