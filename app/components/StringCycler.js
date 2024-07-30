// 'use client'

import { useState, useEffect } from 'react';

const Marquee = (props) => {
    const { interval, strings } = props;

    // const strings = ["Software Maintainer", "Full-Stack Software Creator", "System Software Architect", "Open Source Contributor"];
    const [index, setIndex] = useState(0);
    const [stringsToCycleThrough, setStringsToCycleThrough] = useState(strings);

    useEffect(() => {
        // Set up an interval that runs every 1000 milliseconds (1 second)
        const timerId = setInterval(() => {
            setIndex((currentIndex) => (currentIndex + 1) % strings.length);
        }, interval);  // 1000 milliseconds = 1 second

        // Clean up the interval on component unmount
        return () => clearInterval(timerId);
    }, []);  // Empty dependency array means this effect runs only on mount and unmount

    return (
        stringsToCycleThrough[index]
    );
}

export default Marquee;