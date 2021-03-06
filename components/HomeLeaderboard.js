import React from 'react';
import HomeLeaderboardEntry from './HomeLeaderboardEntry';
import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }
    return data;
};

export default function HomeLeaderboard(props) {
    const ENTRIES = 5;

    const { data, error } = useSWR(
        () => `/api/leaderboard?limit=${ENTRIES}`,
        fetcher
    );

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className='mb-10'>
            <div className='section-title'>Leaderboard</div>
            <div className='grid grid-cols-6 font-bold'>
                <div className='col-span-5' />
                <div className='col-span-1'>
                    <p className='text-xs text-center'>CloudCoins</p>
                </div>
            </div>
            {data.map((user, index) => {
                return (
                    <div className='mb-2'>
                        <HomeLeaderboardEntry
                            key={
                                user.github_username
                                    ? user.github_username
                                    : user.twitter_username
                            }
                            index={index}
                            user={user}
                        />
                    </div>
                );
            })}
        </div>
    );
}
