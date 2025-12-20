import { useEffect, useState, useRef } from 'react'
import '../App.css'
import { motion } from "motion/react"

export function Clock() {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])
    useEffect(() => {
        setInterval(() => {
            setDate(new Date().toLocaleDateString())
        }, 1000)
    }, [])
    return (
        <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            className='t'
        >
            <div className='time'>{time}</div><br /><div className='date'> {date}</div>
        </motion.div>)
}

export function Weather() {
    const [weather, setWeather] = useState();
    useEffect(() => {
        async function fetchWeather() {
            let response = await fetch("https://api.weatherapi.com/v1/current.json?key=2a3657edeab34bc395e103813250112&q=Patna&aqi=no")
            response = await response.json()
            setWeather(response)
        } fetchWeather();
    }
        , [])
    if (!weather) {
        return
    }
    return (
        <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            className='wea'>
            <div className='flex'>
                <img src={weather.current.condition.icon} alt="image" />
                <div className='temp'>
                    {weather.current.temp_c}°C
                </div>
            </div>
            <div className='patna'>
                {weather.location.name}
            </div>
            <div className='bihar'>
                {weather.location.region}
            </div>
        </motion.div>
    )
}

export function Quote() {
    const [quote, setQuote] = useState();
    const hasFetched = useRef(false);
    useEffect(() => {
        async function quoteGen() {
            if (hasFetched.current) return;
            hasFetched.current = true;
            let response = await fetch("https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom", {
                headers: {
                    'X-Api-Key': 'NzpNZkXq8SxF3L3k4xFhIA==3MJShsn5ylEv5w0b'
                }
            }
            );
            response = await response.json()
            console.log(response)
            setQuote(response)
        } quoteGen()
    }, [])
    if (!quote) {
        return
    }
    return (
        <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            className='last'
        >
            <div className='quote'>"{quote[0].quote}"</div>
            <div className='author'>~{quote[0].author}</div>
        </motion.div>
    )
}