import React from 'react';

const Blogs = () => {
    return (
        <div className='my-16 text-left ml-2 md:mx-9'>
            <h1 className='text-6xl text-blue-500 text-center'>Blogs</h1>
            <div className='h-2 mx-auto bg-blue-500 w-64 mt-2'>
                <hr></hr>
            </div>
            <h3 className='text-xl text-blue-600 mt-10'>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Firebase manages all the data in the database in real time. Thus, exchanging data from database is easy and fast. So, if you want to create mobile apps like live streaming, chat messaging, etc., you can use Firebase.</p>
            <p>One of the most important aspects of website authentication is the focus on user and human-to-computer interaction. As a result, user authentication is important to understand when creating or improving your website's login system.

                Whether you want to increase your internal security, increase customer acquisition, or provide a better user experience for people exploring your site, it's important to know how it fits into the user authentication equation.
            </p>

            <h3 className='text-xl text-blue-600 mt-10'>What other services does firebase provide other than authentication?</h3>

            <p>The goal of every developer is to create great apps. If you're a developer, we're here to explore some of Firebase's best alternatives to take your mobile app development to new heights.


                Firebase continues to innovate and dominate the backend as a service (BaaS) market. It has grown so much that it has become an integral part of Google's mobile strategy. I've been a passionate Firebase user in the past, but my concern about its complexity and cost led me to explore other cloud options.
            </p>

            <h3 className='text-xl text-blue-600 mt-10'>Difference between authorization and authentication</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Authentication</th>
                            <th>Authorization</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Authentication verifies who the user is.</td>
                            <td>Authorization determines what resources a user can access.</td>
                        </tr>
                        <tr>
                            <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                            <td>Authorization works through settings that are implemented and maintained by the organization.</td>
                        </tr>
                        <tr>
                            <td>Authentication is the first step of a good identity and access management process.</td>
                            <td>Authorization isn’t visible to or changeable by the user.</td>
                        </tr>
                        <tr>
                            <td>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</td>
                            <td>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</td>
                        </tr>
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Blogs;