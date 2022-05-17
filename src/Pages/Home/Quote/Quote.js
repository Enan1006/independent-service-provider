import React from 'react';

const Quote = (props) => {
    const { img, name, review } = props.review;
    return (
        <div>
            <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800">
                    <div className="w-full pt-1 pb-5">
                        <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="w-full mb-10">
                        <div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
                        <p className="text-sm text-gray-600 text-center px-5">{review}</p>
                        <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
                    </div>
                    <div className="w-full">
                        <p className="text-md text-indigo-500 font-bold text-center">{name}</p>

                    </div>
                </div>
            </div>


            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">

            </div>
        </div>
    );
};

export default Quote;