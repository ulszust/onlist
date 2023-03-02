import React from 'react';

function Home() {
    return (
        <>
            <div className="flex flex-col w-full mt-6">
                <div className=" mx-7 lg:mx-20 grid h-16 card bg-base-300 rounded-box place-items-center">moja lista</div>
                <div className="divider"></div>
                <div className=" mx-7 lg:mx-20 grid h-16 card bg-base-300 rounded-box place-items-center">moja lista2</div>
                <div className="divider"></div>
                <div className=" mx-7 lg:mx-20 grid h-16 card bg-base-300 rounded-box place-items-center">moja lista3</div>
            </div>
        </>
    )
}

export default Home;
